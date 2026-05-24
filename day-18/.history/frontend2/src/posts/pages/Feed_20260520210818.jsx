import React from 'react'
import "../../style/feed.scss"
import Post from '../component/Post'

import { usePost } from '../hook/usePost';
import { useEffect } from 'react';
const Feed = () => {
    const { feed, handleGetFeed } = usePost();
    useEffect(() => {
        handleGetFeed();
    }, []);

    if(loading || !feed) {
        return <div> Feed is Loading...</div>
    }   


    console.log("feed", feed);

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
