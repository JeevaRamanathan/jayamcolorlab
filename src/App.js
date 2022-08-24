import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services.js";
import Gallery from "./components/Gallery/Gallery.js";
import NavBar from "./components/NavBar/NavBar.js";
import DisplayPhotos from "./components/Gallery/DisplayPhotos.jsx";
import Footer from "./components/Footer/Footer.js";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./App.css";
import {  useState } from "react";
import Videography from "./components/Videography/Videography.js";

function App() {
  const [active, setActive] = useState("home");
  document.addEventListener("contextmenu", (e) => {
    console.log("Sorry! Right Click is Disabled");
    e.preventDefault();
    return false;
  });
  return (
    <>
      <BrowserRouter>
        <a
          href="https://api.whatsapp.com/send?phone=919486491801&text=Hi"
          className="float"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
        <NavBar active={active} />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/gallery/:type" element={<Gallery />} />
          <Route
            exact
            path="/gallery/:type/album"
            element={<DisplayPhotos />}
          />
          <Route exact path="/videography" element={<Videography />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
