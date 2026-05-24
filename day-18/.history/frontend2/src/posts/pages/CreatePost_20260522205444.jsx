import react from 'react';

const createPost = () => {

    const handleSubmit = (e) => {
            e.preventDefault();



    return (
        <div className="create-post-page">
            <div className="form-container">
                <h1>Create Post Page</h1>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="imagePlaceholder">Image:</label>
                        <input type="file" id="imagePlaceholder" name="image" hidden />
                        <input type="text" id="caption" name="caption" placeholder="Caption" />
                        <button type="submit">Create Post</button>
                </form>
            </div>
        </div>
    );
}   
}
export default createPost;