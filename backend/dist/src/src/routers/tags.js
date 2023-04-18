"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const tags_1 = tslib_1.__importDefault(require("../controllers/tags"));
const tagsRouter = (0, express_1.Router)();
const tagsController = new tags_1.default();
tagsRouter.get("/tags", tagsController.getTags);
exports.default = tagsRouter;
//# sourceMappingURL=tags.js.map