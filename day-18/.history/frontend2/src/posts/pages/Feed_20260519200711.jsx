import React from 'react'
import "../style/feed.scss"
const Feed = () => {

    return (
        <div className="feed">
            <div className="posts">


                <div className="user">
                    <img src="" alt="User Avatar" />                   
                    <p>Username</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXzslwRWyk0O7vACXGRzFP7c1GU0j4kIkWQ&s" alt="Post Image " />
                <div className="bottom">
                    <p className="caption">Caption</p>
                </div>
            </div>
        </div>
    );
}

export default Feed;