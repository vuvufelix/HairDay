import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ToggleTimeProvider } from "./context/timeColor.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleTimeProvider>
      <App />
    </ToggleTimeProvider>
  </StrictMode>,
)
