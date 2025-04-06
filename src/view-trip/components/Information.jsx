import { Button } from "@/components/ui/button";
import React from "react";
import { CiShare2 } from "react-icons/ci";

function Information({ trip }) {
  return (
    <div className="space-y-5 my-10">
      <img
        src="/placeholder1.jpg"
        className="h-[340px] w-full object-cover rounded-2xl shadow-md"
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
