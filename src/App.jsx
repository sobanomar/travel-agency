import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Destination from "./components/Destination/Destination";
import SingleDestination from "./components/SingleDestination/SingleDestination";
import ScrollToTop from "./components/utils/ScrollToTop";
import Booking from "./components/Booking/Booking";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AppLayout = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ScrollToTop>
          <Header />
          <Outlet />
          <Footer />
        </ScrollToTop>
      </LocalizationProvider>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/destinations",
        element: <Destination />,
      },
      {
        path: "/destinations/:desId",
        element: <SingleDestination />,
      },
      {
        path: "/booking/manual-booking",
        element: <Booking />,
      },
      {
        path: "/booking/auto/:bookingId",
        element: <Booking />,
      },
    ],
  },
]);
