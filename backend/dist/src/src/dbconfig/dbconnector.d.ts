import { PoolClient, PoolConfig } from "pg";
declare class DBConnector {
    private readonly _pool;
    constructor(dbConfig: PoolConfig);
    connect(): Promise<PoolClient>;
}
export default DBConnector;
