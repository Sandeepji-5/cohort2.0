import { useState } from "react";



const   Login = () => {
    const [[email, password], setFormData] = useState(['', '']);

 

    return (
        <main>
            <div className='form-container'>
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                    onInput={(e)=>setFormData([e.target.value, password])}
                    type="email" 
                    name='email'
                    placeholder="Enter the Email "/>    
                    <input
                    onInput={(e)=>setFormData([email, e.target.value])}
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