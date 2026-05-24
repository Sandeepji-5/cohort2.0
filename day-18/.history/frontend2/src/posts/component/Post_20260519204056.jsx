import React from 'react'
import userModel from '../../../../backend/src/models/userModel';

const Post = ({user, post}) => {
    return (
         <div className="posts">
                <div className="user">
                    <div className="imgwrapper">
                        <img src={user.profileImage} alt="User Avatar" />
                    </div>
                    <p>{user.username}</p>
                </div>
                <img src={post.image} alt="Post Image " />

                <div className="icons">
                    <div className="left">
                        <button></button>
                        <button></button>
                        <button></button>

                    </div>
                    <div className="right">
                        <button></button>
                    </div>
                </div>


                <div className="bottom">
                    <p className="caption">{post.caption}</p>
                </div>
            </div>
    )
}       

export default Post;
