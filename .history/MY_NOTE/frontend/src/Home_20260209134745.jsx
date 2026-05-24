import React from 'react'
import Navbar from './Navbar'
import './home.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
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

