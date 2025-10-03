import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './@pacalo.core/theme/theme'
import { ConfirmDialogProvider } from './@pacalo.core/components/dialog/confirm/cornfirmDialogContext'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './app/Home'
import Gallery from './features/gallery'
import ServicesPage from './app/Services'
import FAQPage from './app/FAQ'
import RequestRidePage from './app/RequestRide'
import ContactPage from './app/Contact'
import CertificationsPage from './app/Certifications'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfirmDialogProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/request-ride" element={<RequestRidePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
            </Routes>
          </Router>
        </ConfirmDialogProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App


