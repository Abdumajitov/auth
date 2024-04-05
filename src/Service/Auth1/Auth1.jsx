import React from "react";
import {Navigate} from "react-router-dom"
import {Outlet} from "react-router-dom"

const Auth1 = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.token) {
    if(user.role === 7777){
        return <Outlet/>
    }else{
        alert("KIRISH MUMKIUNMAS")
    }
  } else {
    return <Navigate to={"/login"} />;
  }
  return <div>Admin</div>;
};

export default Auth1;
