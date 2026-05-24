import { register } from '../services/auth.api.js'
import {useState} from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    //handle
    function handleFormSubmit(e){   
        e.preventDefault();
           register(username, email, password).then(res=>{
            console.log(res);
           }).catch(err=>{
            console.log(err);
           })
        console.log({username, email, password});
    }
    

    return(
        <main>
            <div className='form-container'>
                <h1>Register</h1>

                <form onSubmit={handleFormSubmit}>
                    <input
                    onInput={(e)=>setUsername(e.target.value)}
                    type="text" 
                    name='username'
                    placeholder="Enter the Username "/> 


                    <input
                    onInput={(e)=>setEmail(e.target.value)}
                    type="email" 
                    name='email'
                    placeholder="Enter the Email "/>


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

export default Register;
