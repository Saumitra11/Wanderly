import { getPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  const [hotelPhotos, setHotelPhotos] = useState({});

  useEffect(() => {
    if (trip?.tripData?.hotelOptions?.length) {
      trip.tripData.hotelOptions.forEach((hotel, index) => fetchPhoto(hotel, index));
    }
  }, [trip]);

  const fetchPhoto = async (hotel, index) => {
    try {
      const data = { textQuery: hotel.hotelName };
      const resp = await getPlacesDetails(data);
      const photoRef = resp?.data.places?.[0]?.photos?.[1]?.name;
      if (photoRef) {
        setHotelPhotos(prev => ({
          ...prev,
          [index]: PHOTO_REF_URL.replace("{NAME}", photoRef),
        }));
        console.log("Photo URL for hotel:", hotel.hotelName, PHOTO_REF_URL.replace("{NAME}", photoRef));
      }
    } catch (error) {
      console.error("Error fetching photo for hotel:", hotel.hotelName, error);
    }
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">
        🏨 Hotel Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <Link
              to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${hotel?.hotelName}, ${hotel?.hotelAddress}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hotelPhotos[index] || "/placeholder1.jpg"}
                alt={hotel?.hotelName}
                className="rounded-xl w-full h-40 object-cover mb-3 shadow-md"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {hotel?.hotelName}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  📍 {hotel?.hotelAddress}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  💲 {hotel?.price}
                </p>
                <p className="text-sm font-medium text-yellow-500">
                  ⭐ {hotel?.rating}{hotel?.rating > 5 ? "/10" : "/5"}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
