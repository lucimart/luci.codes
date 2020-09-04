import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.component";
import "./Toolbar.styles.scss";

const toolbar = ({ drawerClickHandler, isSideDrawerOpen, links }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className={`toolbar__navigation__toggle-button`}>
        <DrawerToggleButton
          click={drawerClickHandler}
          isSideDrawerOpen={isSideDrawerOpen}
        />
      </div>
      <div className="toolbar__navigation__logo">
        <Link to="/">luci</Link>
      </div>
      <div className="toolbar__navigation__items">
        <ul>{links}</ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
