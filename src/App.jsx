import React, { useState } from 'react'
import Navbar from './partition/Navbar'
import Hero from './partition/Hero'
import About from './partition/About'
import Services from './partition/Services'
import Contact from './partition/Contact'

const App = () => {
  const [currentLang, setCurrentLang] = useState('EN')

  return (
   <>
     <div className='h-screen'>
        <header
          className='w-full h-1/12'
          style={{
            background: 'linear-gradient(180deg, #fbf6ec 0%, #f5ead0 100%)',
            borderBottom: '3px double #b8860b',
            boxShadow: '0 2px 12px rgba(184,134,11,0.08)',
          }}
        >
            <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
     </header>
        <main className='h-11/12 overflow-y-auto'>
            <Hero currentLang={currentLang} />
            <About currentLang={currentLang} />
            <Services currentLang={currentLang} />
            <Contact />
        </main>

     </div>
   </>
  )
}


export default App
