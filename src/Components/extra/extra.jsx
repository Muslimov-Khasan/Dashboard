import React from "react";
import { Link } from "react-router-dom";
import "./extra.scss";

const SidebarNav = ({ icon, title, active, status, setActive, path = "/" }) => {
  const handleClickNav = () => {
    setActive(status);
  };
  return (
    <li onClick={handleClickNav}>
      <Link
        to={path}
        className={active === status ? "sidebar__nav active" : "sidebar__nav"}
      >
        {icon}
        <h4 className="sidebar__nav-title">{title}</h4>
      </Link>
    </li>
  );
};

export default SidebarNav;