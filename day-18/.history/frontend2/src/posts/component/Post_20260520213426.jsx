import React from 'react'
const Post = () => {


    return (
         <div className="posts">
                <div className="user">
                    <div className="imgwrapper">
                        <img src={} alt="User Avatar" />
                    </div>
                    <p>{}</p>
                </div>
                <img src={} alt="Post Image" />

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
                    <p className="caption">{}</p>
                </div>
            </div>
    )
}       

export default Post;
