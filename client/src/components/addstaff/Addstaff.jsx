import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import "../auth/Auth.css";
const Addstaff = () => {
  const alert = useAlert();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [stafftype, setstafftype] = useState("");

  const data = [
    {
      type: "Please select staff type",
    },
    {
      type: "day",
    },
    {
      type: "night",
    },
  ];

  const onsubmit = async (e) => {
    e.preventDefault();
    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("todaytoken")}`;
    const res = await axios.post("http://localhost:8080/api/auth/addstaff", {
      name: name,
      email: email,
      password: password,
      stafftype: stafftype,
    });
    if (res.data.token) {
      alert.success(res.data.msg);
    }
    if (res.response.data.status === false) {
      alert.error(res.response.data.msg);
    }

    console.log(res.response);
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
            <label>Staff type</label>

            <select onChange={(e) => setstafftype(e.target.value)}>
              {data.map((item) => {
                return (
                  <option key={item.type} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
            </select>
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
            <input type="submit" value="Add Staff" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Addstaff;
