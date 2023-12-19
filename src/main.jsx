import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes/Router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
