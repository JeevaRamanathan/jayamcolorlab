import React from "react";
import "./about.css";
import FadeInSection from "../../FadeInSection";
import Lottie from "lottie-react";
import animationData from "../lotties/studio";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <img className="d" src="cam.jpg" />
        <FadeInSection>
          <div style={{ height: "0rem" }}> </div>
          <div className="container">
            <div className="row content">
              <div className="col-sm p-3">
                <h2 className="underlinetext1" style={{ fontSize: "29px" }}>
                  Welcome to Jayam Color Lab & Studio
                </h2>

                <div className="abouttext pt-3">
                  Jayam Color Lab & Studio was established in the year of 2004
                  in Trichy and owned by Mr.Muthu Ram & Bhuvaneswari. We are
                  experienced in the photography field for more than 18 years.
                  We are specialized in wedding photography, studio photography,
                  designing.
                  <br />
                  <br />
                  Life brings tears, smiles, and memories. The tears dry, the
                  smiles fade, but the memories last forever. We are here to
                  capture all your amazing live moments and make it memorable
                  through our photography and videography. It won't stop here on
                  covering the events, we further polish it with editor's work
                  and the final product will be attractive and in a professional
                  level in a short period of time. We capture you the moment
                  with best cameras and those photos will cherish your memory
                  life long.
                  <br />
                  <br />
                  We respect your thoughts and we do give our best services. We
                  undertake all kinds of events like wedding, engagement, baby
                  shoot, birthday, corporate meetings and all other events. We
                  also do album editing, frame, designing photos, flex editing,
                  collage work and so on.
                  <hr />
                  <center>
                    <b>
                      We are more specilized in chettinad wedding photography.
                    </b>
                  </center>{" "}
                  <hr />
                </div>
              </div>
              <div className="col-lg">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
          </div>
        </FadeInSection>
        <div className="container mb-5">
          <FadeInSection>
            <div className="row">
              <div className="col mb-4 d-flex justify-content-center">
                <div className="aboutcard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top rod"
                    src="style.jpg"
                    alt="Card image cap"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="underlinetextabout mt-2 d-flex justify-content-center">
                    STYLE
                  </div>
                  <div className="card-body">
                    <p className="card-text homeBox2">
                      We follow our unique photography style in the current
                      trend. Anyone can capture the photo, but only
                      professionals and experienced can make best angles and
                      shots. In this context, we are experienced in capturing
                      the right moments in right angles and makes the outcome
                      perfect :)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4 d-flex justify-content-center">
                {" "}
                <div className="aboutcard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top rod"
                    src="equipments.jpg"
                    alt="Card image cap"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="underlinetextabout mt-2 d-flex justify-content-center">
                    Equipments
                  </div>
                  <div className="card-body">
                    <p className="card-text homeBox2">
                      We use the modern camera equipments with tripod, light
                      stand, zooming lens, studio strobes and umbrellas and all
                      the necessary equipments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4 d-flex justify-content-center">
                <div className="aboutcard" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top rod"
                    src="budget1.jpg"
                    alt="Card image cap"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="underlinetextabout mt-2 d-flex justify-content-center">
                    Budget
                  </div>
                  <div className="card-body">
                    <p className="card-text homeBox2">
                      When it comes to budget, we do it at a more affordable
                      cost depending upon the type of package that suits you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </React.Fragment>
    );
  }
}
