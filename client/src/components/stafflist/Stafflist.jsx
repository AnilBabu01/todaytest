import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
const Stafflist = () => {
  const alert = useAlert();
  const [stafflist, setstafflist] = useState([]);
  const getstafflist = async () => {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("todaytoken")}`;
    const res = await axios.get("http://localhost:8080/api/auth/getstafflist");
    setstafflist(res.data.staffmembers);
    console.log(res.data.staffmembers);
  };

  const deletestaff = async (id) => {
    axios.defaults.headers.delete[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("todaytoken")}`;
    const res = await axios.delete(
      `http://localhost:8080/api/auth/deletestaff/${id}`
    );

    if (res.data.status === true) {
      alert.success("staff delete succcesffuly");
      getstafflist();
    }
    console.log(res);
  };

  useEffect(() => {
    getstafflist();
  }, []);

  return (
    <>
      {stafflist &&
        stafflist.map((item) => {
          return (
            <div key={item._id}>
              <p>name:{item.name}</p>
              <p>email:{item.email}</p>
              <button onClick={() => deletestaff(item._id)}>Delete</button>
            </div>
          );
        })}
    </>
  );
};

export default Stafflist;
