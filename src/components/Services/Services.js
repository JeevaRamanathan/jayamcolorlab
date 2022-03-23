import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import camera from "../lotties/camera";
import movieCamera from "../lotties/movie-camera";
import editor from "../lotties/editor";
import frame from "../lotties/frame";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <React.Fragment>
          {/* {this.props.home == "false" ? null : <NavBar active={"services"} />} */}

          <div className="container contain ">
            {" "}
            <h4 className="welcometext">What We Do</h4>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                    <Lottie
                      animationData={camera}
                      loop={true}
                      className="card-img-top"
                      style={{
                        height: 230,
                      }}
                    />
                    <h6 className="underlinetext">PHOTOGRAPHY</h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4 ">
                        We have the expertise in all kinds of photography
                        includng candid photography. We take photoshoots for all
                        kinds of events like Wedding,Pre/Post wedding,
                        Maternity, Born Baby Shoot, Birthday, Reception &
                        Engagement, Puberty, Corporate Events, Family Events and
                        So on...
                      </p>
                      {/* <Link className="mt-auto" to="/gallery/photography">
                        <span
                          className="btn  mt-auto viewbtn align-self-center"
                          style={{
                            color: "whitesmoke",
                          }}
                        >
                          View Gallery
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className=" card homeBox bord">
                    <Lottie
                      animationData={movieCamera}
                      loop={true}
                      className="card-img-top"
                      style={{
                        height: 230,
                      }}
                    />
                    <h6 className="underlinetext">
                      VIDEOGRAPHY & WEDDING FLIMS
                    </h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                        A event doesn't end just with a photoshoot, videos
                        brings us the moment live before our eyes. We do also
                        capture videos for all the same events in a professional
                        way.
                        <br />
                        <br />
                        We deliver you a short cinematic kind of wedding video
                        with the candid shots and a music that makes you the
                        event memorable and brings you joy.
                      </p>
                      {/* <div
                        className="btn viewbtn mt-auto align-self-center"
                        style={{
                         
                          color: "whitesmoke",
                        }}
                      >
                        View Gallery
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                    <Lottie
                      animationData={editor}
                      loop={true}
                      className="card-img-top"
                      style={{
                        height: 230,
                      }}
                    />

                    <h6 className="underlinetext"> STUDIO / DESIGNING </h6>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                        There is no limit to the effects that can be brought
                        about in a simple photograph. You can make any event
                        look and feel more vibrant, fun and appealing with photo
                        editing. We edit those captures and present you the
                        final Album which will be with you forever. <br />
                        <br /> Also we fix the damaged old photos and bring
                        color to b/w photographs, flex editing, collage and
                        etc., in our studio.
                      </p>
                      {/* <div
                        className="btn viewbtn mt-auto align-self-center"
                        style={{
                          // backgroundColor: "#ff7000",
                          color: "whitesmoke",
                        }}
                      >
                        View Gallery
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-3 d-flex ">
                  <div className="card bord homeBox">
                    <Lottie
                      animationData={frame}
                      loop={true}
                      className="card-img-top"
                      style={{
                        height: 230,
                      }}
                    />

                    <h6 className="underlinetext"> FRAMES & GIFTS </h6>

                    <div className="card-body d-flex flex-column">
                      <p className="card-text mb-4">
                        Framing some important memories in wall makes that
                        moment memorable. We provide many gift items that you
                        can choose present for your loved ones.
                        <br />
                        <br />
                        We do services all around the India and just whatsapp or
                        email us, we will deliver the frame and gift items at
                        your doorstep.
                      </p>
                      {/* <div
                        className="btn viewbtn mt-auto align-self-center"
                        style={{
                          // backgroundColor: "#ff7000",
                          color: "whitesmoke",
                        }}
                      >
                        View Gallery
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}
