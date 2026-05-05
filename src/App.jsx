import React from 'react'
import Navbar from './partition/Navbar'

const App = () => {
  return (
   <>
     <div className='h-screen'>
        <header className=' w-full border-b-1 border-gray-100 shadow-sm h-1/12'>
        <div className=" ">
            <Navbar />
        </div>
     </header>
        <main className='mx-auto p-4 bg-amber-200 h-11/12' >
            <h1 className='text-3xl font-bold mb-4'>Welcome to Sora Empire</h1>
            <p className='text-gray-700 mb-6'>Your one-stop solution for all your needs. We offer a wide range of services to help you succeed.</p>
        </main>
     </div>
   </>
  )
}


export default App