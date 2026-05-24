
import {useContext} from 'react';
import { AuthContext } from '../auth.Context.jsx';

export function useAuth()
{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}       
    