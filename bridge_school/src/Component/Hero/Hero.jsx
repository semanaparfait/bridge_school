import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Partners from '../Partners/Partners'
import SuccessStories from '../SuccessStories/SuccessStories'
import SchoolAdvert from '../SchoolAdvert/SchoolAdvert'
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents'

function Hero() {
  return (
    <section>
        <Navbar/>
      <div className="relative h-screen w-full">
        <img 
          src="https://i.pinimg.com/736x/5a/0e/96/5a0e96717af4d9310be43e303c66f1d2.jpg" 
          alt="Bridge School background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* dark overlay  */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="
          relative z-10 flex flex-col   text-white  p-6 rounded-2xl h-full items-center justify-center text-center
          md:items-start md:justify-center md:text-left md:pl-20
        ">
          <div className='flex flex-col gap-1'>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guide your Path to <br /> Bridge School
            </h1>
            <p className="text-base md:text-lg max-w-xl mb-4">
              Empowering learners through quality education and innovation.
              Building future leaders who will shape communities and change the world.
            </p>
            <button className="font-medium bg-green-950 py-2 px-4 rounded-2xl w-fit hover:bg-green-900 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
        <div className="grid justify-items-center md:grid-cols-3 gap-8 mt-10 text-center md:text-left md:absolute top-[96%]">
        <div className="flex  items-center shadow-2xl rounded-2xl px-1.5 bg-white">
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Academic Excellence" className="w-16 mb-4" />
          <div>
            <h1 className="text-xl font-semibold mb-2">Academic Excellence</h1>
            <p className="text-gray-600">
              We provide a balanced and high-quality education that builds strong academic foundations and lifelong learning habits.
            </p>
          </div>
        </div>

        <div className="flex  items-center shadow-2xl rounded-2xl px-1.5 bg-white ">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Personal Growth" className="w-16 mb-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Growth</h2>
            <p className="text-gray-600">
              Bridge School helps every learner develop confidence, discipline, and creativity to reach their full potential.
            </p>
          </div>
        </div>

  <div className="flex  items-center shadow-2xl rounded-2xl px-1.5 bg-white">
    <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Future Readiness" className="w-16 mb-4" />
    <div>
      <h2 className="text-xl font-semibold mb-2">Future Readiness</h2>
      <p className="text-gray-600">
        We equip students with the skills and mindset needed to succeed in an ever-changing world through innovation and teamwork.
      </p>
    </div>
  </div>
</div>

      <UpcomingEvents/>
        <SuccessStories/>
        <Partners/>
        <Footer/>
    </section>
  )
}

export default Hero