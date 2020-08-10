import React from "react"
import { Link } from "gatsby"
import "./header.scss"

const navHandler = () => {
  document.querySelector(".header__nav-toggle").classList.toggle("active")
  document.querySelector(".navbar").classList.toggle("navbarTransition")

  document
    .querySelector(".opaqueWindow")
    .classList.toggle("opaqueWindowTransition")
}

const Navbar = () => {
  return (
    <>
      <div
        className="opaqueWindow"
        role="button"
        aria-label="Close sidebar"
        tabIndex={0}
        onClick={navHandler}
        onKeyDown={event => {
          if (event.shiftKey) navHandler()
        }}
      ></div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>

            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <Link to="/blog/">blog</Link>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header className="header">
      <button className="header__nav-toggle" type="button" onClick={navHandler}>
        <span></span>
      </button>
      <Link to="/" className="header__logo">
        luci
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
