import winston from "winston";

const levels = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    crit: 4,
    fatal: 5
};

const loggerConfiguration = winston.createLogger({
    levels,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'src/logs/raccoon.log' })
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'DD.MM.YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
});

const logger = winston.createLogger(loggerConfiguration);

export default logger;

