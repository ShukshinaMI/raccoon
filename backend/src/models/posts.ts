import PostDto from "./post.dto";

/**
 * @openapi
 * components:
 *   schemas:
 *     Posts:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/PostDto'
 */
type Posts = PostDto[];

export default Posts;
