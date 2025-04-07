import { Button } from "@/components/ui/button";
import { getPlacesDetails, PHOTO_REF_URL } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { CiShare2 } from "react-icons/ci";

function Information({ trip }) {

  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    trip&&getPlacePhoto();
  }, [trip])

  const getPlacePhoto = async() =>{
    const data = {
      textQuery: trip?.userSelection?.location?.label
    }
    const result = await getPlacesDetails(data).then(resp=>{
      console.log(resp?.data.places[0].photos[3].name);
      const photoUrl = PHOTO_REF_URL.replace("{NAME}", resp?.data.places[0].photos[2].name);
      // console.log(photoUrl);
      setPhotoUrl(photoUrl);
    })
  }
  return (
    <div className="space-y-5 my-10">
      <img
        src={photoUrl}
        className="h-[440px] w-full object-cover rounded-2xl shadow-md"
        alt="Trip Location"
      />

      <div className="flex justify-between items-center">
        {/* Left Info */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white">
            {trip?.userSelection?.location?.label}
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
              📅 {trip?.userSelection?.days} Days
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
              💸 {trip?.userSelection?.budget} Budget
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
              🥂 No. of People: {trip?.userSelection?.people}
            </span>
          </div>
        </div>

        {/* Share Button */}
        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform shadow-md p-2 rounded-full"
        >
          <CiShare2 className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default Information;
