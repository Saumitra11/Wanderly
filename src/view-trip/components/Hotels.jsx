import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">🏨 Hotel Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <Link
              to={
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(hotel?.hotelName + ", " + hotel?.hotelAddress)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/placeholder1.jpg"
                alt={hotel?.hotelName}
                className="rounded-xl w-full h-40 object-cover mb-3 shadow-md"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">{hotel?.hotelName}</h3>
                <p className="text-sm text-gray-600 truncate">📍 {hotel?.hotelAddress}</p>
                <p className="text-sm font-medium text-gray-700">💲 {hotel?.price}</p>
                <p className="text-sm font-medium text-yellow-500">⭐ {hotel?.rating}/10</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
