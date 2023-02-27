import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { Tags } from "../models/Tags";

exports.getTags = async (req: Request, res: Response) => {
  const collection = req.app.locals.tags;

  try {
    const tags: Tags[] = await collection.find({}).toArray();
    res.send(tags);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.getTagsByPostId = async (req: Request, res: Response) => {
  const collection = req.app.locals.tags;

  try {
    const id = new ObjectId(req.params.postId);
    const tags: Tags = await collection.findOne({ _id: id });
    res.send(tags.names);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.addTags = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const tags: Tags = { names: req.body.names };

  const collection = req.app.locals.tags;

  try {
    await collection.insertOne(tags);
    res.send(tags);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.updateTags = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const collection = req.app.locals.tags;

  try {
    const id = new ObjectId(req.body.postId);

    const result = await collection.findOneAndUpdate(
      { _id: id },
      {
        $set: { names: req.body.names },
      }
    );

    const tags: Tags = result.value;

    if (tags) {
      res.send(tags);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.deleteTags = async (req: Request, res: Response) => {
  const collection = req.app.locals.tags;

  try {
    const id = new ObjectId(req.params.postId);
    const result = await collection.findOneAndDelete({ _id: id });
    const tags: Tags = result.value;

    if (tags) {
      res.send(tags);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
