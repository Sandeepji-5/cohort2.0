import {getFeed} from "../services/post.api";

import {useContext} from "react";
import {PostContext} from "../post.context.jsx";
import {createPost, likePost,unlikePost} from "../services/post.api";


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
          const data = await createPost(imageFile, caption);
            setFeed([data.post, ...feed]);
            // await handleGetFeed(); // Refresh feed after creating post
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setLoading(false);
        }
    };

const handleLikePost = async (postId) => {
    try {
        setLoading(true);
        const data = await likePost(postId);
        // Update the feed to reflect the new like status
        await handleGetFeed(); // Refresh feed after liking post
        console.log("Post liked successfully:", data);
      setLoading(false);
    } catch (error) {
        console.error("Error liking post:", error);
    }
};

const handleUnlikePost = async (postId) => {
    try {
        const data = await unlikePost(postId);
        // Update the feed to reflect the new like status
        await handleGetFeed(); // Refresh feed after unliking post
        console.log("Post unliked successfully:", data);
        setLoading(false);
    } catch (error) {
        console.error("Error unliking post:", error);
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
        handleCreatePost,
        handleLikePost,
        handleUnlikePost
    };
};
