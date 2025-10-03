import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './@pacalo.core/theme/theme'
import { ConfirmDialogProvider } from './@pacalo.core/components/dialog/confirm/cornfirmDialogContext'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './app/Home'
import Gallery from './features/gallery'

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
            </Routes>
          </Router>
        </ConfirmDialogProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App


