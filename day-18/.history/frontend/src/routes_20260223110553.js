import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
const routes  = BrowserRouter([
{

path:'/login',
element: <LoginForm/>

},
{
    path:'/register',
    element:<RegisterForm/>
}
    
])


module.exports = routes