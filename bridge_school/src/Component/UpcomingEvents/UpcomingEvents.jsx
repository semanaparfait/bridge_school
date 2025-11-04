import React from 'react';

function UpcomingEvents() {
  const events = [
    {
      title: "Science & Innovation Fair 2025",
      date: "March 15, 2025",
      description:
        "A day where our students showcase their innovative science projects and creative inventions. Parents and guests are invited!",
      image: "https://images.pexels.com/photos/1181342/pexels-photo-1181342.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Bridge School Cultural Day",
      date: "April 22, 2025",
      description:
        "Join us as we celebrate Rwanda’s rich culture through music, dance, and art — a day filled with fun and learning!",
      image: "https://images.pexels.com/photos/4778351/pexels-photo-4778351.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Graduation Ceremony",
      date: "June 10, 2025",
      description:
        "A proud moment to celebrate our graduating class of 2025 and their remarkable academic journey at Bridge School.",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-20  text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-black">Upcoming Events</h2>
        <p className="text-lg  max-w-2xl mx-auto text-black">
          Stay updated with our latest school programs and special occasions. Mark your calendars and be part of the excitement!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-green-700">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
