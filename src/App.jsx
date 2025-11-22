// import { useState } from 'react'
// import './App.css'
import Home from './Home.jsx'
import Skills from './Skills.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
