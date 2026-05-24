
import {useState} from 'react';
import  axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    //handle


    





    return(
        <main>
            <div className='form-container' onSubmit={handleFormSubmit}>
                <h1>Register</h1>

                <form>
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
