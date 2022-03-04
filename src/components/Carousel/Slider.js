import React, { Component, useEffect, useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import NavBar from "../NavBar/NavBar";
import { Nav } from "../NavBar/NavbarStyles";
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  //   setInterval(() => {
  //       let ind = slideIndex + 1;
  //       if (slideIndex === dataSlider.length) {
  //         setSlideIndex(1);
  //       } else {
  //         setSlideIndex(ind);
  //       }
  //     }, 10000);

  return (
    <div>

      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`forest1.jpg`} />
          </div>
        );
      })}
      {/* <BtnSlider moveSlide={nextSlide} direction={"next"} /> */}
      {/* <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
      <p className="slider-text">
        fbdf efb Node.js is the prerequisite for creating the react appS
        codde.js is the prerequisite for creating the react app and VS code is
        for writing your code. e is for writing your code.{" "}
      </p>

      <div className="container-dots" style={{ cursor: "pointer" }}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
   
    </div>

  );
}
