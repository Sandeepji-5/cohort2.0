import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

 const Login = () => {


    const [username, setUsername] = useState("");
 
    const [password, setPassword] = useState("")

    const  {handleLogin, loading} = useAuth()
if(loading){
    return <h1>Loading...</h1>
}
else{
  return <h1>welcome To my Insta clone </h1>
}

 function handleFormSubmit(e){
        e.preventDefault();
         handleLogin(username, password).then(res=>{
        console.log(res)
      })


    }




  return (
<main>
    <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
            <input
            onInput={(e)=>setUsername(e.target.value)}
            type="text" 
            name='username'
            placeholder="Enter the Username "/>

          

            <input
            onInput={(e)=>setPassword(e.target.value)}
            type="password"
             name='password' 
             placeholder='Enter password' />

            <button type='submit'>Click</button>
        </form>
        <p>Don't have an Account ?<Link className='toggleAuthForm' to='/register'>Register</Link></p>
    </div>


</main>
  )
}


export default Login