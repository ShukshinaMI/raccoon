"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importStar(require("express"));
const posts_1 = tslib_1.__importDefault(require("../controllers/posts"));
const postsRouter = (0, express_1.Router)();
const postsController = new posts_1.default();
const jsonParser = express_1.default.json();
postsRouter.get("/", postsController.getPosts);
postsRouter.get("/:id", postsController.getPost);
postsRouter.post("/add", jsonParser, postsController.addPost);
postsRouter.patch("/update/:id", jsonParser, postsController.updatePost);
postsRouter.delete("/delete/:id", postsController.deletePost);
exports.default = postsRouter;
//# sourceMappingURL=posts.js.map