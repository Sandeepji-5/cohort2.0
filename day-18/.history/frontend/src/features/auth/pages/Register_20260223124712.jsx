import React from 'react'

const Register = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <input type="text" name='username'  placeholder='name'/>
                <input type="email" name='email' placeholder='enter Email' />
                <input type="password"  placeholder='create Password' />
                <button type='submit'>Click</button>
            </form>
        </div>


    </main>
  )
}

export default Register