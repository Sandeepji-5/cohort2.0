import react from 'react';

const createPost = () => {
    return (
        <div>
            <h1>Create Post Page</h1>

            <form>  
                    <label htmlFor="imagePlaceholder">Image:</label>
                    <input type="file" id="imagePlaceholder" name="image" hidden />
                    <input type="text" id="caption" name="caption" placeholder="Caption" />
                    <button type="submit">Create Post</button>
            </form>
           
        </div>
    );
}   
export default createPost;