import express from "express";
import bodyParser from "body-parser";
import logger from "./src/utils/logger/logger";
import router from "./src/routers";
import getPool from "./src/dbconfig/dbconnector";
import dbClient from "./src/dbconfig/dbconfig";
import * as http from "http";
import swaggerDocs from "./src/utils/swagger/swagger";
import { notFoundHandler } from "./src/helpers/notFoundHandler";

class Server {
  private readonly app;

  constructor() {
    this.app = express();
    this.addConfig();
    this.addSwaggerDocs();
    this.addRouterConfig();
    this.addDbConnect();
  }

  private addConfig() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private addRouterConfig() {
    this.app.use(router);
    this.app.use("*", notFoundHandler);
  }

  private addSwaggerDocs() {
    swaggerDocs(this.app);
  }

  private addDbConnect() {
    this.app.set("dbPool", getPool());

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

  public start = (port?: string) => {
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
        }).on('uncaughtException', function (err) {
        console.log(err);
      });
    });
  };
}

export default Server;
