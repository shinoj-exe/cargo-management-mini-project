import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import React from 'react'
import "./App.css"
import Booking from "./Pages/Booking/Booking";
import MyBookings from "./Pages/MyBookings/MyBookings";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/booking" element={<Booking/>}></Route>
        <Route exact path="/mybooking" element={<MyBookings/>}></Route>
        <Route exact path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route exact path="/adminpage" element={<AdminPage/>}></Route>
        <Route exact path="/alldetails" element={<FlightDetails/>}></Route>

      </Routes>
    </>
  )
}


export default App;
