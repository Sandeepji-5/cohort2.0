import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoute from './appRoute.jsx';
import { AuthProvider } from './auth/auth.Context.jsx';
import {PostContextProvider} from './posts/post.context.jsx'
function App() {

  return (
    <AuthProvider>
      <PostContextProvider >
      <RouterProvider router={appRoute}/> 
      </PostContextProvider>
    </AuthProvider>
  )
}
  export default App