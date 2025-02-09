import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HarryPotterProvider } from './contexts/HarryPotterContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HarryPotterProvider>
      <App />
    </HarryPotterProvider>
  </StrictMode>
)
