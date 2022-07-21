import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { SiCodeigniter } from 'react-icons/si';
import { ImCross } from "react-icons/im"
import { Container, Dropdown } from 'react-bootstrap';
import './NavStyle.css'

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const handlelagout = () => {
    localStorage.clear()
  }

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Ignite
            <SiCodeigniter />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                profile
              </NavLink> */}
              <Dropdown>
                <Dropdown.Toggle>
                  <FaUserAlt />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">My Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Subscription</Dropdown.Item>
                  <Dropdown.Item href="/" onClick={handlelagout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <ImCross /> : <FaBars />}
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Header;