import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FindRoute from "./components/FindeRoute/FindRoute";
import ProductPage from "./components/Shop/ProductPage";
import App from "./components/Shop/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/findroute" element={<FindRoute />} />
      <Route path="/App" element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
