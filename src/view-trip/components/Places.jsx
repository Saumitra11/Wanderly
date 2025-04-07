import { Button } from "@/components/ui/button";
import { getPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Places({ trip }) {
  const itineraryEntries = Object.entries(trip?.tripData?.itinerary || {});
  const sortedItinerary = itineraryEntries.sort(([a], [b]) => a.localeCompare(b));
  const [placePhotos, setPlacePhotos] = useState({});

  useEffect(() => {
    sortedItinerary.forEach(([dayKey, dayData]) => {
      dayData.plan.forEach((place, index) => {
        fetchPlacePhoto(place.placeName, `${dayKey}-${index}`);
      });
    });
  }, [trip]);

  const fetchPlacePhoto = async (placeName, key) => {
    try {
      const data = { textQuery: placeName };
      const resp = await getPlacesDetails(data);
      const photoRef = resp?.data?.places?.[0]?.photos?.[0]?.name;

      if (photoRef) {
        const url = PHOTO_REF_URL.replace("{NAME}", photoRef);
        setPlacePhotos((prev) => ({
          ...prev,
          [key]: url,
        }));
      }
    } catch (error) {
      console.error("Error fetching place photo:", placeName, error);
    }
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">
        🏖️ Places to Visit
      </h2>
      <div>
        {sortedItinerary.map(([dayKey, dayData], index) => (
          <div key={dayKey} className="mb-10">
            <h3 className="text-xl font-semibold mb-3 text-orange-600">
              📅 {dayKey.toUpperCase()} — Best Time: {dayData.bestTimeToVisit}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {dayData.plan.map((place, i) => {
                const isEven = i % 2 === 0;
                const key = `${dayKey}-${i}`;
                const imgSrc = placePhotos[key] || "/placeholder1.jpg";

                return (
                  <div
                    key={key}
                    className={`bg-gradient-to-tl from-green-50 via-white to-blue-100 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all p-5 flex items-center ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={place?.placeName}
                      className="rounded-xl w-1/3 h-40 object-cover mr-4"
                    />
                    <div className="w-2/3 space-y-2">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {place?.placeName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {place?.placeDetails}
                      </p>
                      <div className="text-sm text-gray-500">
                        <p>🕒 {place?.timeTravel}</p>
                        <p>🎟️ {place?.ticketPricing}</p>
                        {place?.notes && <p>📝 {place?.notes}</p>}
                      </div>
                      <p className="text-sm font-medium text-yellow-600">
                        ⭐ {place?.rating}{place?.rating > 5 ? "/10" : "/5"};
                      </p>
                      <div>
                        <Link
                          to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place?.placeName)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="cursor-pointer">
                            <FaMapLocationDot />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
