import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <section>
        <div className='flex items-center justify-evenly bg-white text-green-950 py-4'>
            <div>
                <h1 className='font-bold'>Bridge skills <br /> TVT School</h1>
            </div>
            <ul className='nav-links md:flex gap-3 font-medium cursor-pointer hidden'>
                <li className='home-link'>Home</li>
                <li>About us</li>
                <li>Program</li>
                <li>Services</li>
                <li>Partenrs</li>
            </ul>
            <button className='bg-green-500 py-1 px-4 rounded-2xl'>Log in</button>
            <div className='md:hidden'>
            <i className="fa-solid fa-bars "></i>
            </div>

        </div>
    </section>
  )
}

export default Navbar