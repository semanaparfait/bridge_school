import React from 'react';

function SuccessStories() {
  const stories = [
    {
      name: "Alice Uwase",
      role: "Alumni, Class of 2020",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      story: "Alice was awarded a scholarship to study Computer Science abroad. Her success inspires our current students to pursue excellence."
    },
    {
      name: "Jean Bosco",
      role: "Student, Class of 2023",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      story: "Jean developed an innovative app during our STEM program that helps local businesses manage inventory efficiently."
    },
    {
      name: "Sarah Mukamana",
      role: "Alumni, Class of 2018",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      story: "Sarah is now a teacher mentoring young learners. Bridge School helped her discover her passion for education."
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Our students and alumni are achieving great things. Here are a few inspiring stories from our Bridge School community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <img 
              src={story.image} 
              alt={story.name} 
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{story.name}</h3>
            <p className="text-sm text-green-700 mb-3">{story.role}</p>
            <p className="text-gray-600">{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;
