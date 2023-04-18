import express from "express";
import bodyParser from "body-parser";
import logger from "./src/utils/logger/logger";
import router from "./src/routers";
import DBConnector from "./src/dbconfig/dbconnector";
import dbClient from "./src/dbconfig/dbconfig";
import { notFoundHandler } from "./src/helpers/notFoundHandler";
import * as http from "http";

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private dbConnect() {
    const pool = new DBConnector(dbClient);
    this.app.set("dbPool", pool);

    this.app
        .get("dbPool")
        .connect()
        .then(() =>
            logger.info(
                `Connected with database: ${dbClient.database} and host: ${dbClient.host} as user: ${dbClient.user}`,
            ),
        )
        .catch((error: any) => logger.error(`Error connected with Database ${error}`));
  }

  private routerConfig() {
    this.app.use(router);
    this.app.use("*", notFoundHandler);
  }

  public start = (port: number) => {
    const server = http.createServer(this.app);

    return new Promise((resolve, reject) => {
      server
          .listen(port, () => {
            resolve(port);
            logger.info(`Listen port: ${port}`);
          })
          .on("error", (error: Object) => {
            reject(error);
            logger.error(`Error listen port: ${error}`);
          });
    });
  };
}

export default Server;
