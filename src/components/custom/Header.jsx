import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { GrGoogle } from "react-icons/gr";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (response) => getUserProfile(response),
    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload(); // Or navigate("/") if you want to avoid reload
      });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="p-4 shadow-lg bg-white/70 backdrop-blur-md flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/logo.svg" alt="Wanderly Logo" className="cursor-pointer" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 hover:scale-105 transition-all duration-200 cursor-pointer">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 hover:scale-105 transition-all duration-200 cursor-pointer">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt="User avatar"
                  className="rounded-full h-[35px] w-[35px] cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent className="w-40 p-2 text-center shadow-md bg-white rounded-xl">
                <h2
                  className="cursor-pointer text-red-500 font-semibold hover:underline transition"
                  onClick={handleLogout}
                >
                  Log Out
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={() => setOpenDialog(true)}
          >
            Get Started
          </Button>
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="p-6 rounded-xl shadow-xl border border-gray-200 bg-white max-w-sm">
          <DialogHeader className="text-center">
            <img src="./logo.svg" alt="Wanderly Logo" className="mx-auto" />
            <h2 className="font-bold text-xl mt-5 text-gray-900">
              Sign In with Google
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Sign in to the app with Google authentication
            </p>
          </DialogHeader>
          <Button
            className="w-full mt-5 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md cursor-pointer flex gap-4 items-center justify-center hover:brightness-110 transition"
            onClick={login}
          >
            Sign In with Google
            <GrGoogle className="h-6 w-6" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
