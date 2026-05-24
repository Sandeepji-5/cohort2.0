import React, { createContext, useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};  


