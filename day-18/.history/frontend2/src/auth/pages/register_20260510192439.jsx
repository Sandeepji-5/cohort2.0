
import {useState} from 'react';
import  axios from 'axios';

const Register = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post("http://localhost:3000/api/auth/register", {
    //         username,
    //         email,
    //         password
    //     })
    //     .then(response => {
    //         console.log("Registration successful:", response.data);
    //     })
    //     .catch(error => {
    //         console.error("Registration error:", error);
    //     });

    // };

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
