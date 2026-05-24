import { register } from '../services/auth.api.js'
import {useState} from 'react';
import { useAuth } from '../hook/useAuth.js';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

const {handleRegister} = useAuth();
    //handle
    function handleFormSubmit(e){   
        e.preventDefault();
        handleRegister(username, email, password).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err.response?.data?.message || err.message);
        })
        console.log
            ({username, email, password});                   
       

      
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
