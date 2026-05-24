import React, { useEffect } from 'react';
import "../../style/feed.scss";
import Post from '../component/Post';
import { usePost } from '../hook/usePost';

const Feed = () => {
    const { loading, feed, handleGetFeed } = usePost();

    useEffect(() => {
        handleGetFeed();
    }, []);

    if (loading || !Array.isArray(feed)) {
        return <div>Feed is Loading...</div>;
    }

    console.log("feed", feed);

    return (
        <main className="feed-page">
            <div className="feed">
                <div className="posts">
                    {feed.map((post) => (
                        <Post
                          
                            user={post.user}
                            post={post}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Feed;