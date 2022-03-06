import { Link } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [value,setValue]=useState('home')
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
    window.addEventListener("scroll", changeNavbarColor)
  })
 
  const closeNav= (value)=>{
    setValue(value)
    document.getElementById("navbarSupportedContent").className='collapse navbar-collapse justify-content-end transition'
  }
  useEffect(() => {
    window.addEventListener("resize",()=>setWidth(window.innerWidth));
  });
  return (
    <Fragment>
      <nav
        id="navBar"
        className={
          colorChange || width < 992
            ? "navbar navbar-expand-lg fixed-top navbar-light colorChange"
            : "navbar navbar-expand-lg fixed-top navbar-dark transition"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="0logo.png"
              width="55"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </a>
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
            <ul className="navbar-nav mr-auto">
              <li key='home' className={`nav-item hover-underline-animation ${value=='home'? "hover-underline-animation1":""}`}>
                <span
                  className="nav-link"
                  onClick={()=>closeNav('home')}
                  style={{color: colorChange || width < 992?'#343635':'white'}}
                >
                  Home
                </span>
              </li>
              <li key='about'  className={`nav-item hover-underline-animation ${value=='about'? "hover-underline-animation1":""}`}>
                <span className="nav-link"onClick={()=>closeNav('about')}  style={{color: colorChange || width < 992?'#343635':'white'}}>
                  About
                </span>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li key='contact' className={`nav-item hover-underline-animation ${value=='contact'? "hover-underline-animation1":""}`}>
                <span className="nav-link" onClick={()=>closeNav('contact')}  style={{color: colorChange || width < 992?'#343635':'white'}}>
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div classNameName="container">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
   
  </div>
  </div>
</nav> */}
    </Fragment>
  );
};

export default NavBar;
