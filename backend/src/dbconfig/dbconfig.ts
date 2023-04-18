interface DBClient {
    user: string;
    password: string | undefined;
    database: string;
    host: string;
    port: number;
    ssl: boolean;
    max: number;
    idleTimeoutMillis: number;
}

const dbClient: DBClient = {
    user: "postgres",
    host: "localhost",
    database: "raccoon",
    password: "AmFsh23072015^^",
    port: 5432,
    ssl: false,
    max: 20,
    idleTimeoutMillis: 10000,
};

export default dbClient;
