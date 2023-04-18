"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const posts_1 = tslib_1.__importDefault(require("./posts"));
const tags_1 = tslib_1.__importDefault(require("./tags"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const swagger_json_1 = tslib_1.__importDefault(require("../../swagger.json"));
const router = (0, express_1.Router)();
router.use("/posts", posts_1.default);
router.use("/tags", tags_1.default);
router.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
exports.default = router;
//# sourceMappingURL=index.js.map