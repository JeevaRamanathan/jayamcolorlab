import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Slider from "../Carousel/Slider";
import Services from "../Services/Services";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        {/* <NavBar active={"home"} /> */}
        <Slider />
        <div style={{ height: "88vh" }}></div>
        <div>
          <Services home={"false"} />
        </div>
       
      </React.Fragment>
    );
  }
}
