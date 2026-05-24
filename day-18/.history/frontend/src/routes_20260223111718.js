import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'


function AppRoutes(){
    return (
        <BrowserRouter>
            <Router path='/login' element={<Login/>}>
            <Router path='/register' element={<Register/>}/>

            </Router>
        </BrowserRouter>
    )
}

module.exports = routes

