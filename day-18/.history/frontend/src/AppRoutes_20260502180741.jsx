import {BrowserRouter} from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import {Routes, Route} from 'react-router-dom'


  
function AppRoutes(){
    return (
        <BrowserRouter>
           <Routes>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
           </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes









