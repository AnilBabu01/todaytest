import React, { useState, useEffect } from "react";
import axios from "axios";

const Myorder = () => {
  const [orders, setorders] = useState([]);
  const getstafflist = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("todaytoken")}`;
    const res = await axios.get("http://localhost:8080/api/getorder");
    setorders(res.data.orders);
    console.log(res.data.orders);
  };

  useEffect(() => {
    getstafflist();
  }, []);

  return (
    <>
      {orders &&
        orders.map((item) => {
          return (
            <div key={item._id}>
              <p>Food type:{item.foodname}</p>
              <p>status:{item.status}</p>
            </div>
          );
        })}
    </>
  );
};

export default Myorder;
