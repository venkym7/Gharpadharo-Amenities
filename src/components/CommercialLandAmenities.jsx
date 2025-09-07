import React from "react";
import amenitiesData from "../data/amenitiesData.js";
import AmenityCard from "./AmenityCard";

function CommercialLandAmenities() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
          Commercial Land Amenities
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Explore the modern amenities designed to make your commercial spaces
          more functional, secure, and comfortable.
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {amenitiesData.map((amenity) => (
          <AmenityCard key={amenity.id} amenity={amenity} />
        ))}
      </div>
    </section>
  );
}

export default CommercialLandAmenities;
