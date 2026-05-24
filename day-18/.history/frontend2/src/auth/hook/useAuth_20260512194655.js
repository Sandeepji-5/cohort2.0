
import {useContext} from 'react';
import { AuthContext } from '../auth.Context.jsx';

export function useAuth()
{
    const context = useContext(AuthContext);
    
    const [user, setUser, loading, setLoading] = context;

    const handleLogin = async (username, password)=>{
        setLoading(true)
        try{
            // api call
            const response = await login(username, password);
            setUser(response.user);
        }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }


    
    const handleRegister = async (username, email, password)=>{
        setLoading(true)
        try{
            // api call
            const response = await register(username, email, password);
            setUser(response.user);
        }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    return { user, loading, handleLogin, handleRegister };
}   


