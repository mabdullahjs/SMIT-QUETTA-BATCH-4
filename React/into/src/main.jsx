import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar/>
  </StrictMode>,
)
