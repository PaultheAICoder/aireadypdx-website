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
import EmployeeTraining from './pages/services/EmployeeTraining.jsx'
import ConfidentialAI from './pages/services/ConfidentialAI.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/employee-training" element={<EmployeeTraining />} />
          <Route path="/services/confidential-ai" element={<ConfidentialAI />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* Standalone pages without Layout */}
        <Route path="/novus-migration-status" element={<NovusMigrationStatus />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
