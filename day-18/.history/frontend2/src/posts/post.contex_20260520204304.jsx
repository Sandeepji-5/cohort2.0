import React, { createContext, useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const 
    return (
        <PostContext.Provider value={{ loading , setLoading, post, setPost }}>
            {children}
        </PostContext.Provider>
    );
};  


