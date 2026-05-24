import React from 'react'



const Post = () => {

const response = getPosts().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err.response?.data?.message || err.message);
})


    return (
         <div className="posts">
                <div className="user">
                    <div className="imgwrapper">
                        <img src="" alt="User Avatar" />
                    </div>
                    <p>{user.username}</p>
                </div>
                <img src="" alt="Post Image " />

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
