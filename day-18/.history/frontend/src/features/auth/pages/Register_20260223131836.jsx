import React, { useState } from 'react'
import '../style/form.scss'
import {Link} from 'react-router-dom'
const Register = () => {
const [username, setUsername] = useState("");
const [emai, setEmail] = useState("")
const [password, setPassword] = useState("")

function  handleSubmit(){
    e.preventDefault();
    

}


  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                on
                
                type="text" name='username'  placeholder='Enter username'/>
                <input type="email" name='email'  placeholder='Enter Email'/>
                <input type="password" name='password' placeholder='Create Password' />
                <button type='submit'>Click</button>
            </form>
            <p>Already have an Account ?<Link className='toggleAuthForm' to='/login'>Login</Link></p>
        </div>


    </main>
  )
}

export default Register