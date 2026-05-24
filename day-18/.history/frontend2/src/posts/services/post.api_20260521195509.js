import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const getFeed = async () => {
  try {
    const response = await api.get("/post/feed");
    console.log("API Response:", response.data.posts);
    return response.data.posts;

  } catch (error) {
    console.error(error.response?.data?.message || error.message);
    throw error;
  }
};


// have to find out the User details from the data.....
