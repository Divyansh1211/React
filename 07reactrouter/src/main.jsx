import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import App from './App.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path= 'about' element = {<About />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
