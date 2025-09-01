import React from 'react';

export default function FeatureSection() {
  return (
    <section id="lifestyle" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:flex md:items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">More Than Just a Place to Stay</h2>
          <p className="text-gray-700 mb-6">
            Join a community that values connection, wellness, and modern living. Experience the difference of thoughtfully designed spaces and services.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="text-yellow-500 text-3xl mr-4">🏢</div>
              <div>
                <h4 className="font-semibold">Vibrant Community</h4>
                <p className="text-gray-600">Engage with like-minded individuals in communal areas and events.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-yellow-500 text-3xl mr-4">💪</div>
              <div>
                <h4 className="font-semibold">Wellness Focus</h4>
                <p className="text-gray-600">Stay fit with on-site gyms and wellness programs, tailored for a balanced lifestyle.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-yellow-500 text-3xl mr-4">📍</div>
              <div>
                <h4 className="font-semibold">Prime Locations</h4>
                <p className="text-gray-600">Live in the heart of Uttarakhand, close to amenities and transport.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-yellow-500 text-3xl mr-4">🔑</div>
              <div>
                <h4 className="font-semibold">Hassle-Free Living</h4>
                <p className="text-gray-600">Enjoy services like housekeeping and maintenance without the fuss.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-4">
          <img src="https://img.freepik.com/free-photo/tech-brand-working-sustainability-goals_52683-145426.jpg?semt=ais_hybrid&w=740" alt="Feature 1" className="rounded-lg" />
          <img src="https://c.stocksy.com/a/OZd400/z9/1105422.jpg" alt="Feature 2" className="rounded-lg" />
          <img src="https://media.istockphoto.com/id/546427108/photo/sunset-on-canberra-city-autumn-brindabella-hills.jpg?s=612x612&w=0&k=20&c=8Rq7S_2sstnw5cRp2LaULwIDE5sYrBN7-_ZVvzx1OJI=" alt="Feature 3" className="rounded-lg" />
          <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/07/Q-Series-7.jpg" alt="Feature 4" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
