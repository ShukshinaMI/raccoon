import express, { Router } from "express";
import PostsController from "../controllers/posts";

const postsRouter = Router();
const postsController = new PostsController();
const jsonParser = express.json();

postsRouter.get("/", postsController.getPosts);

postsRouter.get("/:id", postsController.getPost);

postsRouter.post("/add", jsonParser, postsController.addPost);

postsRouter.patch("/update/:id", jsonParser, postsController.updatePost);

postsRouter.delete("/delete/:id", postsController.deletePost);

export default postsRouter;
