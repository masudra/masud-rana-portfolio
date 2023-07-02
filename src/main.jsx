import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './Routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div  className="bg-slate-100">

    <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
