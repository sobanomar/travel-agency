import React from "react";
import {
  Outlet,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Destination from "./components/Destination/Destination";
import DestinationDetails from "./components/SingleDestination/DestinationDetails";
import SingleDestination from "./components/SingleDestination/SingleDestination";
import ScrollToTop from "./components/utils/ScrollToTop";

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
      </ScrollToTop>
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
        path: "/destination/:desId",
        element: <SingleDestination />,
      },
    ],
  },
]);
