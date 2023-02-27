import express, { Request, Response } from "express";
import postsRouter from "./src/routers/posts";
import tagsRouter from "./src/routers/tags";
import requestLogger from "./src/middlewares/request";
import { MongoClient } from "mongodb";

const app = express();

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    const dbRaccoon = client.db("raccoon");
    app.locals.posts = dbRaccoon.collection("posts");
    app.locals.tags = dbRaccoon.collection("tags");
    app.listen(3000);
    console.log("Сервер ожидает подключения...");
  } catch (err) {
    return console.log(err);
  }
})();

app.use(requestLogger);

app.use(postsRouter);
app.use(tagsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Запрос не найден");
});

process.on("SIGINT", async () => {
  await client.close();
  console.log("Приложение завершило работу");
  process.exit();
});
