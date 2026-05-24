import {getFeed} from "../services/post.api";

import {use, useContext} from "react";
import {PostContext} from "../post.contex.jsx";

export const usePost = () => {
    const context = useContext(PostContext);
    const {loading, setLoading, post, setPost, feed, setFeed} = context;



    
};


