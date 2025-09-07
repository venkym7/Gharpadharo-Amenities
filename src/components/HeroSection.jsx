import React from "react";
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight animate-fadeInUp">
          Experience Living{" "}
          <span className="text-yellow-500">Beyond Four Walls</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 animate-fadeInUp delay-200">
          Discover premium amenities designed for modern urban living.
        </p>

        <button className="mt-8 inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-lg animate-fadeInUp delay-400">
          Explore Amenities
          <IoMdArrowForward className="text-lg sm:text-xl" />
        </button>
      </div>
    </section>
  );
}


