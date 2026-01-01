import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Layout from './components/Layout/Layout'
import ScrollToHash from './components/ScrollToHash'
import App from './App.jsx'
import NovusMigrationStatus from './pages/NovusMigrationStatus.jsx'
import AIConsulting from './pages/services/AIConsulting.jsx'
import WorkflowAutomation from './pages/services/WorkflowAutomation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/employee-training" element={<div className="placeholder-page"><h1>Employee Training</h1><p>Coming Soon</p></div>} />
          <Route path="/services/confidential-ai" element={<div className="placeholder-page"><h1>Confidential AI</h1><p>Coming Soon</p></div>} />
          <Route path="/about" element={<div className="placeholder-page"><h1>About</h1><p>Coming Soon</p></div>} />
        </Route>
        {/* Standalone pages without Layout */}
        <Route path="/novus-migration-status" element={<NovusMigrationStatus />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
