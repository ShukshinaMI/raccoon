"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dbconnector_1 = tslib_1.__importDefault(require("../dbconfig/dbconnector"));
const dbconfig_1 = tslib_1.__importDefault(require("../dbconfig/dbconfig"));
class TagsController {
    getTags(_req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const sql = "SELECT * FROM tags";
                const { rows } = yield client.query(sql);
                const tags = rows;
                client.release();
                res.send(tags);
            }
            catch (error) {
                res.sendStatus(400).send(error);
            }
        });
    }
    addTags(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const pool = new dbconnector_1.default(dbconfig_1.default);
                const client = yield pool.connect();
                const sql = `INSERT INTO public.tags(tag_name) VALUES (${req.body.name});`;
                const { rows } = yield client.query(sql);
                const tags = rows;
                client.release();
                res.send(tags);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.default = TagsController;
//# sourceMappingURL=tags.js.map