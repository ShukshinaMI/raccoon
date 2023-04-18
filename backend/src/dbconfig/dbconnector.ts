import { Pool, PoolClient, PoolConfig } from "pg";
import logger from "../utils/logger/logger";

class DBConnector {
  private readonly _pool: Pool;

  constructor(dbConfig: PoolConfig) {
    this._pool = new Pool(dbConfig);

    this._pool.on("error", (err: Error) => {
      logger.error(`Error:\n${err.message}\n${err.stack}`);
    });
  }

  connect(): Promise<PoolClient> {
    return this._pool.connect();
  }
}

export default DBConnector;
