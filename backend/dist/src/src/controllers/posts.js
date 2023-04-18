"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dbconnector_1 = tslib_1.__importDefault(require("../dbconfig/dbconnector"));
const dbconfig_1 = tslib_1.__importDefault(require("../dbconfig/dbconfig"));
const logger_1 = tslib_1.__importDefault(require("../utils/logger/logger"));
class PostsController {
    getPosts(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const connection = yield pool.connect();
                const sql = "SELECT * FROM posts";
                const { rows } = yield connection.query(sql);
                const posts = rows;
                connection.release();
                res.send(posts);
                logger_1.default.info(`${req.method} ${req.originalUrl}: success`);
            }
            catch (error) {
                res.status(400).send(error);
                logger_1.default.error(`${req.method} ${req.originalUrl}: ${error}`);
            }
        });
    }
    getPost(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const { id } = req.params;
                const sql = `SELECT * FROM posts WHERE "postId" = ${id}`;
                const { rows } = yield client.query(sql);
                const post = rows;
                client.release();
                res.send(post);
                logger_1.default.info(`${req.method} ${req.originalUrl}: success`);
            }
            catch (error) {
                res.status(400).send(error);
                logger_1.default.error(`${req.method} ${req.originalUrl}: ${error}`);
            }
        });
    }
    addPost(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const { title, description } = req.body;
                const sql = `INSERT INTO posts (title, description, "dateCreate", likes) VALUES ('${title}', '${description}', '2023-04-07', 0)`;
                yield client.query(sql);
                client.release();
                res.send(true);
                logger_1.default.info(`${req.method} ${req.originalUrl}: success`);
            }
            catch (error) {
                res.status(400).send(error);
                logger_1.default.error(`${req.method} ${req.originalUrl}: ${error}`);
            }
        });
    }
    updatePost(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const { id, title, description, likes } = req.body;
                const sql = `UPDATE posts SET title = '${title}', description = '${description}', likes = ${likes} WHERE "postId" = ${id}`;
                yield client.query(sql);
                client.release();
                res.send(true);
                logger_1.default.info(`${req.method} ${req.originalUrl}: success`);
            }
            catch (error) {
                res.status(400).send(error);
                logger_1.default.error(`${req.method} ${req.originalUrl}: ${error}`);
            }
        });
    }
    deletePost(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const { id } = req.params;
                const sql = `DELETE FROM posts WHERE "postId" = ${id}`;
                yield client.query(sql);
                client.release();
                res.send(true);
                logger_1.default.info(`${req.method} ${req.originalUrl}: success`);
            }
            catch (error) {
                res.status(400).send(error);
                logger_1.default.error(`${req.method} ${req.originalUrl}: ${error}`);
            }
        });
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.js.map