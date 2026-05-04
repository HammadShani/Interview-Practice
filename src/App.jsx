import React from 'react'
import Navbar from './Components/Navbar'
import  { Routes, Route , Link } from 'react-router'
import HtmlPage from './pages/HtmlPage'
import CssPage from './pages/CssPage'
import JavaScriptPage from './pages/JavaScriptPage'
import ReactPage from './pages/ReactPage'
import Home from './pages/Home'
import Juniour from './pages/Juniour'
import Logical from './pages/Logical'
const App = () => {
  return (
    <div>
      <Navbar />
      


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/html' element={<HtmlPage />} />
          <Route path='/css' element={<CssPage />} />
          <Route path='/javascript' element={<JavaScriptPage />} />
          <Route path='/react' element={<ReactPage />} />
          <Route path='/juniour' element={<Juniour />} />
          <Route path='/logical' element={<Logical />} />
        </Routes>
      
      
    </div>
  )
}

export default App