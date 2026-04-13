import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router } from 'react-router'
import { RouterProvider } from 'react-router/dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <h2>hello router</h2>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-red-600'>hello</h2>
     <RouterProvider router={router} />,
  </StrictMode>,
)
