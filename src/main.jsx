import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Notfound from './components/Notfound.jsx'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
  {
    path:"*",
    element:<Notfound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
