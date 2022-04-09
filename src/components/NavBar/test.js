import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavCollapse = (isButton) => {
 
    if (!isButton) setIsNavCollapsed(!isNavCollapsed);
    else if (isNavCollapsed && isButton){
      setIsNavCollapsed(!isNavCollapsed);
    }else setIsNavCollapsed(false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) setScrolling(true);
    else setScrolling(false);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  let isMobile = width <= 988;

  var navbarElements = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/services" },
    { name: "Package", link: "/pricing" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  function navbarButton() {
    return (
      <div className="pos-f-t nav-menu">
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {navbarElements.map((key, index) => (
              <li
                className={
                  location.pathname === key.link
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link
                  onClick={() => handleNavCollapse(false)}
                  className="nav-link"
                  to={key.link}
                >
                  {key.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <nav className="navbar navbar-dark ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={() => handleNavCollapse(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }

  function navbar() {
    return (
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          {navbarElements.map((key, index) => (
            <li
              key={index}
              className={location.pathname === key.link ? "active" : ""}
            >
              <Link to={key.link}>{key.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return ( 
    <div>
      <header
        id="header"
        className={`fixed-top ${
          isMobile || scrolling || location.pathname !== "/" ? "header-scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 d-flex align-items-center justify-content-between">
              <h1 className="logo">
                {/* <a href="index.html">Fitzz</a> */}
                <Link to="/" className="logo">
                  <img
                    src="assets/img/log.png"
                    alt="logo"
                    className="img-fluid"
                  ></img>
                </Link>
              </h1>
              {navbar()}
              
              {isMobile && navbarButton()}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
