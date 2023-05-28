import logger from "./logger";
import { ValidationError } from "class-validator";

export const requestSuccessLogger = (method: string, originalUrl: string) => {
  logger.info(`${method} ${originalUrl}: success`);
};

export const requestErrorLogger = (method: string, originalUrl: string, errors: Error | ValidationError[]) => {
  logger.error(`${method} ${originalUrl}: ${JSON.stringify(errors)}`);
};
