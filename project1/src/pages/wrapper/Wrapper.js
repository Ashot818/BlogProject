import React from "react";
import { Outlet } from "react-router-dom";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import ContactIcons from "../../components/ContactIcons/ContactIcons";
import Footer from "../../components/Footer/Footer";
import "./Wrapper.css";

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <PersonalInfo />
        <ContactIcons />
      </div>
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Wrapper;
