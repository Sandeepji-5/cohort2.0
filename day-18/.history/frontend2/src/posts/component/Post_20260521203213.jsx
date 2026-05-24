import React from 'react'
import "../../style/feed.scss"
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

const Post = ({ user, post }) => {
    return (
        <div className="posts">
            <div className="user">
                <div className="imgwrapper">
                    <img src={user.profileImage} alt="User Avatar" />
                </div>
                <p>{user.username}</p>
            </div>

            <img src={post.imgUrl} alt="Post" />

            <div className="icons">
                <div className="left">
                    <button>
                        <FiHeart />
                    </button>

                    <button>
                        <FiMessageCircle />
                    </button>

                    <button>
                        <FiSend />
                    </button>
                </div>

                <div className="right">
                    <button>
                        <FiBookmark />
                    </button>
                </div>
            </div>

            <div className="bottom">
                <p className="caption">{post.caption}</p>
            </div>
        </div>
    );
};

export default Post;