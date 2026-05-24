import React from 'react'
import "../../style/feed.scss"
import Post from '../component/Post'
const Feed = () => {

    return (
        <main className="feed-page">
               <div className="feed">
                <Post/>
            </div>
            </main>
     
    );
}

export default Feed;