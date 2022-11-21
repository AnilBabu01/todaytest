import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import "./Auth.css";
const Signup = () => {
  const alert = useAlert();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    alert.error("User Allreay exist");
    const res = await axios.post("http://localhost:8080/api/auth/register", {
      name: name,
      email: email,
      password: password,
    });
    if (res.data.token) {
      alert.success(res.data.msg);
    }
    if (res.response.data.status === false) {
      alert.error(res.response.data.msg);
    }

    console.log(name, password, email, res.data.token);
  };
  return (
    <>
      <div className="mainformdiv">
        <form onSubmit={onsubmit} className="formstyel">
          <div className="inputdiv">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="inputdiv">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
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

export default Signup;
