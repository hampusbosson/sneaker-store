import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from '../src/components/Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>,
  document.getElementById('root')
)
