import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './@pacalo.core/theme/theme'
import { ConfirmDialogProvider } from './@pacalo.core/components/dialog/confirm/cornfirmDialogContext'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './app/Home'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConfirmDialogProvider>
          <Home />
        </ConfirmDialogProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App


