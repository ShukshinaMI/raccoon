import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { Post } from "../models/Post";

exports.getPosts = async (req: Request, res: Response) => {
  const collection = req.app.locals.posts;

  try {
    const posts: Post[] = await collection.find({}).toArray();
    res.send(posts);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.getPost = async (req: Request, res: Response) => {
  const collection = req.app.locals.posts;

  try {
    const id = new ObjectId(req.params.id);
    const post: Post = await collection.findOne({ _id: id });

    if (post) {
      res.send(post);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.addPost = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const post: Post = {
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
  };

  const collection = req.app.locals.posts;

  try {
    await collection.insertOne(post);
    res.send(post);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.updatePost = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.sendStatus(400);
  }

  const collection = req.app.locals.posts;

  try {
    const id = new ObjectId(req.body.id);

    const result = await collection.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          img: req.body.img,
          tags: new ObjectId(req.body.tagsId),
        },
      }
    );

    const post: Post = result.value;

    if (post) {
      res.send(post);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.deletePost = async (req: Request, res: Response) => {
  const collection = req.app.locals.posts;

  try {
    const id = new ObjectId(req.params.id);
    const result = await collection.findOneAndDelete({ _id: id });
    const post: Post = result.value;

    if (post) {
      res.send(post);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
