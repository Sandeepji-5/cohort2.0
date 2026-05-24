import React from 'react'
import '../style/form.scss'
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
            <p></p>
        </div>


    </main>
  )
}

export default Register