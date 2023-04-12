import React, { useState } from "react";
import { Container } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { GoogleLoginComp } from "../GoogleLoginComp";
import { useAuth } from "../auth";
const Header = () => {
  const [click, setClick] = useState(false);
  // const { loginWithRedirect, logout, isAuthenticated  } = useAuth0();

  //changing nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const {auth} = useAuth()

  return (
    <Container fixed>
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <div className="navbar-container container">
          <Link
            to="/"
            className={color ? "navbar-logo-scroll" : "navbar-logo"}
            onClick={closeMobileMenu}
          >
            Read <i style={{ fontStyle: "normal", color: "#ffd369" }}>it</i>.
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/home"
                // className={color ? "nav-links-scroll" : "nav-links-scroll"}
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
                Articles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/home"
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
               
                Profile
              </NavLink>
              </li>
                <li>
              {
                !auth && (<NavLink
                to="/login"
                className={
                  (({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : ""),
                  color ? "nav-links-scroll" : "nav-links")
                }
                onClick={closeMobileMenu}
              >
               
                Login
              </NavLink>
              )
              }
            </li>
           
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
