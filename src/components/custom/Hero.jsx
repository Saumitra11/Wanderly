import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-8 lg:mx-16 gap-6 lg:gap-10">
      <h1 className="font-extrabold text-[48px] md:text-[60px] text-center mt-16 opacity-0 animate-fadeIn">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500">
          Search, Plan, and Wander
        </span>
        <div className="mt-4 text-2xl md:text-3xl text-gray-600 opacity-0 animate-fadeIn delay-200">
          Your Perfect Trip Awaits.
        </div>
      </h1>
      <p className="text-[1.125rem] md:text-[1.25rem] text-gray-500 text-center max-w-3xl opacity-0 animate-fadeIn delay-400">
        With Wanderly, AI takes the guesswork out of travel. Get personalized
        itineraries tailored to your preferences, so you can focus on the
        adventure. Let us plan your next journey, seamlessly and smartly.
      </p>
      <Link to="/create-trip">
        <Button className="mt-6 px-8 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md opacity-0 animate-fadeIn delay-300 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          Get Started Today—No Fees, Just Fun!
        </Button>
      </Link>
    </div>
  );
}

export default Hero;
