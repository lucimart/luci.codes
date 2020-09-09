import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.styles.scss';
import Toolbar from './Toolbar/Toolbar.component';
import SideDrawer from './SideDrawer/SideDrawer.component';
import Backdrop from './Backdrop/Backdrop.component';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideDrawerOpen: false,
    };
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  closeDrawer = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    const links = [
      ['projects', '/#projects'],
      ['about me', '/#about-me'],
      ['blog', '/blog'],
      ['contact', '/#contact'],
    ].map((link, index) => (
      <li key={index}>
        <Link smooth to={link[1]} onClick={this.closeDrawer}>
          {link[0]}
        </Link>
      </li>
    ));

    let backdrop;

    if (this.state.isSideDrawerOpen) {
      backdrop = <Backdrop closeDrawer={this.closeDrawer} />;
    }
    return (
      <React.Fragment>
        <div className='header__wave'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='header-wave'
            viewBox='0 0 800 338.05'
            preserveAspectRatio='none'
          >
            <path> </path>
          </svg>
        </div>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          isSideDrawerOpen={this.state.isSideDrawerOpen}
          links={links}
        />
        <SideDrawer
          show={this.state.isSideDrawerOpen}
          links={links}
          closeDrawer={this.closeDrawer}
        />
        {backdrop}
      </React.Fragment>
    );
  }
}

export default Header;
