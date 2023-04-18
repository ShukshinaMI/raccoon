"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const logger_1 = tslib_1.__importDefault(require("./src/utils/logger/logger"));
const routers_1 = tslib_1.__importDefault(require("./src/routers"));
const dbconnector_1 = tslib_1.__importDefault(require("./src/dbconfig/dbconnector"));
const dbconfig_1 = tslib_1.__importDefault(require("./src/dbconfig/dbconfig"));
const notFoundHandler_1 = require("./src/helpers/notFoundHandler");
const http = tslib_1.__importStar(require("http"));
class Server {
    constructor() {
        this.start = (port) => {
            const server = http.createServer(this.app);
            return new Promise((resolve, reject) => {
                server
                    .listen(port, () => {
                    resolve(port);
                    logger_1.default.info(`Listen port: ${port}`);
                })
                    .on("error", (error) => {
                    reject(error);
                    logger_1.default.error(`Error listen port: ${error}`);
                });
            });
        };
        this.app = (0, express_1.default)();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    dbConnect() {
        const pool = new dbconnector_1.default(dbconfig_1.default);
        this.app.set("dbPool", pool);
        this.app
            .get("dbPool")
            .connect()
            .then(() => logger_1.default.info(`Connected with database: ${dbconfig_1.default.database} and host: ${dbconfig_1.default.host} as user: ${dbconfig_1.default.user}`))
            .catch((error) => logger_1.default.error(`Error connected with Database ${error}`));
    }
    routerConfig() {
        this.app.use(routers_1.default);
        this.app.use("*", notFoundHandler_1.notFoundHandler);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map