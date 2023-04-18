import Server from "./server";
import logger from "./src/utils/logger/logger";

const port = 5002;

const starter = new Server()
    .start(port)
    .then((port) => {
        logger.info(`Server running 'http://localhost:${port}'`);
        logger.info(`Swagger running 'http://localhost:${port}/swagger'`);
    })
    .catch((error) => logger.error(error));

export default starter;
