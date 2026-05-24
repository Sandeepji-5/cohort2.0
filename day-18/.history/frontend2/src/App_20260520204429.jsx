import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoute from './appRoute.jsx';
import { AuthProvider } from './auth/auth.Context.jsx';
import {PostContext} from './posts/post.contex.jsx'
function App() {

  return (
    <AuthProvider>
      <PostContextProvider>

      <RouterProvider router={appRoute}/> 
    </AuthProvider>
  )
}
  export default App