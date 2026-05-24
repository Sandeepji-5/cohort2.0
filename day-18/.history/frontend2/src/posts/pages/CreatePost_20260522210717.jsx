import React, { useState, useRef } from 'react';
import { usePost } from '../hook/usePost';

const CreatePost = () => {
    const [caption, setCaption] = useState("");
    const postImageInputfieldRef = useRef(null);
    const { handleCreatePost } = usePost();

    function handleSubmit(e) {
        e.preventDefault();

        const imageFile = postImageInputfieldRef.current.files[0];

        if (!imageFile) {
            alert("Please select an image");
            return;
        }

        handleCreatePost(imageFile, caption);
    }

    return (
        <div className="create-post-page">
            <div className="form-container">
                <h1>Create Post Page</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="imagePlaceholder">Select Image:</label>

                    <input
                        type="file"
                        ref={postImageInputfieldRef}
                        id="imagePlaceholder"
                        name="image"
                        accept="image/*"
                    />

                    <input
                        type="text"
                        id="caption"
                        name="caption"
                        placeholder="Caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />

                    <button type="submit">Create Post</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;