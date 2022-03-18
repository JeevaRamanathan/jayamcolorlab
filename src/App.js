import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services.js";
import Gallery from "./components/Gallery/Gallery.js";
import NavBar from "./components/NavBar/NavBar.js";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <BrowserRouter>
        <NavBar active={active} />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/gallery/:type" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
