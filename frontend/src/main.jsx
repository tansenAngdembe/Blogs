import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { App_provider } from './context/Appprovider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App_provider>
      <App />
    </App_provider>
  </React.StrictMode>,
)
