import { ObjectId } from "mongodb";

export interface Post {
  name: string;
  description?: string;
  img?: string;
  tags?: ObjectId;
}
