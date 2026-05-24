import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const getFeed = async () => {
  try {
    const response = await api.get("/post/feed");
    // console.log("API Response in postApi:", response.data.posts);
    return response.data.posts;
    

  } catch (error) {
    console.error(error.response?.data?.message || error.message);
    throw error;
  }
};


export const createPost = async (imageFile, caption) => {
    try {
        const formData = new FormData();
        formData.append("caption", caption);
        formData.append("d", imageFile);

        const response = await api.post("/post/createPost", formData);

        return response.data;

    } catch (error) {
        console.error(error.response?.data?.message || error.message);
        throw error;
    }
};


export async function likePost(postId) {
    try {
        const response = await api.post(`/post/like/${postId}`);
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message || error.message);
        throw error;
    }
}

export async function unlikePost(postId) {
    try {
        const response = await api.post(`/post/unlike/${postId}`);
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message || error.message);
        throw error;
    }
}
 