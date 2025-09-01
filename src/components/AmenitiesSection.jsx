import React from 'react';
import { amenities } from '../data/amenities.js';

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">Premium Amenities</h2>
        <p className="text-gray-700 mb-8">Every detail crafted to enhance your lifestyle and create memorable experiences.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={amenity.image} alt={amenity.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
