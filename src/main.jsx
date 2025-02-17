import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TokenProvider from './providers/TokenProvider.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <TokenProvider>
        <App />
      </TokenProvider>
    </ChakraProvider>
  </BrowserRouter>
)
