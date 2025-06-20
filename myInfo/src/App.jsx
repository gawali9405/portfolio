import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
      <Navbar/> 
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App