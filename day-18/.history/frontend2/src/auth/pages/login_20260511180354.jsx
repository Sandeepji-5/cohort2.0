import { useState } from "react";
import { login } from './/auth.api.js';
const   Login = () => {
    const [userName, setUserName] = useState("");
   
    const [password, setPassword] = useState("");
    
  
        function handleFormSubmit(e){   
        e.preventDefault();
        //     axios.post("http://localhost:3000/api/auth/login", {username: userName, password}).then(res=>{    
        //         console.log(res.data);
        //     }).catch(err=>{
        //         console.log(err);
        //     })
        // console.log({userName, password});




        login(username, password).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })      


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