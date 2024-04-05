import React from "react";
import {Outlet} from "react-router-dom"
import { Navigate } from "react-router-dom";

const Auth2 = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.token) {
    if(user.role === 2222 || user.role === 7777){
        return <Outlet/>
    }
  } else {
    return <Navigate to={"/login"} />;
  }

  return <div>People</div>;
};

export default Auth2;
