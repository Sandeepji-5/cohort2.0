import { useState } from "react";
import { login } from "../services/auth.api.js";
import { useAuth } from "../hook/useAuth.js";
const   Login = () => {
    const [username, setUserName] = useState("");
   
    const [password, setPassword] = useState("");

    const {handleLogin} = useAuth();
  
        function handleFormSubmit(e){   
        e.preventDefault();
              handleLogin(username, password).then(res=>{
                console.log(res);
                }).catch(err=>{

                console.log(err.response?.data?.message || err.message);
                })
        console.log
            ({username, password}); 
      
    }


    return (
        <main>
            <div className='form-container'>
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
                   <input
                    onInput={(e)=>setUserName(e.target.value)}
                    type="text" 
                    name='username'
                    placeholder="Enter the Username "/>
                   
                    <input
                    onInput={(e)=>setPassword(e.target.value)}
                    type="password" 
                    name='password'
                    placeholder="Enter the Password "/>
                    <button type='submit'>Click</button>
                </form>
            </div>
        </main>             
    )
}   


export default Login;
