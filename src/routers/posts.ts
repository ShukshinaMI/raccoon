import express, { Router } from "express";

const postsController = require("../controllers/posts.ts");
const jsonParser = express.json();
const postsRouter = Router();

postsRouter.get("/posts", postsController.getPosts);

postsRouter.get("/posts/:id", postsController.getPost);

postsRouter.post("/posts", jsonParser, postsController.addPost);

postsRouter.patch("/posts", jsonParser, postsController.updatePost);

postsRouter.delete("/posts/:id", postsController.deletePost);

export default postsRouter;
