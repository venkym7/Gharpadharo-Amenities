import React from "react";

function AmenityCard({ amenity }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img
          src={amenity.imageUrl}
          alt={amenity.name}
          className="w-full h-48 object-cover sm:h-40 md:h-44 lg:h-48"
        />
        {/* Icon overlay in top-left corner */}
        <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md">
          <span className="text-xl text-green-600">{amenity.icon}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {amenity.name}
        </h3>
        <p className="text-gray-600 text-sm md:text-base flex-grow">
          {amenity.description}
        </p>

        {/* Status */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Status:
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              amenity.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {amenity.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AmenityCard;
