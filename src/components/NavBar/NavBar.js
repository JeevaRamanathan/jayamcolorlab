import { Link } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
const NavBar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(props.active);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else if (toggle) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  const closeNav = (value) => {
    setValue(value);
    document.getElementById("navbarSupportedContent").className =
      "collapse navbar-collapse justify-content-end transition";
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <Fragment>
      <nav
        id="navBar"
        className={
          window.location.pathname === "/"
            ? colorChange || width < 992
              ? "navbar navbar-expand-lg fixed-top navbar-dark colorChange"
              : "navbar navbar-expand-lg fixed-top navbar-dark  transition"
            : "navbar navbar-expand-lg fixed-top navbar-light colorChange transition"
        }
      >
        <div className="container">
          <Link to="/">
            <img src="/jcllogo1.png" style={{ height: "40px" }} alt="Logo" />
          </Link>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="#ff7000" />
          </div>

          <div
            className={"collapse navbar-collapse justify-content-end"}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              <Link to="/">
                <li
                  key="home"
                  onClick={() => closeNav("home")}
                  
                  className={`nav-item hover-underline-animation new ${
                    window.location.pathname === "/"
                      ? "hover-underline-animation1 new1"
                      : ""
                  }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    Home
                  </span>
                </li>
              </Link>
            </ul>

            <ul className="navbar-nav ml-auto">
              <Link to="/about">
                <li
                  key="about"
                  onClick={() => closeNav("about")}
                  className={`nav-item hover-underline-animation new ${
                    window.location.pathname === "/about"
                      ? "hover-underline-animation1 new1"
                      : ""
                  }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    About
                  </span>
                </li>
              </Link>
            </ul>

       
            <ul
              className="navbar-nav ml-auto dropdown"
              onMouseOver={() => setGalleryExpanded(false)}
            >
              <div className={!galleryExpanded ? "dropdown" : "hide"}>
                <li
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  key="gallery"
                  disabled={true}
                  className={`nav-item hover-underline-animation new
              ${
                /^\/gallery\/[a-zA-Z]+/.test(window.location.pathname)
                  ? "hover-underline-animation1 new1"
                  : ""
              }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    Gallery
                  </span>
                </li>

                <div
                  className={"dropdown-menu"}
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    onClick={() => {
                      setGalleryExpanded(true);
                      closeNav("gallery");
                    }}
                    to="/gallery/chettinadWedding"
                  >
                    <span className="dropdown-item">Chettinad Wedding</span>
                    <hr className="p-0 m-0" color="white" />
                  </Link>
                  <Link
                    onClick={() => {
                      setGalleryExpanded(true);
                      closeNav("gallery");
                    }}
                    to="/gallery/wedding"
                  >
                    <span className="dropdown-item">Other Weddings</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>

                  <Link
                    onClick={() => {
                      {
                        setGalleryExpanded(true);
                        closeNav("gallery");
                      }
                    }}
                    to="/gallery/otherwedding"
                  >
                    <span className="dropdown-item">
                      60 / 70 / 80's Wedding
                    </span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      {
                        setGalleryExpanded(true);
                        closeNav("gallery");
                      }
                    }}
                    to="/gallery/ppwe"
                  >
                    <span className="dropdown-item">
                      Pre/Post Wedding & Engagement{"   "}
                    </span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      {
                        setGalleryExpanded(true);
                        closeNav("gallery");
                      }
                    }}
                    to="/gallery/bday"
                  >
                    <span className="dropdown-item">Birthday and Puberty</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      {
                        setGalleryExpanded(true);
                        closeNav("gallery");
                      }
                    }}
                    to="/gallery/corporateEvents"
                  >
                    <span className="dropdown-item">Other Events</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      {
                        setGalleryExpanded(true);
                        closeNav("gallery");
                      }
                    }}
                    to="/gallery/albums"
                  >
                    <span className="dropdown-item">Albums</span>
                  </Link>
                </div>
              </div>
            </ul>

            <ul className="navbar-nav ml-auto">
              <Link to="/videography">
                <li
                  key="videography"
                  onClick={() => closeNav("videography")}
                  className={`nav-item hover-underline-animation new ${
                    window.location.pathname === "/videography"
                      ? "hover-underline-animation1 new1"
                      : ""
                  }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    Wedding Flims
                  </span>
                </li>
              </Link>
            </ul>

            <ul className="navbar-nav ml-auto">
              <Link to="/contact">
                <li
                  key="contact"
                  onClick={() => closeNav("contact")}
                  className={`nav-item hover-underline-animation new
              ${
                window.location.pathname === "/contact"
                  ? "hover-underline-animation1 new1"
                  : ""
              }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    Contact
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
