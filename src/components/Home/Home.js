import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Slider from "../Carousel/Slider";
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
        <NavBar />
        <Slider/>
       
        
        <div style={{  height: "100vh" }}></div>
        <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </React.Fragment>
    );
  }
}
