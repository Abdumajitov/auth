import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const Navbar = lazy(() => import("./Pages/Landing/Navbar/Navbar.jsx"));
const About = lazy(() => import("./Pages/Landing/About/About.jsx"));
const Home = lazy(() => import("./Pages/Landing/Home/Home.jsx"));
const Contact = lazy(() => import("./Pages/Landing/Contact/Contact.jsx"));
const Login = lazy(() => import("./Pages/Landing/Login/Login.jsx"));
const Register = lazy(() => import("./Pages/Landing/Register/Register.jsx"));
const Profil = lazy(() => import("./Pages/Landing/Profil/Profil.jsx"));
const Admin = lazy(() => import("./Pages/Landing/Adminn/Admin.jsx"));
const Peo = lazy(() => import("./Pages/Landing/People/peo.jsx"));
const Auth1 = lazy(() => import("./Service/Auth1/Auth1.jsx"));
const Auth2 = lazy(() => import("./Service/Auth2/Auth2.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admin",
        element: <Auth1></Auth1>,
        children: [
          {
            path: "/admin",
            element: <Admin></Admin>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/peo",
        element: <Auth2></Auth2>,
        children: [
          {
            path: "/peo",
            element: <Peo></Peo>,
          },
        ],
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profil",
        element: <Profil></Profil>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...LADING</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
