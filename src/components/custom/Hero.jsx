import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 px-4">
      <div className="flex flex-col items-center mx-4 lg:mx-16 gap-6 lg:gap-10 text-center max-w-4xl">
        <h1 className="font-extrabold text-[48px] md:text-[60px] opacity-0 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500">
            Search, Plan, and Wander
          </span>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-600 opacity-0 animate-fadeIn delay-200">
          Your Perfect Trip Awaits.
        </div>

        <p className="text-lg md:text-xl text-gray-500 max-w-3xl opacity-0 animate-fadeIn delay-400">
          With Wanderly, AI takes the guesswork out of travel. Get personalized
          itineraries tailored to your preferences, so you can focus on the
          adventure. Let us plan your next journey, seamlessly and smartly.
        </p>

        <Link to="/create-trip">
          <Button className="mt-6 px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md opacity-0 animate-fadeIn delay-300 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer shadow-lg">
            Get Started Today—No Fees, Just Fun!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
