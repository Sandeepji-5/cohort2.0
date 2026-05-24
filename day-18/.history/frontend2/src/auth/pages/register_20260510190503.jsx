
import {useState} from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    

    };

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


