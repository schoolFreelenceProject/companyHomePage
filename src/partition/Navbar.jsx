import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar flex items-center justify-between p-5 h-full  text-gray-800 mx-auto">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Sora Empire Logo" className="logo-image" />
            </div>
            <ul className="navbar-links flex space-x-4">
                <li><a href="#about" className="hover:underline hover:text-blue-500">About us</a></li>
                <li><a href="#services" className="hover:underline hover:text-blue-500">Services</a></li>
                {/* <li><a href="#content" className="hover:underline hover:text-blue-500">Content</a></li>z */}
                <li><a href="#contact" className="hover:underline hover:text-blue-500">Contact us</a></li>
                <li><a href="#lang" className="hover:underline hover:text-blue-500 me-7">Eng</a></li>
            </ul>
            {/* <div className="navbar-actions">
                <button className="btn btn-primary hover:border-2 hover:border-blue-500">Contact Us</button>
            </div> */}
        </nav>
    </>
  )
}

export default Navbar