import React from 'react'
import Navbar from './partition/Navbar'
import Hero from './partition/Hero'

const App = () => {
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
            <Navbar />
     </header>
        <main className='h-11/12 overflow-y-auto'>
            <Hero />
        </main>
     </div>
   </>
  )
}


export default App