import React from "react";
import "./Slider.css";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <span
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <AiOutlineRight
          style={{ color: "white", fontSize: "7.5em" }}
          onClick={moveSlide}
        />
      ) : (
        <AiOutlineLeft
          style={{ color: "white", fontSize: "7.5em" }}
          onClick={moveSlide}
        />
      )}
    </span>
  );
}
