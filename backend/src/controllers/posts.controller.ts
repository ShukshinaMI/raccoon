import { Request, Response } from "express";
import getPool from "../dbconfig/dbconnector";
import { requestErrorLogger, requestSuccessLogger } from "../utils/logger/loggerHelper";
import { validate, ValidationError } from "class-validator";
import PostDto from "../models/post.dto";
import AddPostDto from "../models/addPost.dto";
import UpdatePostDto from "../models/updatePost.dto";

class PostsController {
  private readonly pool;

  constructor() {
    this.pool = getPool();
    this.pool.connect();
  }

  private static requestError(res: Response, method: string, originalUrl: string, errors: Error | ValidationError[]) {
    requestErrorLogger(method, originalUrl, errors);
    res.status(400).send(errors);
  }

  private static getArrayString(array?: string[]): string {
    let string: string = "";

    if (!array) {
      return string;
    }

    array.forEach((tag: string, index: number) => {
      string += `'${tag}'${index === array.length - 1 ? "" : ","}`;
    });

    return string;
  }

  public async getPosts(req: Request, res: Response) {
    const {
      method,
      originalUrl,
      body: { searchString, searchType },
    } = req;

    const sql =
      searchType === "name" || !searchString
        ? `SELECT * FROM posts WHERE LOWER(title) LIKE LOWER('%${searchString}%')`
        : `SELECT * FROM posts WHERE '${searchString}'= ANY(tags)`;

    this.pool.query(sql, [], (error, { rows }) => {
      if (error) {
        PostsController.requestError(res, method, originalUrl, error);
        return;
      }

      requestSuccessLogger(method, originalUrl);
      const posts = rows.map((row) => new PostDto(row));
      return res.send(posts);
    });
  }

  public async getPost(req: Request, res: Response) {
    const {
      method,
      originalUrl,
      params: { id },
    } = req;

    if (!id) {
      PostsController.requestError(res, method, originalUrl, new Error("id parameter cannot be null"));
      return;
    }

    const sql = `SELECT * FROM posts WHERE "postId" = ${id}`;

    this.pool.query(sql, [], (error, result) => {
      if (error || !result) {
        PostsController.requestError(res, method, originalUrl, error);
        return;
      }

      requestSuccessLogger(method, originalUrl);
      const post = new PostDto(result.rows[0]);
      return res.send(post);
    });
  }

  public async addPost(req: Request, res: Response) {
    const {
      method,
      originalUrl,
      body: { title, description, tags },
    } = req;

    try {
      const addPostDto = new AddPostDto();
      addPostDto.title = title;
      addPostDto.description = description;
      addPostDto.tags = tags;

      const errors = await validate(addPostDto);

      if (errors.length > 0) {
        PostsController.requestError(res, method, originalUrl, errors);
        return;
      }

      const sql = `INSERT INTO posts (title, description, "dateCreate", likes, tags) VALUES ('${title}', '${description}', '${new Date().toLocaleDateString(
        "ru-RU",
      )}', 0, ARRAY[${PostsController.getArrayString(tags)}]::text[])`;

      console.log(sql);

      this.pool.query(sql, [], (error) => {
        if (error) {
          PostsController.requestError(res, method, originalUrl, error);
          return;
        }

        requestSuccessLogger(method, originalUrl);
        return res.send(true);
      });
    } catch (error) {
      PostsController.requestError(res, method, originalUrl, new Error("Data model error"));
    }
  }

  public async updatePost(req: Request, res: Response) {
    const {
      method,
      originalUrl,
      body: { postId, title, description, likes, tags },
    } = req;

    try {
      const updatePostDto = new UpdatePostDto();
      updatePostDto.postId = postId;
      updatePostDto.title = title;
      updatePostDto.description = description;
      updatePostDto.likes = likes;
      updatePostDto.tags = tags;

      const errors = await validate(updatePostDto);

      if (errors.length > 0) {
        PostsController.requestError(res, method, originalUrl, errors);
        return;
      }

      const sql = `UPDATE posts 
        SET title = '${title}', 
        description = '${description}', 
        likes = ${likes}, 
        tags = ARRAY[${PostsController.getArrayString(tags)}]::text[]
        WHERE "postId" = ${postId}`;

      this.pool.query(sql, [], (error) => {
        if (error) {
          PostsController.requestError(res, method, originalUrl, error);
          return;
        }

        requestSuccessLogger(method, originalUrl);
        return res.send(true);
      });
    } catch (error) {
      PostsController.requestError(res, method, originalUrl, new Error("Data model error"));
    }
  }

  public async deletePost(req: Request, res: Response) {
    const {
      method,
      originalUrl,
      params: { id },
    } = req;

    if (!id) {
      PostsController.requestError(res, method, originalUrl, new Error("id parameter cannot be null"));
      return;
    }

    const sql = `DELETE FROM posts WHERE "postId" = ${id}`;

    this.pool.query(sql, [], (error) => {
      if (error) {
        PostsController.requestError(res, method, originalUrl, error);
        return;
      }

      requestSuccessLogger(method, originalUrl);
      return res.send(true);
    });
  }
}

export default PostsController;
