import React from "react";
import "../style/post.scss";

const SocialPost = () => {
  return (
    <div className="social-post-wrapper">
      <div className="social-post">

        {/* Header */}
        <div className="post-header">
          <div className="profile-ring">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />
          </div>

          <div className="profile-info">
            <h2>Bhakti Vibes</h2>
            <p>Spiritual Inspiration</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="post-image-container">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="post"
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
            <button type="button">
              <i className="ri-heart-3-line"></i>
            </button>

            <button type="button">
              <i className="ri-chat-3-line"></i>
            </button>

            <button type="button">
              <i className="ri-send-plane-line"></i>
            </button>

            <button type="button" className="save-btn">
              <i className="ri-bookmark-line"></i>
            </button>
          </div>

          <p className="likes">12.4k likes</p>

          <p className="caption">
            <span className="username">Bhakti Vibes </span>
            Daily spiritual wisdom for peaceful living ✨
          </p>

          <p className="hashtags">
            #Krishna #BhagavadGita #Bhakti
          </p>
        </div>

      </div>
    </div>
  );
};

export default SocialPost;