import axios from "axios";

export interface PostModel {
  postId: number;
  title: string;
  description?: string;
  dateCreate: string;
  likes: number;
  tags?: string[];
}

export interface UpdatePostModel {
  postId: number;
  title: string;
  description?: string;
  likes: number;
  tags?: string[];
}

export interface AddPostModel {
  title: string;
  description?: string;
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
    getPostsData: async (data: { searchString: string; searchType: string }) => axios.post("/api/posts", data),

    getPostData: async (id: number) => axios.get(`/api/posts/${id}`),

    addPostData: async (postData: AddPostModel) => axios.post(`/api/posts/add`, postData),

    updatePostData: async (postData: UpdatePostModel) => axios.patch(`/api/posts/update`, postData),

    deletePostData: async (id: number) => axios.delete(`/api/posts/delete/${id}`),
  };
}
