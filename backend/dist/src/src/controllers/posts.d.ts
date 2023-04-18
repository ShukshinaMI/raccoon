import { Request, Response } from "express";
declare class PostsController {
    getPosts(req: Request, res: Response): Promise<void>;
    getPost(req: Request, res: Response): Promise<void>;
    addPost(req: Request, res: Response): Promise<void>;
    updatePost(req: Request, res: Response): Promise<void>;
    deletePost(req: Request, res: Response): Promise<void>;
}
export default PostsController;
