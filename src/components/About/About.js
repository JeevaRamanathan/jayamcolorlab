import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./about.css";
import Lottie from "lottie-react"; 
import animationData from "../lotties/studio";
import NavBar from "../NavBar/NavBar";
 
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  componentDidMount() 
  {
  }

  render() {
    return (
      <React.Fragment>
        {/* <NavBar active={"about"} /> */}
        <img  className="d" src='cam.jpg' />
        <div style={{ height: "0rem" }}> </div>
        <div className="container">
          <div className="row content">
            <div className="col-sm p-3">
              <h2 className="underlinetext">
                Welcome to Jayam Color Lab & Studio
              </h2>
              <p className="abouttext">
                {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                Jayam Color Lab & Studio was established in the year of 2006 in Trichy and owned by
                Mr.Muthu Ram who is experienced in the photography field for
                more than 16 years. We are specialized in events photography and
                studio phography, designing.
                <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                Life brings tears, smiles, and memories. The tears dry, the
                smiles fade, but the memories last forever.We are here to
                capture all your amazing live moments and make it memorable
                through our photography and vidography. It won't stop here on
                covering the events, we further polish it with editor's work and
                the final product will be attractive and in a professional level
                in a short period of time. We capture you the moment with best
                cameras and those photos will cherish your memory life long.
                <br />
                <br />
                {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                We respect our client thoughts and we do give our best services.
                We undertake all kinds of events like wedding, engagement, baby
                shoot, birthday, coorporate meetings and all other events.And we
                are more specilized in chettinad wedding.
                <br />
                <br />
                We also do album editing, designing photos, flex editing, collage work and so on.
              </p>

            </div>
            <div className="col-lg">
        
            <Lottie animationData={animationData} loop={true} />
             
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
