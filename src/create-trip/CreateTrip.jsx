import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelersList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GrGoogle } from "react-icons/gr";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    document.title = "Create Trip";
  }, [])

  const login = useGoogleLogin({
    onSuccess: (response) => getUserProfile(response),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (formData?.days > 7 || formData?.days < 1) {
      toast.error("Please Enter Valid Days");
      return;
    }
    if (
      !formData?.days ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.people
    ) {
      toast.error("Please fill all details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{days}", formData?.days)
      .replace("{budget}", formData?.budget)
      .replace("{people}", formData?.people)
      .replace("{days}", formData?.days);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    saveAITrip(result?.response?.text());
    setLoading(false);
    toast.success("Your trip will be generated successfully! 🎉");
  };

  const saveAITrip = async (tripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "Trips", docId), {
      id: docId,
      userSelection: formData,
      tripData: JSON.parse(tripData),
      userEmail: user?.email,
    });
    setLoading(false);
    navigate('/view-trip/' + docId);
  };

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
        onGenerateTrip();
      });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-35 px-5 mt-10 text-gray-900">
      <h2 className="font-bold text-4xl text-center">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Help Us Curate Your Ideal Adventure
        </span>{" "}
        🏖️🏝️
      </h2>
      <p className="mt-3 text-gray-600 text-lg text-center max-w-2xl mx-auto">
        Simply share a few details, and our trip planner will craft a
        personalized itinerary tailored to your preferences.
      </p>

      {/* Location  */}
      <div className="my-16 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Where's your next adventure taking you?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        {/* Days */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            How Long Will Your Next Adventure Be? (7 Days Max)
          </h2>
          <Input
            placeholder="Eg. 5 (in days)"
            type="number"
            className="mt-2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>

        {/* Budget  */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            What’s Your Adventure Budget?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow bg-white text-center cursor-pointer 
                  hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white
                  ${
                    formData?.budget === item.title
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : ""
                  }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <h2 className="text-sm text-gray-300 group-hover:text-white mt-1">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Group */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Who will your next adventure be with?
          </h2>
          <div className="grid grid-cols-2 gap-5 mt-5">
            {SelectTravelersList.map((item, index) => (
              <div
                key={index}
                className={`p-4 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow bg-white text-center cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white
                ${
                  formData?.people === item.people
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : ""
                }`}
                onClick={() => handleInputChange("people", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <h2 className="text-sm text-gray-300 group-hover:text-white mt-1">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <Button
          disabled={loading}
          className={`px-6 py-3 text-lg font-semibold rounded-lg text-white shadow-md transition-transform 
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed opacity-70"
        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 active:scale-95"
    }`}
          onClick={onGenerateTrip}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="p-6 rounded-xl shadow-xl border border-gray-200 bg-white max-w-sm">
          <DialogHeader className="text-center">
            <img src="./logo.svg" />
            <h2 className="font-bold text-xl mt-5 text-gray-900">
              Sign In with Google
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Sign in to the app with Google authentication
            </p>
          </DialogHeader>
          <Button
            className="w-full mt-5 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md cursor-pointer flex gap-4 items-center"
            onClick={login}
          >
            Sign In with Google
            <GrGoogle className="h-7 w-7" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
