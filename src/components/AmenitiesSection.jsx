import React from "react";
import { amenities } from "../data/amenities.js";

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Premium Amenities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Every detail is crafted to enhance your lifestyle and create memorable experiences.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-40 sm:h-44 object-cover"
                />
                {/* Floating Icon */}
                <div className="absolute -bottom-6 left-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-2xl">
                  {amenity.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
