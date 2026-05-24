import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoute from './appRoute.jsx';
import { AuthProvider } from './auth/auth.Context.jsx';

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={appRoute}/> 
    </AuthProvider>
  )
}
  export default App