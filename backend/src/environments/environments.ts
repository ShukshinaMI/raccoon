const environment = {
    port: process.env.PORT || "",
    user: process.env.DB_USER || "",
    host: process.env.DB_HOST || "",
    database: process.env.DB_NAME || "",
    password: process.env.DB_PASSWORD || "",
    dbPort: parseInt(process.env.DB_PORT || "5432"),
};

export { environment };
