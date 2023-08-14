import {environment} from "../environments/environments";

interface DBClient {
  user: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  ssl: boolean;
}

const dbClient: DBClient = {
  user: environment.user,
  host: environment.host,
  database: environment.database,
  password: environment.password,
  port: environment.dbPort,
  ssl: false,
};

export default dbClient;
