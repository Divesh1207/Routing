import { useState } from 'react'

import './App.css'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import About from './component/About/About'

function App() {


  return (
    <>
      <Header />

      <Outlet />
      <About />
      <Footer />

    </>
  )
}

export default App
