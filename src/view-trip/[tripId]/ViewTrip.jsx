import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Information from "../components/Information";
import Hotels from "../components/Hotels";
import Places from "../components/Places";
import Footer from "../components/Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  useEffect(() => {
    tripId && getTripData();
    document.title = trip?.userSelection?.location?.label || "Wanderly";
  }, [tripId]);
  const getTripData = async () => {
    const docRef = doc(db, "Trips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Doc: ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No Data");
      toast.error("No Trip Found!");
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56 ">
      {/* Info  */}
      <Information trip={trip} />
      {/* Hotels */}
      <Hotels trip={trip} />
      {/* Itinerary */}
      <Places trip={trip} />
      {/* Footer  */}
      <Footer trip={trip} />
    </div>
  );
}

export default ViewTrip;
