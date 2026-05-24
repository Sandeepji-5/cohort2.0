import {getFeed} from "../services/post.api";

import {useContext} from "react";
import {PostContext} from "../post.context.jsx";
import {createPost} from "../services/post.api";
export const usePost = () => {
    const context = useContext(PostContext);
    const {loading, setLoading, post, setPost, feed, setFeed} = context;

    const handleGetFeed = async () => {
        setLoading(true);
        try {
            const data = await getFeed();
            setFeed(data);
        } catch (error) {
            console.error("Error fetching feed:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true);   
        try {
            await createPost(imageFile, caption);
            setFeed([data.post, ...feed]);
            // await handleGetFeed(); // Refresh feed after creating post
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setLoading(false);
        }
    };




    return {
        loading,
        setLoading,
        post,
        setPost,
        feed,
        setFeed,
        handleGetFeed,
        handleCreatePost
    };
};
