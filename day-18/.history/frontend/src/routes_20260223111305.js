import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
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

