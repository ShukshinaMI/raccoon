import { Request, Response } from "express";
import DBConnector from "../dbconfig/dbconnector";
import dbClient from "../dbconfig/dbconfig";
import logger from "../utils/logger/logger";

class PostsController {
  public async getPosts(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const connection = await pool.connect();

      const sql = "SELECT * FROM posts";
      const { rows } = await connection.query(sql);
      const posts = rows;

      connection.release();

      res.send(posts);
      logger.info(`${req.method} ${req.originalUrl}: success`);
    } catch (error) {
      res.status(400).send(error);
      logger.error(`${req.method} ${req.originalUrl}: ${error}`);
    }
  }

  public async getPost(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const { id } = req.params;

      const sql = `SELECT * FROM posts WHERE "postId" = ${id}`;
      const { rows } = await client.query(sql);
      const post = rows;

      client.release();

      res.send(post);
      logger.info(`${req.method} ${req.originalUrl}: success`);
    } catch (error) {
      res.status(400).send(error);
      logger.error(`${req.method} ${req.originalUrl}: ${error}`);
    }
  }

  public async addPost(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const { title, description } = req.body;

      const sql = `INSERT INTO posts (title, description, "dateCreate", likes) VALUES ('${title}', '${description}', '2023-04-07', 0)`;

      await client.query(sql);

      client.release();

      res.send(true);
      logger.info(`${req.method} ${req.originalUrl}: success`);
    } catch (error) {
      res.status(400).send(error);
      logger.error(`${req.method} ${req.originalUrl}: ${error}`);
    }
  }

  public async updatePost(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const { id, title, description, likes } = req.body;

      const sql = `UPDATE posts SET title = '${title}', description = '${description}', likes = ${likes} WHERE "postId" = ${id}`;
      await client.query(sql);

      client.release();

      res.send(true);
      logger.info(`${req.method} ${req.originalUrl}: success`);
    } catch (error) {
      res.status(400).send(error);
      logger.error(`${req.method} ${req.originalUrl}: ${error}`);
    }
  }

  public async deletePost(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const { id } = req.params;

      const sql = `DELETE FROM posts WHERE "postId" = ${id}`;
      await client.query(sql);

      client.release();

      res.send(true);
      logger.info(`${req.method} ${req.originalUrl}: success`);
    } catch (error) {
      res.status(400).send(error);
      logger.error(`${req.method} ${req.originalUrl}: ${error}`);
    }
  }
}

export default PostsController;
