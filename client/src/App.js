import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addstaff from "./components/addstaff/Addstaff";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Myorder from "./components/myorder/Myorder";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order";
import Stafflist from "./components/stafflist/Stafflist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addstaff" element={<Addstaff />} />
          <Route path="/order" element={<Order />} />
          <Route path="/myorders" element={<Myorder />} />
          <Route path="/stafflist" element={<Stafflist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
