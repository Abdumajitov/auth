import { useState } from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const intSave = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const btnHend = async (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      const { data } = await axios.get("http://localhost:3000/users");
      const user = data.find((u) => u.email === login.email);
      if (user) {
        if (user.password === login.password) {
          if (login.email === "admin@gmail.com") {
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, role: 7777, token: Date.now() })
            );
          } else {
            localStorage.setItem("user", JSON.stringify({
              ...user,
              role: 2222,
              token: Date.now(),
            }));
          }
            alert("Yakshi")
            navigate("/")
        } else {
          alert("PASSWORD XATO");
        }
      } else {
        alert("EMAIL 3.0");
      }
    } else {
      alert("XATO 2.0");
    }
  };

  return (
    <>
      <form onSubmit={btnHend} className="login2" action="">
        <input
          name="email"
          onChange={intSave}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={intSave}
          type="password"
          placeholder="Password"
        />
        <button onClick={btnHend}>Login</button>
      </form>
    </>
  );
};

export default Login;
