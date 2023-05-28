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
  user: "postgres",
  host: "localhost",
  database: "raccoon",
  password: "",
  port: 5432,
  ssl: false,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
};

export default dbClient;
