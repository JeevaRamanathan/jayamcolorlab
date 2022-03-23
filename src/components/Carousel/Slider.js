import React, { Component, useEffect, useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [image, setImage] = useState("");

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

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Logs every minute");
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [slideIndex]);

  return (
    <div>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {/* {w(`post${index + 1}.jpg`)} */}
            <img id="img" src={`post${index + 1}.jpg`} />
            {/* <p className="homeImgText">Wedding Photgraphy</p> */}
          </div>
        );
      })}
      {/* post${index + 1} */}
      {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
      <p className="slider-text"></p>

      <div className="container-dots" style={{ cursor: "pointer" }}>
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
