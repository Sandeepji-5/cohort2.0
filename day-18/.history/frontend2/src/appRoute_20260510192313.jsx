import { createBrowserRoute, createBrowserRouter } from "react-router-dom"
import Login from './auth/pages/Login'
import Register from './auth/pages/Register'   


const appRoute = createBrowserRouter([
    {  
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
        
    },
    {
        path:'/',
        element:<h1>Welcome To Insta</h1>
    }

])

export default appRoute