import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip/CreateTrip";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./view-trip/[tripId]/ViewTrip";
import MyTrips from "./my-trips/MyTrips";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "create-trip", element: <CreateTrip /> },
      { path: "view-trip/:tripId", element: <ViewTrip /> },
      { path: "my-trips", element: <MyTrips /> },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
 <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Toaster />
      <Toaster richColors />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
