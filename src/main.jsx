import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import NovusMigrationStatus from './pages/NovusMigrationStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/novus-migration-status" element={<NovusMigrationStatus />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
