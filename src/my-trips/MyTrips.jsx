import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCard from "./components/UserTripCard";

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getUserTrips();
  }, []);

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(
      collection(db, "Trips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });
    setUserTrips(trips);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-40 px-5 mt-10 text-gray-900">
      <h2 className="font-bold text-3xl text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        My Trips
      </h2>
      <p className="text-center text-gray-500 text-sm mb-10">
        Your saved adventures are just a click away 🌍
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {userTrips?.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCard key={index} trip={trip} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              No trips found
            </h2>
            <p className="text-gray-500 text-sm">
              Start planning your next adventure now!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTrips;
