

import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});



export const getPosts = async () => {
    const response = await api.get("/posts/feed")
    return response.data;
};

export const createPost = async (caption, image) => {