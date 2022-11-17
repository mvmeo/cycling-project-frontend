import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./routes/comunity/Login";
import Landing from "./routes/Landing";
import Register from "./routes/comunity/Register";
import "./index.css";

//routes
import Bicicletas from "./routes/Products/Bicicletas";
import Repuestos from "./routes/Products/Repuestos";
import Accesorios from "./routes/Products/Accesorios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/comunidad",
    element: <App />,
  },
  {
    path: "/comunidad/login",
    element: <Login />,
  },
  {
    path: "/comunidad/register",
    element: <Register />,
  },
  {
    path: "/bicicletas",
    element: <Bicicletas />,
  },
  {
    path: "/repuestos",
    element: <Repuestos />,
  },
  {
    path: "/accesorios",
    element: <Accesorios />,
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
