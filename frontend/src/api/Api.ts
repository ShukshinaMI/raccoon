import axios from "axios";

export interface PostModel {
  postId: number;
  title: string;
  description?: string;
  dateCreate: string;
  likes: number;
  images?: any[];
  tags?: any[];
}

export interface UpdatePostModel {
  postId: number;
  title: string;
  description?: string;
  likes: number;
}

export interface AddPostModel {
  title: string;
  description?: string;
  images?: any[];
  tags?: string[];
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  description: string;
}

export class Api {
  api = {
    getPostsData: async () => axios.get("/posts"),

    getPostData: async (id: number) => axios.get(`/posts/${id}`),

    addPostData: async (postData: AddPostModel) => axios.post(`/posts/add`, postData),

    updatePostData: async (id: number, postData: UpdatePostModel) => axios.patch(`/posts/update`, postData),

    deletePostData: async (id: number) => axios.delete(`/posts/delete/${id}`),
  };
}
