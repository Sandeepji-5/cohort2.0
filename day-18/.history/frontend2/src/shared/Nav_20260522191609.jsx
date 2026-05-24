
import react from 'react';
import "../style/nav.scss"
import CreatePost from '../posts/pages/CreatePost';
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h1>InstaClone</h1>
                </div>
                <div className="nav-links">
                   <button className="nav-btn" onCanPlay={<CreatePost/>}>Create Post</button>
                </div>
            </div>
        </nav>
    );
}   
export default Nav;
