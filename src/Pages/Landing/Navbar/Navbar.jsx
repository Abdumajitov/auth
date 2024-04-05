import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Navbar = () => {
  const [btn, setBtn] = useState(false);
  const token = JSON.parse(localStorage.getItem("user")) 

  const btnOpen = () => {
    setBtn((prev) => !prev);
  };

  const del = () => {
    localStorage.removeItem("user")
  }

  return (
    <>
      <div className="cont">
        <div className="navbar">
          <div className="logo">
            <h1 className="logo-h1">Logo</h1>
          </div>
          <div className="menu">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <div className="login">
            {token ? (<NavLink onClick={del}>Log out</NavLink>):(<NavLink to={"/login"}>Login</NavLink>)}
            <NavLink to={"/register"}>Register</NavLink>  
          </div>
          <div onClick={btnOpen} className="profil">
            <AccountCircleIcon></AccountCircleIcon>
          </div>
          {btn && (
            <div className="labal">
              <NavLink to={"/admin"}>Admin Panel</NavLink>
              <NavLink to={"/peo"}>People panel</NavLink>
            </div>
          )}
        </div>
          <Outlet/>
      </div>
    </>
  );
};

export default Navbar;
