import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from "./Routes/Router";
import { RouterProvider } from 'react-router/dom'
import FreindsProvider from './Context/freindContextProvider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FreindsProvider>
    <RouterProvider router={router} />,
   </FreindsProvider>
    
  </StrictMode>,
)
