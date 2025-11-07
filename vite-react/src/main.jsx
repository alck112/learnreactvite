import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './3-事件處理.jsx'
// import ButtonAppBar from './LoginBar.jsx'
// import App from './ant-layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
