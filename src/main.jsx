import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/global.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)