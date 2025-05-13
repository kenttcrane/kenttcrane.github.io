import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AppRoutes} from './Routes.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
