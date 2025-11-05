import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Partners from '../Partners/Partners'
import SuccessStories from '../SuccessStories/SuccessStories'
import SchoolAdvert from '../SchoolAdvert/SchoolAdvert'
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents'

function Hero() {
const herotabs = [
  {
    image: "https://i.pinimg.com/736x/5a/0e/96/5a0e96717af4d9310be43e303c66f1d2.jpg",
    heading1: "Guide Your Path to Bridge School",
    paragraph:
      "Empowering learners through quality education and innovation. Building future leaders who will shape communities and change the world."
  },
  {
    image: "https://i.pinimg.com/1200x/50/25/ed/5025ede6cb9349a47bf9c52f7c4d6177.jpg",
    heading1: "Learn, Grow, and Excel",
    paragraph:
      "At Bridge School, we nurture creativity, critical thinking, and confidence. Every learner is guided to reach their fullest potential academically and personally."
  },
  {
    image: "https://i.pinimg.com/1200x/ca/86/c0/ca86c0d8fd8d81aba9c38f4f42e31053.jpg",
    heading1: "Innovation for a Brighter Future",
    paragraph:
      "We prepare students for the digital era through modern learning, STEM programs, and hands-on experiences that inspire lifelong curiosity."
  }
];
const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % herotabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

    <section>
        <Navbar/>
<section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={herotabs[current].image}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col h-full justify-center items-center text-center text-white px-6 md:items-start md:text-left md:pl-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {herotabs[current].heading1}
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-6">
              {herotabs[current].paragraph}
            </p>
            <button className="font-medium bg-green-950 py-2 px-6 rounded-2xl hover:bg-green-900 transition">
              Join Now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {herotabs.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>
    </section>
        <div className="grid justify-items-center md:grid-cols-3 gap-8 mt-10 text-center md:text-left md:absolute top-[96%]">
        <div className="flex  items-center shadow-2xl rounded-2xl px-1.5 bg-white">
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Academic Excellence" className="w-16 mb-4" />
          <div>
            <h1 className="text-xl font-semibold mb-2">Academic Excellence</h1>
            <p className="text-gray-600">
              We provide a balanced and high-quality education that builds strong academic 
            </p>
          </div>
        </div>

        <div className="flex  items-center shadow-2xl rounded-2xl px-1.5 bg-white ">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Personal Growth" className="w-16 mb-4" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Growth</h2>
            <p className="text-gray-600">
              Bridge School helps every learner develop confidence, discipline, and creativity 
            </p>
          </div>
        </div>

  <div className="flex gap-1  items-center shadow-2xl rounded-2xl px-1.5 py-2 bg-white">
    <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Future Readiness" className="w-16 mb-4" />
    <div>
      <h2 className="text-xl font-semibold mb-2">Future Readiness</h2>
      <p className="text-gray-600">
        We equip students with the skills and mindset needed to succeed in an ever-changing world. 
      </p>
    </div>
  </div>
</div><br />

      <UpcomingEvents/>
        <SuccessStories/>
        <Partners/>
        <Footer/>
    </section>
  )
}

export default Hero