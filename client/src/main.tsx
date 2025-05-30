import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // <-- import BrowserRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>        {/* Wrap your app here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
