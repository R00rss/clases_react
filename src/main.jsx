import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const raiz_app_react = document.getElementById('root');

ReactDOM.createRoot(raiz_app_react)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
