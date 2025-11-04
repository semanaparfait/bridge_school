import React from 'react';

function SchoolAdvert() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Join Bridge School Today!</h2>
          <p className="text-lg mb-6">
            Empowering young learners with quality education, innovative programs, and opportunities to thrive academically and personally. Start your journey towards success with Bridge School.
          </p>
          <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-2xl hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png" 
            alt="Bridge School" 
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default SchoolAdvert;
