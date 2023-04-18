"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = tslib_1.__importDefault(require("./server"));
const logger_1 = tslib_1.__importDefault(require("./src/utils/logger/logger"));
const port = 5002;
const starter = new server_1.default()
    .start(port)
    .then((port) => {
    logger_1.default.info(`Server running 'http://localhost:${port}'`);
    logger_1.default.info(`Swagger running 'http://localhost:${port}/swagger'`);
})
    .catch((error) => logger_1.default.error(error));
exports.default = starter;
//# sourceMappingURL=app.js.map