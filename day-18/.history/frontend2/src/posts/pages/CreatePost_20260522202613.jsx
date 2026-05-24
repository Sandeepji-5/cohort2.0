import React, { useState } from 'react';
import "../../style/createPost.scss";
import { FiImage, FiX } from "react-icons/fi";
import { useRef } from 'react';
const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const postImageInputFieldRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const file = postImageInputFieldRef.current.files[0];
        
       
    };

    return (
        <div className="create-post-overlay">
            <div className="create-post-modal">
                <div className="create-post-header">
                    <h2>Create New Post</h2>
                    <button className="close-btn">
                        <FiX size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="user-section">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="profile"
                            className="user-avatar"
                        />
                        <span>your_username</span>
                    </div>

                    <textarea
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />

                    {!preview ? (
                        <label className="upload-box">
                            <FiImage size={40} />
                            <span>Click to upload image</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                hidden
                            />
                        </label>
                    ) : (
                        <div className="preview-container">
                            <img src={preview} alt="preview" />
                            <button
                                type="button"
                                className="remove-btn"
                                onClick={removeImage}
                            >
                                <FiX size={20} />
                            </button>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="post-btn"
                        disabled={!caption || !image}
                    >
                        Share Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;