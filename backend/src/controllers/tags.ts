import { Tag } from "../models/tags";
import { Request, Response } from "express";
import DBConnector from "../dbconfig/dbconnector";
import dbClient from "../dbconfig/dbconfig";

class TagsController {
  public async getTags(_req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const sql = "SELECT * FROM tags";
      const { rows } = await client.query(sql);
      const tags: Tag[] = rows;

      client.release();

      res.send(tags);
    } catch (error) {
      res.sendStatus(400).send(error);
    }
  }

  public async addTags(req: Request, res: Response) {
    try {
      const pool = new DBConnector(dbClient);
      const client = await pool.connect();

      const sql = `INSERT INTO public.tags(tag_name) VALUES (${req.body.name});`;
      const { rows } = await client.query(sql);
      const tags: Tag[] = rows;

      client.release();

      res.send(tags);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default TagsController;
