import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Hero() {
  return (
    <section>
        <Navbar/>
        <div>
            <img src="https://i.pinimg.com/736x/d5/ad/aa/d5adaa35a2f5d0a01b6b69778f01a80e.jpg" alt="hero back grounds" className=''/>
        </div>
        <Footer/>
    </section>
  )
}

export default Hero