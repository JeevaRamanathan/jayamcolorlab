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
          value == "home"
            ? colorChange || width < 992
              ? "navbar navbar-expand-lg fixed-top navbar-dark colorChange"
              : "navbar navbar-expand-lg fixed-top navbar-dark  transition"
            : "navbar navbar-expand-lg fixed-top navbar-light colorChange transition"
        }
      >
        <div className="container">
          <Link to="/">
            <img src="lofgo.png" style={{ height: "55px" }} alt="Logo" />
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
                    value == "home" ? "hover-underline-animation1 new1" : ""
                  }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
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
                  className={`nav-item hover-underline-animation new
              ${value == "about" ? "hover-underline-animation1 new1" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
                    }}
                  >
                    About
                  </span>
                </li>
              </Link>
            </ul>

            <ul className="navbar-nav ml-auto">
              <Link to="/services">
                <li
                  key="services"
                  onClick={() => closeNav("services")}
                  className={`nav-item hover-underline-animation new
              ${value == "services" ? "hover-underline-animation1 new1" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
                    }}
                  >
                    Services
                  </span>
                </li>
              </Link>
            </ul>

            {/* <ul className="navbar-nav ml-auto">
              <Link to="/gallery">
                <li
                  key="gallery"
                  onClick={() => closeNav("gallery")}
                  className={`nav-item hover-underline-animation new
              ${value == "gallery" ? "hover-underline-animation1 new1" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
                    }}
                  >
                    Gallery
                  </span>
                </li>
              </Link> */}
            {/* </ul> */}
            <ul
              class="navbar-nav ml-auto"
              onMouseOver={() => setGalleryExpanded(false)}
            >
              <div class={!galleryExpanded ? "dropdown" : "hide"}>
                <li
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  key="gallery"
                  onClick={() => closeNav("gallery")}
                  className={`nav-item hover-underline-animation  new
              ${value == "gallery" ? "hover-underline-animation1   new1" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
                    }}
                  >
                    Gallery
                  </span>
                </li>
                {/* <button class="btn btn-secondary"
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                Dropdown button
            </button> */}

                <div
                  class={"dropdown-menu"}
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/wedding"
                  >
                    <span class="dropdown-item">Wedding</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => {
                      setGalleryExpanded(true);
                      closeNav("gallery");
                    }}
                    to="/gallery/chettinadWedding"
                  >
                    <span class="dropdown-item">Chettinad Wedding</span>
                    <hr className="p-0 m-0" color="white" />
                  </Link>
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/otherwedding"
                  >
                    <span class="dropdown-item">60 / 70 / 80's Wedding</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/ppwe"
                  >
                    <span class="dropdown-item">
                      Pre/Post Wedding & Engagement{"   "}
                    </span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/bday"
                  >
                    <span class="dropdown-item">Birthday</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/corporateEvents"
                  >
                    <span class="dropdown-item">Corporate Events</span>
                    <hr className="p-0 m-0" color="white" />{" "}
                  </Link>
                  <Link
                    onClick={() => setGalleryExpanded(true)}
                    to="/gallery/albums"
                  >
                    <span class="dropdown-item">Albums & Other Events</span>
                  </Link>
                </div>
              </div>
            </ul>

            <ul className="navbar-nav ml-auto">
              <Link to="/contact">
                <li
                  key="contact"
                  onClick={() => closeNav("contact")}
                  className={`nav-item hover-underline-animation new
              ${value == "contact" ? "hover-underline-animation1 new1" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                      // color: value=='home'? colorChange || width < 992 ? "#343635" : "white":'#343635'
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
