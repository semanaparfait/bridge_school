import React from 'react';
import './Footer.css';
// import logo from '../../assets/logo2.png'

function Footer() {
  return (
    <section className='footer-section bg-green-950'>
      <section className="min-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-10 pt-16 text-gray-400 place-items-center">

        {/* School Info */}
        <div>
          <div className='flex items-center mb-10'>
            {/* <img src={logo} alt="logo" className='w-[3rem]'/> */}
            <h1 className='font-bold text-2xl text-white'>Bridge School</h1>
          </div>
          <p>
            At Bridge School, we empower students through quality education, innovation, and personal growth. 
            Our mission is to nurture confident learners ready to succeed in an ever-changing world.
          </p>
          <div className='cursor-pointer mt-4 space-x-4'>
            <i className="fa-brands fa-facebook text-2xl"></i>
            <i className="fa-brands fa-square-instagram text-2xl"></i>
            <i className="fa-brands fa-square-github text-2xl"></i>
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2 cursor-pointer'>Quick Links</h1>
          <ul className='cursor-pointer space-y-2'>
            <li>Home</li>
            <li>About Us</li>
            <li>Admissions</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Our Programs */}
        <div>
          <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2'>Our Programs</h1>
          <ul className='space-y-2'>
            <li>Primary Education</li>
            <li>Secondary Education</li>
            <li>STEM & Technology</li>
            <li>Arts & Creativity</li>
            <li>Extracurricular Activities</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h1 className='font-bold text-2xl mb-7 text-white border-l-4 border-green-500 pl-2'>Get In Touch</h1>
          <p><i className="fa-solid fa-envelope text-green-500 text-2xl"></i> info@bridgeschool.rw</p><br />
          <p><i className="fa-solid fa-phone-volume text-green-500 text-2xl"></i> +250 780 123 456</p><br />
          <p><i className="fa-solid fa-location-dot text-green-500 text-2xl"></i> Kigali, Rwanda</p>
        </div>

      </section>

      <h1 className='footer-name text-center text-[40px] md:text-[100px] text-white font-black'>Bridge School</h1>

      <footer className='py-[1.3rem] text-center border-t-2 border-gray-600 text-gray-400 bg-black md:text-base text-sm'>
        &copy; {new Date().getFullYear()} Bridge School. All rights reserved. Powered by Innovation.
      </footer>
    </section>
  );
}

export default Footer;
