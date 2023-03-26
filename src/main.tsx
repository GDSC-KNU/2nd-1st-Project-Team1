import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Root from "./routes/root/root";
import Page from "./routes/page/page";
import Login from "./routes/login/login";
import Summary from "./routes/summary/summary";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/page" element={<Page />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
  { basename: "/2nd-1st-Project-Team1/" },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={route} />,
  // </React.StrictMode>,
);
