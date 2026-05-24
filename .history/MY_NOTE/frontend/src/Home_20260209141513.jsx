import React from 'react'
import Navbar from './Navbar'
import './home.css'
import SignIn from './SignIn'; // आपका SignIn कॉम्पोनेंट
import SignUp from './SignUp';
const Home = () => {
  return (
    <div>
     

        <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>


       <div className="home-container">
            <h1>📝 To Do App</h1>
            <p>
              Organize your tasks, manage your notes, and boost your productivity.<br />
              Easily add, edit, and keep track of your daily TODOS!
            </p>
       </div>
       
    </div>
  )
}

export default Home

