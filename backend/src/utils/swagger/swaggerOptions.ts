import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Operation = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:5002",
      },
    ],
  },
  apis: ["src/routers/posts.ts", "src/models/*.dto.ts", "src/models/*.ts"],
};
