import React from "react";
import "../style/post.scss";
import post from "../services/post.api";


const Post = () => {

function getPost(){
    // make api call to get post data
    // set the post data in state
    // render the post data in the 
    const data = post().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err.response?.data?.message || err.message);
    })
    
  }





  return (
    <div className="social-post-wrapper">
      <div className="social-post">

        {/* Header */}
        <div className="post-header">
          <div className="profile-ring">
            <img
              src="https://i.pravatar.cc/100"
              alt="Bhakti Vibes profile"
              className="profile-img"
            />
          </div>

          <div className="profile-info">
            <div className="profile-top">
              <h2>Bhakti Vibes</h2>
              <i className="ri-verified-badge-fill verified-badge"></i>
            </div>
            <p>Spiritual Inspiration • 2h</p>
          </div>
        </div>

        {/* Image */}
        <div className="post-image-container">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Post"
              className="post-image"
            />

            <div className="quote-overlay">
              <h1>
                Always remember Krishna, and never forget Him.
              </h1>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="post-actions">
          <div className="action-buttons">
            <button type="button" aria-label="Like">
              <i className="ri-heart-3-line"></i>
            </button>

            <button type="button" aria-label="Comment">
              <i className="ri-chat-3-line"></i>
            </button>

            <button type="button" aria-label="Share">
              <i className="ri-send-plane-line"></i>
            </button>

            <button
              type="button"
              className="save-btn"
              aria-label="Save"
            >
              <i className="ri-bookmark-line"></i>
            </button>
          </div>

          <p className="likes">12,432 likes</p>

          <p className="caption">
            <span className="username">Bhakti Vibes </span>
            Daily spiritual wisdom for peaceful living ✨
          </p>

          <p className="hashtags">
            #Krishna #BhagavadGita #Bhakti #SpiritualLife
          </p>
        </div>

      </div>
    </div>
  );
};

export default Post;