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
declare const dbClient: DBClient;
export default dbClient;
