import { Router } from "express";
import postsRouter from "./posts";
import tagsRouter from "./tags";
import swaggerUi from "swagger-ui-express";
import swagger from "../../swagger.json";

const router = Router();

router.use("/posts", postsRouter);
router.use("/tags", tagsRouter);
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swagger));

export default router;
