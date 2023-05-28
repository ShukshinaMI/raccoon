import express, { Router } from "express";
import PostsController from "../controllers/posts.controller";

const postsRouter = Router();
const postsController = new PostsController();
const jsonParser = express.json();

/**
 * @openapi
 * /posts/:
 *   post:
 *     tags:
 *       - Posts
 *     summary: Получить все карточки постов
 *     parameters:
 *       - in: body
 *         name: searchString
 *         required: true
 *         schema:
 *           type: string
 *           default: ""
 *       - in: body
 *         name: searchType
 *         required: true
 *         schema:
 *           type: string
 *           default: name
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Posts'
 */
postsRouter.post("/", jsonParser, postsController.getPosts.bind(postsController));

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Получить карточку поста
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *           format: uuid
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostDto'
 */
postsRouter.get("/:id", postsController.getPost.bind(postsController));

/**
 * @openapi
 * /posts/add:
 *   post:
 *     tags:
 *       - Posts
 *     summary: Создать карточку поста
 *     parameters:
 *       - in: body
 *         name: post
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/PostDto'
 *     responses:
 *       200:
 *         description: Success
 */
postsRouter.post("/add", jsonParser, postsController.addPost.bind(postsController));

/**
 * @openapi
 * /posts/update:
 *   patch:
 *     tags:
 *       - Posts
 *     summary: Обновить карточку поста
 *     parameters:
 *       - in: body
 *         name: post
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/PostDto'
 *     responses:
 *       200:
 *         description: Success
 */
postsRouter.patch("/update", jsonParser, postsController.updatePost.bind(postsController));

/**
 * @openapi
 * /posts/delete/{id}:
 *   delete:
 *     tags:
 *       - Posts
 *     summary: Удалить карточку поста
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *           format: uuid
 *     responses:
 *       200:
 *         description: Success
 */
postsRouter.delete("/delete/:id", postsController.deletePost.bind(postsController));

export default postsRouter;
