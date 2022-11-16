import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import Landing from "./routes/Landing";
import Register from "./routes/Register";
import './index.css';
import ProductPage from "./routes/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    // sustituir nombre "proyecto" por el nombre de tu proyecto
    path: "/proyecto",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bicicleta/:id",
    element: <ProductPage />,
  },
  {
    path: "/repuesto/:id",
    element: <ProductPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
