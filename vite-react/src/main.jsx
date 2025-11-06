import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './1-組件化的基本使用.jsx'
import ButtonAppBar from './LoginBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <ButtonAppBar />
  </StrictMode>,
)
