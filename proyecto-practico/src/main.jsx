import React from 'react'
import ReactDOM from 'react-dom/client'
import { CvApp } from './CvApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CvApp />
    </BrowserRouter>
  </React.StrictMode>,
)
