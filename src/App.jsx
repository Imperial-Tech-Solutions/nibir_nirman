import React from 'react'
import Header from './components/layout/Header/Header'
import Nav from './components/layout/Nav/Nav'
import Services from './components/sections/Services/Services'
import Projects from './components/sections/Project/Project'
import About from './components/sections/About/About'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer/Footer'



const App = () => {
  return (
    <div className='min-h-screen'>
        <Header/>
        <Nav/>
        
        <main>
            <Services/>
            <Projects/>
            <About/>
            <Contact/>
        </main>

        <Footer/>
    </div>
  )
}

export default App