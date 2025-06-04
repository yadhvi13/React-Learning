import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// console pe jo hoga wo 2 baar print hoga, strict mode se

//JSX- javascript XML (HTML+JS)