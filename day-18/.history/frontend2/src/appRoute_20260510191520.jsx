import { createBrowserRoute } from "react-router-dom";
import Login from './auth/pages/Login'
import Register from './features/auth/pages/Register'   


export const router =  createBrowserRoute([
    {
        path:'/login',
        navigate:<Login/>
    },
    {
        path:'/register',
        navigate:<Register/>
    },
    {
        path:'/',
        navigate: <>"Welcome to My Instagram Clone..."</>
    }


])