"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pg_1 = require("pg");
const logger_1 = tslib_1.__importDefault(require("../utils/logger/logger"));
class DBConnector {
    constructor(dbConfig) {
        this._pool = new pg_1.Pool(dbConfig);
        this._pool.on("error", (err) => {
            logger_1.default.error(`Error:\n${err.message}\n${err.stack}`);
        });
    }
    connect() {
        return this._pool.connect();
    }
}
exports.default = DBConnector;
//# sourceMappingURL=dbconnector.js.map