import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AppRoutes} from './Routes.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </HashRouter>
  </StrictMode>,
)
