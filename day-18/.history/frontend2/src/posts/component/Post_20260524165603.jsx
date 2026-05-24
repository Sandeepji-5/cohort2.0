import React, { useState } from 'react';
import "../../style/feed.scss";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"; // For the filled liked state

import { usePost } from '../hook/usePost';


const Post = ({ user, post }) => {
    const { loading, handleLikePost, handleUnlikePost } = usePost();


    return (
        <article className="instagram-post">
            {/* Post Header */}
            <header className="post-header">
                <div className="user-info">
                    <div className="avatar-wrapper">
                        <img src={user?.profileImage || "https://via.placeholder.com/150"} alt={`${user?.username}'s avatar`} />
                    </div>
                    <span className="username">{user?.username || "username"}</span>
                </div>
                <button className="action-btn more-btn">
                    <FiMoreHorizontal size={20} />
                </button>
            </header>

            {/* Post Media Container */}
            <div className="post-media" onDoubleClick={() => setIsLiked(true)}>
                <img src={post?.imgUrl} alt="Post content" />
            </div>

            {/* Post Actions (Icons Row) */}
            <div className="post-actions">
                <div className="left-actions">
                    <button
                        className={`action-btn heart-btn ${post.isLiked ? "liked" : ""}`}
                        onClick={() => {
                            post.isLiked ? handleUnlikePost(post._id) : handleLikePost(post._id);
                        }}
                    >
                        {post.isLiked ? <FaHeart size={24} color="#ff3040" /> : <FiHeart size={24} />}
                    </button>
                    <button className="action-btn">
                        <FiMessageCircle size={24} />
                    </button>
                    <button className="action-btn">
                        <FiSend size={24} />
                    </button>
                </div>
                <div className="right-actions">
                    <button className="action-btn">
                        <FiBookmark size={24} />
                    </button>
                </div>
            </div>

            {/* Post Content Details */}
            <div className="post-details">
                <p className="likes-count">
                    {post?.likesCount ? `${post.likesCount.toLocaleString()} likes` : '1,244 likes'}
                </p>
                
                <div className="caption-container">
                    <span className="caption-username">{user?.username || "username"}</span>
                    <span className="caption-text"> {post?.caption}</span>
                </div>

                <button className="view-comments-btn">
                    View all comments
                </button>
            </div>
        </article>
    );
};

export default Post;