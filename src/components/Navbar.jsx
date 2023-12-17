import React from 'react'
import logo from '../images/logo.png'
import  {Link}  from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className='flex justify-between align-middle mt-5'>
        <div className='logo'>
        <img className='w-12 h-10 ml-10' src={logo} alt="Logo Image" />
        </div>
        <ul className='flex list-none gap-6 font-semibold text-lg '>
            <li className= ' hover:bg-red-500 p-2' ><Link to="home">HOME</Link></li>
            <li className='hover:bg-red-500' >LOCATION</li>
            <li className='hover:bg-red-500' >ABOUT</li>
            <li className='hover:bg-red-500'>CONTACT US</li>
        </ul>
        <button className='bg-red-700 text-white text-lg font-thin mr-10 w-20 h-10  '>
            Login
        </button>
    </nav>
    </div>
  )
}

export default Navbar
