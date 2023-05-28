import { IsString, IsNotEmpty, IsNumber, IsArray } from "class-validator";
/**
 * @openapi
 * components:
 *   schemas:
 *     PostDto:
 *       type: object
 *       required:
 *         - postId
 *         - title
 *         - dateCreate
 *         - likes
 *         - tags
 *       properties:
 *         postId:
 *           type: number
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         dateCreate:
 *           type: string
 *         likes:
 *           type: number
 *         tags:
 *           type: array
 *           items:
 *             type: string
 */
class PostDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number = 0;

  @IsString()
  @IsNotEmpty()
  title: string = "";

  @IsString()
  description: string = "";

  @IsString()
  @IsNotEmpty()
  dateCreate: string = "";

  @IsNumber()
  @IsNotEmpty()
  likes: number = 0;

  @IsArray()
  @IsNotEmpty()
  tags: string[] = [];

  constructor(data: PostDto | null) {
    this.postId = data?.postId || 0;
    this.title = data?.title || "";
    this.dateCreate = data?.dateCreate || String(new Date());
    this.description = data?.description || "";
    this.likes = data?.likes || 0;
    this.tags = data?.tags || [];
  }
}

export default PostDto;
