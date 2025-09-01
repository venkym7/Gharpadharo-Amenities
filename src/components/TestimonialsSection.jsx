import React from 'react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">Life at Gharpadharo</h2>
        <p className="text-gray-700 mb-8">Real stories from our community</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">"Moving to a new city was daunting, but Gharpadharo made it seamless. The community is welcoming, and having all the amenities like housekeeping and meals sorted is a lifesaver for a busy professional like me."</p>
            <p className="mt-4 font-semibold">Venkatesh, University Student</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">"The high-speed Wi-Fi and power backup are non-negotiable for my studies. Gharpadharo delivered on this perfectly. The common room is also a great place to unwind with friends after a long day of classes."</p>
            <p className="mt-4 font-semibold">Pritam Mandal, University Student</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">"As someone who values fitness, having a gym right in the building is incredible. The security is top-notch, which gives me great peace of mind. It truly feels like a second home."</p>
            <p className="mt-4 font-semibold">Arjun D, University Student </p>
          </div>
        </div>
      </div>
    </section>
  );
}
