import axios from "axios";

export interface PostModel {
    id: number;
    title: string;
    description?: string;
    dateCreate: string;
    likes: number;
}

export interface UserModel {
    id: number;
    name: string;
    email: string;
    description: string;
}

export class Api {
    api = {
        getPostsData: async () => axios.get("posts"),

        getPostData: async (id: number) => axios.get(`posts/${id}`),

        addPostData: async (postData: PostModel) => axios.post(`posts/add`, postData),

        updatePostData: async (postData: PostModel) => axios.patch(`posts/update`, postData),

        deletePostData: async (id: number) => axios.delete(`posts/delete${id}`),
    };
}
