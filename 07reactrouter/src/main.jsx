import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path= 'about' element = {<About />} />
      <Route path= 'contact' element = {<Contact />} />
      <Route path= 'user/' element = {<User />}>
        <Route path= ':userId' element = {<User />} />
        </Route>
      <Route loader={githubLoader} path = 'github' element = {<Github />} />
      <Route path= '*' element = {<div>Not Found</div>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
