import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.styles.scss";

const sideDrawer = ({ show, links, closeDrawer }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" onClick={closeDrawer}>
            home
          </Link>
        </li>
        {links}
      </ul>
    </nav>
  );
};

export default sideDrawer;
