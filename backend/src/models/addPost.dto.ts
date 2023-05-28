import { IsArray, IsNotEmpty, IsString } from "class-validator";
/**
 * @openapi
 * components:
 *   schemas:
 *     AddPostDto:
 *       type: object
 *       required:
 *         - title
 *         - tags
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 */
class AddPostDto {
  @IsString()
  @IsNotEmpty()
  title: string = "";

  @IsString()
  description: string = "";

  @IsArray()
  @IsNotEmpty()
  tags: string[] = [];
}

export default AddPostDto;
