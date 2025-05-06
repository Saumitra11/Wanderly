import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserTripCard({ trip }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    trip && getPlacePhoto();
  }, [trip]);

  const getPlacePhoto = async () => {
    try {
      const location = trip?.userSelection?.location?.label;
      if (!location) return;

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          location
        )}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      const data = await response.json();
      const imageUrl = data?.results?.[0]?.urls?.regular;

      setPhotoUrl(imageUrl || "/placeholder1.jpg");
    } catch (error) {
      console.error("Unsplash fetch failed:", error);
      setPhotoUrl("/placeholder1.jpg");
    }
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          src={photoUrl || '/placeholder1.jpg'}
          alt={trip?.userSelection?.location?.label}
          className="w-full h-[250px] object-cover"
        />
        <div className="p-4 space-y-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {trip?.userSelection?.location?.label}
          </h2>
          <p className="text-sm text-gray-500">
            {trip?.userSelection?.days} Days • ₹{trip?.userSelection?.budget}
          </p>
          <p className="text-xs text-gray-400">
            🧍 {trip?.userSelection?.people} people
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCard;
