import React from 'react'
import {getPosts} from '../services/post.api.js'

const Post = ({user, post}) => {

const response = get


    return (
         <div className="posts">
                <div className="user">
                    <div className="imgwrapper">
                        <img src={user.profileImage} alt="User Avatar" />
                    </div>
                    <p>{user.username}</p>
                </div>
                <img src={post.imageUrl} alt="Post Image " />

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
