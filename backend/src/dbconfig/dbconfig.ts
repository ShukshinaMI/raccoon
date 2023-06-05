import {environment} from "../environments/environments";

interface DBClient {
  user: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  ssl: boolean;
  max: number;
  connectionTimeoutMillis: number;
  idleTimeoutMillis: number;
}

const dbClient: DBClient = {
  user: environment.user,
  host: environment.host,
  database: environment.database,
  password: environment.password,
  port: environment.dbPort,
  ssl: false,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
};

export default dbClient;
