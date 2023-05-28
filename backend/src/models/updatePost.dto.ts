import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
/**
 * @openapi
 * components:
 *   schemas:
 *     UpdatePostDto:
 *       type: object
 *       required:
 *         - postId
 *         - title
 *         - likes
 *         - tags
 *       properties:
 *         postId:
 *            type: number
 *         title:
 *            type: string
 *         description:
 *            type: string
 *         likes:
 *            type: number
 *         tags:
 *            type: array
 *            items:
 *              type: string
 */
class UpdatePostDto {
  @IsNumber()
  @IsNotEmpty()
  postId: number = 0;

  @IsString()
  @IsNotEmpty()
  title: string = "";

  @IsString()
  description: string = "";

  @IsNumber()
  @IsNotEmpty()
  likes: number = 0;

  @IsArray()
  @IsNotEmpty()
  tags: string[] = [];
}

export default UpdatePostDto;
