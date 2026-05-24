import React, { useEffect, useState } from "react";
import post from "../services/post.api";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const res = await post();
      console.log(res);
      setPosts(res.data); // assuming API returns data in res.data
    } catch (err) {
      console.log(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    getPost(); // self-called when component renders
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {posts.length > 0 ? (
        posts.map((item) => (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default Post;