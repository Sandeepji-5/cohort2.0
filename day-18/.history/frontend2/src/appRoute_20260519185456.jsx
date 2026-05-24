import {  createBrowserRouter } from "react-router-dom"
import Login from './auth/pages/Login'
import Register from './auth/pages/Register'   
import Feed from './posts/pages/Feed'

// createBrowserRouter is used to create a router object that can be passed to the RouterProvider component in the App.jsx file. It takes an array of route objects, where each object has a path and an element property. The path property specifies the URL path for the route, and the element property specifies the React component that should be rendered when the route is accessed.


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
        element:<Feed/>
    }

])

export default appRoute