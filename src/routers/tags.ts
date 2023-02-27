import express, { Router } from "express";

const tagsController = require("../controllers/tags.ts");
const jsonParser = express.json();
const tagsRouter = Router();

tagsRouter.get("/tags", tagsController.getTags);

tagsRouter.get("/tags/:postId", tagsController.getTagsByPostId);

tagsRouter.post("/tags", jsonParser, tagsController.addTags);

tagsRouter.patch("/tags", jsonParser, tagsController.updateTags);

tagsRouter.delete("/tags/:postId", tagsController.deleteTags);

export default tagsRouter;
