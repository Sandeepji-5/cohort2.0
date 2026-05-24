import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoute from './appRoute.jsx';


function App() {

  return (
   
   <RouterProvider>
      <appRoute/>
   </RouterProvider>
    )
  }

  export default App