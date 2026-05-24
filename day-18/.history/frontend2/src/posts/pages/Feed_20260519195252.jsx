import React from "react";
import post from "../services/post.api";


const Post = () => {

    const getPost = () => { // make if self called function to get the post data when the component is rendered

    // make api call to get post data
    // set the post data in state
    // render the post data in the 
    const data = await post().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err.response?.data?.message || err.message);
    })
    
  }





  return (
   
  );
};

export default Post;