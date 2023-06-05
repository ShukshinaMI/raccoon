import swaggerJSDoc from "swagger-jsdoc";
import {environment} from "../../environments/environments";

export const swaggerOptions: swaggerJSDoc.Operation = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "0.1.0",
    },
    servers: [
      {
        url: `http://localhost:${environment.port}`,
      },
    ],
  },
  apis: ["src/routers/posts.ts", "src/models/*.dto.ts", "src/models/*.ts"],
};
