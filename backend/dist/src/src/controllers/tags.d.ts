import { Request, Response } from "express";
declare class TagsController {
    getTags(_req: Request, res: Response): Promise<void>;
    addTags(req: Request, res: Response): Promise<void>;
}
export default TagsController;
