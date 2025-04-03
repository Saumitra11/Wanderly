import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 shadow-lg bg-white/70 backdrop-blur-md flex justify-between items-center">
      {/* <Link to='/create-trip'> */}
      <img src="/logo.svg" alt="Wanderly Logo" className="cursor-pointer" />
      {/* </Link> */}

      <div className="flex items-center gap-4">
        <Button className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-200 cursor-pointer">
          Sign In
        </Button>

        {/* Light/Dark Toggle Button (can be added later) */}
        {/* <Button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:scale-105 transition-all duration-200">Light/Dark</Button> */}
      </div>
    </div>
  );
}

export default Header;
