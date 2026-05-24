import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import {Routes, Route} from 'react-router-dom'


  
function AppRoutes(){
    return (
        <BrowserRouter>
           <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/'  element={<h1>Welcome To Insta</h1>}/>
           </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes









