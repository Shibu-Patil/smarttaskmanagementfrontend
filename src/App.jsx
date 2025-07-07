import React from 'react'
import "./styles/App.css"
import { RouterProvider } from 'react-router-dom'
import routes from './component/router/routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Toaster></Toaster>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App