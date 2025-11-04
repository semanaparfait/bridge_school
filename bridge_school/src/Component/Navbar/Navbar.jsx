import React from 'react'

function Navbar() {
  return (
    <section>
        <div className='flex items-center justify-evenly bg-white text-green-950 py-4'>
            <div>
                <h1 className='font-bold'>Bride School</h1>
            </div>
            <ul className='md:flex gap-3 font-medium cursor-pointer hidden'>
                <li>Home</li>
                <li>About us</li>
                <li>Program</li>
                <li>Services</li>
                <li>Partenrs</li>
            </ul>
            <button className='bg-green-500 py-1 px-4 rounded-2xl'>Log in</button>
        </div>
    </section>
  )
}

export default Navbar