import React, { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import "../auth/Auth.css";
const Order = () => {
  const alert = useAlert();

  const [foodtype, setfoodtype] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
    alert.error("User Allreay exist");

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("todaytoken")}`;
    const res = await axios.post("http://localhost:8080/api/createorder", {
      foodname: foodtype,
    });
    if (res.data.token) {
      alert.success(res.data.msg);
    }
    if (res.response.data.status === false) {
      alert.error(res.response.data.msg);
    }
  };

  const data = [
    {
      type: "Please select food types",
    },
    {
      type: "Breackfast",
    },
    {
      type: "launch",
    },
    {
      type: "Dinner",
    },
  ];
  return (
    <>
      <div className="mainformdiv">
        <form onSubmit={onsubmit} className="formstyel">
          <div className="inputdiv">
            <label>Food type</label>

            <select onChange={(e) => setfoodtype(e.target.value)}>
              {data.map((item) => {
                return (
                  <option key={item.type} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <input type="submit" value="Order" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
