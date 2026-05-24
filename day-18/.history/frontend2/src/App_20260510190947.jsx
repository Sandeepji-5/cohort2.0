import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoute from './routes/appRoute.jsx';


function App() {
  const [count, setCount] = useState(0)



  return (
   
   <RouterProvider>
      <appRoute/>
   </RouterProvider>
    )
  }
