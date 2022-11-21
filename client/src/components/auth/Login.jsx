import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";
import "./Auth.css";
const Login = () => {
  const alert = useAlert();

  const naviget = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/api/auth/login", {
      email: email,
      password: password,
    });

    localStorage.setItem("todaytoken", res.data.token);

    localStorage.setItem("userroles", res.data.user.role);
    localStorage.setItem("staff", res.data.user.staff);
    console.log(res.data.user);
    if (res.data.token) {
      naviget("/");
      alert.success(res.data.msg);
    }
    if (res.response.data.status === false) {
      alert.error(res.response.data.msg);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("todaytoken")) {
      naviget("/");
    }
  }, []);

  return (
    <>
      <div className="mainformdiv">
        <form onSubmit={onsubmit} className="formstyel">
          <div className="inputdiv">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your emial"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="inputdiv">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
