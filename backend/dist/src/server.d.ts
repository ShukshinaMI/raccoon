declare class Server {
    private app;
    constructor();
    private config;
    private dbConnect;
    private routerConfig;
    start: (port: number) => Promise<unknown>;
}
export default Server;
