import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swaggerOptions";

const swaggerDocs = (app: Express) => {
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("swagger-docs.json", (_req: Request, res: Response) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
