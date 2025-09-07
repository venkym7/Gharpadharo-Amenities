import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Venkatesh, University Student",
      text: "Moving to a new city was daunting, but Gharpadharo made it seamless. The community is welcoming, and having all the amenities like housekeeping and meals sorted is a lifesaver for a busy professional like me.",
      
    },
    {
      name: "Pritam Mandal, University Student",
      text: "The high-speed Wi-Fi and power backup are non-negotiable for my studies. Gharpadharo delivered on this perfectly. The common room is also a great place to unwind with friends after a long day of classes.",
      
    },
    {
      name: "Arjun D, University Student",
      text: "As someone who values fitness, having a gym right in the building is incredible. The security is top-notch, which gives me great peace of mind. It truly feels like a second home.",
      
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Life at Gharpadharo</h2>
        <p className="text-gray-600 mb-12 text-lg md:text-xl">Real stories from our community</p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              
              <p className="text-gray-700 italic text-base md:text-lg">"{t.text}"</p>
              <p className="mt-6 font-semibold text-gray-800">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
