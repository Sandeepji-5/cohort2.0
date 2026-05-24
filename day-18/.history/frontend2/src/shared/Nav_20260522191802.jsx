
import react from 'react';
import "../style/nav.scss"
import CreatePost from '../posts/pages/CreatePost';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate= useNavigate();
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <h1>InstaClone</h1>
                </div>
                <div className="nav-links">
                   <button className="nav-btn" onClick={navigate('/createPost')}>Create Post</button>
                </div>
            </div>
        </nav>
    );
}   
export default Nav;
