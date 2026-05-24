import React, { useState } from 'react'
import '../style/form.scss'
import {Link} from 'react-router-dom'

import axios from 'axios'

const Register = () => {
const [username, setUsername] = useState("");

const [email, setEmail] = useState("")

const [password, setPassword] = useState("")

function  handleSubmit(e){
    e.preventDefault();

}
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>setUsername(e.target.value)}
                
                type="text" name='username'  placeholder='Enter username'/>
                <input
                 onInput={(e)=>setEmail(e.target.value)}
                type="email" name='email'  placeholder='Enter Email'/>

                <input 
                 onInput={(e)=>setPassword(e.target.value)}
                type="password" name='password' placeholder='Create Password' />

                <button type='submit'>Click</button>
            </form>
            <p>Already have an Account ?<Link className='toggleAuthForm' to='/login'>Login</Link></p>
        </div>


    </main>
  )
}

export default Register