// import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

// export default className NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       x: 0,
//     };
//   }

//   componentDidMount() {}
//   render() {
//     return (
//       <div classNameName="row">
//         {/* <nav classNameName="navbar navbarCustom navbar-expand-lg navbar-dark bg-dark fixed-top stroke">
//           <div classNameName="container fluid">
//             <nav classNameName="nav-brand">
//               <img
//                 src="logo.png"
//                 width="58"
//                 height="55"
//                 classNameName="d-inline-block align-top"
//                 alt="Logo"
//               />
//             </nav>
//             <button
//               classNameName="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarText"
//               aria-controls="navbarText"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span classNameName="navbar-toggler-icon"></span>
//             </button>

//             <div
//               classNameName="collapse navbar-collapse justify-content-end"
//               id="navbarText"
//             >
//               <ul classNameName="navbar-nav">
//                 <li classNameName="nav-item">
//                   <Link
//                     to="/"
//                     classNameName="nav-link"
//                     href="#"
//                     data-toggle="collapse"
//                     data-target="navbarText"
//                   >
//                     <span classNameName="text hover-underline-animation">
//                       {" "}
//                       Home{" "}
//                     </span>
//                   </Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link
//                     to="/about"
//                     classNameName="nav-link"
//                     // href="#"
//                     data-toggle="collapse"
//                     data-target="navbarText"
//                   >
//                     <span classNameName="text hover-underline-animation">
//                       {" "}
//                       About Us
//                     </span>
//                   </Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link
//                     to="/about"
//                     classNameName="nav-link"
//                     // href="#"
//                     data-toggle="collapse"
//                     data-target="navbarText"
//                   >
//                     <span classNameName="text hover-underline-animation">
//                       {" "}
//                       Contact
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav> */}
//       </div>
//     );
//   }
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// export default className NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       x: 0,
//     };
//   }

//   componentDidMount() {}
//   render() {
//     return (
//       <div classNameName="row">
//  <nav classNameName="navbar navbarCustom navbar-expand-lg navbar-dark bg-dark fixed-top stroke">
//   <div classNameName="container fluid">
//     <nav classNameName="nav-brand">
//       <img
//         src="logo.png"
//         width="58"
//         height="55"
//         classNameName="d-inline-block align-top"
//         alt="Logo"
//       />
//     </nav>
//     <button
//       classNameName="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarText"
//       aria-controls="navbarText"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>

//     <div
//       classNameName="collapse navbar-collapse justify-content-end"
//       id="navbarText"
//     >
//       <ul classNameName="navbar-nav">
//         <li classNameName="nav-item">
//           <Link
//             to="/"
//             classNameName="nav-link"
//             href="#"
//             data-toggle="collapse"
//             data-target="navbarText"
//           >
//             <span classNameName="text hover-underline-animation">
//               {" "}
//               Home{" "}
//             </span>
//           </Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link
//             to="/about"
//             classNameName="nav-link"
//             // href="#"
//             data-toggle="collapse"
//             data-target="navbarText"
//           >
//             <span classNameName="text hover-underline-animation">
//               {" "}
//               About Us
//             </span>
//           </Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link
//             to="/about"
//             classNameName="nav-link"
//             // href="#"
//             data-toggle="collapse"
//             data-target="navbarText"
//           >
//             <span classNameName="text hover-underline-animation">
//               {" "}
//               Contact
//             </span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//       </div>
//     );
//   }
// }

import React, { useState, Fragment, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarStyles";
const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 25) {
      setColorchange(true);
    }
    else if(window.scrollY <100 && toggle){
      setColorchange(true)
    }
    else {
      setColorchange(false);
    }
  };
  const changeNavbarResize =()=>{
    
  }
  window.addEventListener("scroll", changeNavbarColor);
  // window.addEventListener("resize",changeNavbarResize)

  useEffect(() => console.log(toggle))
  const navColor = () => {
    setToggle(!toggle)
    if (document.getElementById("navBar").className.includes("colorChange") && window.scrollY<10) {
      document.getElementById("navBar").className =
        "navbar navbar-expand-lg fixed-top navbar-dark transition";
    }
    else if(window.scrollY>10 && document.getElementById("navBar").className.includes("colorChange")){
      document.getElementById("navBar").className =
      "navbar navbar-expand-lg fixed-top navbar-light colorChange";
  }
    
    else {
      document.getElementById("navBar").className =
        "navbar navbar-expand-lg fixed-top navbar-light colorChange";
    }
  };
  return (
    <Fragment>
      {/* <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div classNameName="container">
          {" "}
          <nav classNameName="nav-brand">
            <img
              src="logo.png"
              width="58"
              height="55"
              classNameName="d-inline-block align-top"
              alt="Logo"
            />
          </nav>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div
            classNameName="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul classNameName="navbar-nav">
              <li classNameName="nav-item">
                <Link
                  to="/"
                  classNameName="nav-link"
                  href="#"
                  data-toggle="collapse"
                  data-target="navbarText"
                >
                  <span classNameName="text hover-underline-animation">
                    {" "}
                    Home{" "}
                  </span>
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link
                  to="/about"
                  classNameName="nav-link"
                  // href="#"
                  data-toggle="collapse"
                  data-target="navbarText"
                >
                  <span classNameName="text hover-underline-animation">
                    {" "}
                    About Us
                  </span>
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link
                  to="/about"
                  classNameName="nav-link"
                  // href="#"
                  data-toggle="collapse"
                  data-target="navbarText"
                >
                  <span classNameName="text hover-underline-animation">
                    {" "}
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav
        id="navBar"
        className={
          colorChange
            ? "navbar navbar-expand-lg fixed-top navbar-light  colorChange"
            : "navbar navbar-expand-lg fixed-top navbar-dark"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#">
          <img
              src="logo.png"
              width="65"
              height="60"
              classNameName="d-inline-block align-top"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={navColor}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="hover-underline-animation nav-item active">
                <span className="nav-link" href="#">
                  Home 
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  About
                </span>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <span className="nav-link" href="#">
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
