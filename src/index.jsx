import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
