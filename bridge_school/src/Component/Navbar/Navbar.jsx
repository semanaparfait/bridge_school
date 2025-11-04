import React from 'react'

function Navbar() {
  return (
    <section>
        <div className='flex items-center justify-evenly'>
            <div>
                <h1>Bride School</h1>
            </div>
            <ul className='flex gap-3'>
                <li>Home</li>
                <li>About us</li>
                <li>Program</li>
                <li>Services</li>
                <li>Partenrs</li>
            </ul>
            <button className='bg-green-500 py-1 px-4 rounder-[20px]'>Log in</button>
        </div>
    </section>
  )
}

export default Navbar