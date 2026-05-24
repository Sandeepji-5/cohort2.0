import React from 'react'
import '../style/form.scss'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <input type="text" name='username'  placeholder='Enter username'/>
                <input type="email" name='email'  placeholder='Enter Email'/>
                <input type="password" name='password' placeholder='Create Password' />
                <button type='submit'>Click</button>
            </form>
            <p>Already have an Account ?<Link to=  /></p>
        </div>


    </main>
  )
}

export default Register