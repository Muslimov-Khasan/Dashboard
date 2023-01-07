import React, { useState } from "react";
import SidebarWrapper from "../SidebarWrapper/SidebarWrapper";
import Logo from "./../../Assists/Img/Logo.png";
import "./Sidebar.scss";

const Sidebar = () => {
  const [active, setActive] = useState("overview");
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img src={Logo} className="sidebar__top-img" width="200" />
        <h2 className="logo-text">Dashboard Kit</h2>
      </div>

      <SidebarWrapper/>
    </div>
  );
};

export default Sidebar;
