import react from 'react';
import { usePost } from '../hook/usePost';
import {useState} from 'react';
const createPost = () => {
    const [caption, setCaption] = useState("");
    const postImageInputfieldRef = useRef(null);
    const {handleCreatePost} = usePost();   

    function  handleSubmit(e) {


    return (
        <div className="create-post-page">
            <div className="form-container">
                <h1>Create Post Page</h1>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="imagePlaceholder">Image:</label>
                        <input type="file"  ref={postImageInputfieldRef} id="imagePlaceholder" name="image" hidden />
                        <input type="text" id="caption" name="caption" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
                        <button type="submit">Create Post</button>
                </form>
            </div>
        </div>
    );
}   
}
export default createPost;