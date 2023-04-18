import { Router } from "express";
import TagsController from "../controllers/tags";

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.get("/tags", tagsController.getTags);

export default tagsRouter;
