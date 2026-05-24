import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'


const routes  = BrowserRouter([
{

path:'/login',
element: <Login/>
},
{
    path:'/register',
    element:<Register/>
} 
])


module.exports = routes

