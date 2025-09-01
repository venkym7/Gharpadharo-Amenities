import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://media.architecturaldigest.com/photos/6553d8773947b7f6f77b02c5/16:9/w_2580,c_limit/Living%20room_%20Devon%20Grace%20Interiors_credit_%20Dustin%20Halleck_1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Experience Living <span className="text-yellow-500">Beyond Four Walls</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover premium amenities designed for modern urban living.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-lg">
          Explore Amenities
          <IoMdArrowForward className="text-xl" />
        </button>
      </div>
    </section>
  );
}
