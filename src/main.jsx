import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './routes/Home'
import Projects from './routes/Projects'
import ErrorPage from './routes/ErrorPage'
import App from './App'


import './styles/globals.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/meu-portifolio/projects',
    element: <Projects/>
  },
  {
    path: "/meu-portifolio",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
