import React from 'react'
import "../../style/feed.scss"
import Post from '../component/Post'

import { usePost } from '../hook/usePost';




const Feed = () => {
    const { handleGetFeed } = usePost();

    return (
        <main className="feed-page">
               <div className="feed">
                <div className="posts">
                       <Post/>
                </div>
                
            </div>
            </main>
     
    );
}

export default Feed;
