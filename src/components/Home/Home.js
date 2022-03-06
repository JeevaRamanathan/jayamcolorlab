import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Slider from "../Carousel/Slider";
import Lottie from "lottie-react"; 
import camera from "../lotties/camera";
import movieCamera from "../lotties/movie-camera";
import editor from "../lotties/editor";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <NavBar active={"home"} />
        <Slider />

        <div style={{ height: "100vh" }}></div>
        <div className="container mt-5">
          {" "}
          <h4 className="welcometext">Our Services</h4>
          <div className="row d-flex justify-content-center justify-content-center">
            
            <div className="col-sm"><Lottie animationData={camera} loop={true}  style={{
              width: 230,
              height: 230
              
            }}/></div>
            <div className="col-sm"><Lottie animationData={movieCamera} style={{
              width: 230,
              height: 230
              
            }} loop={true} /></div>
            <div className="col-sm"><Lottie animationData={editor} style={{
              width: 230,
              height: 230
              
            }} loop={true} /></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
