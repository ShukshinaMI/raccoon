"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
const levels = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    crit: 4,
    fatal: 5
};
const loggerConfiguration = winston_1.default.createLogger({
    levels,
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'src/logs/raccoon.log' })
    ],
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: 'DD.MM.YYYY HH:mm:ss'
    }), winston_1.default.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`))
});
const logger = winston_1.default.createLogger(loggerConfiguration);
exports.default = logger;
//# sourceMappingURL=logger.js.map