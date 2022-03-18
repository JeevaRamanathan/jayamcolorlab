import React from "react";
import "./gallery.css";
// import Im from "./post4.jpg";
import { wedding } from "./GalleryData";
export default class PPEngagement extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "4rem" }}>
          <div className="container pt-4">
            <span className="headingText">{wedding["title"]} </span>
            <div className="bodyText mt-3 mb-4">{wedding.body} </div>
            <div className="row">
              {wedding.images.map((data, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 mb-3 d-flex ">
                    <div
                      className="card cont img-hover-zoom img-hover-zoom--slowmo mb-3"
                      style={{ border: "none" }}
                    >
                      <img
                        className="galleryImg"
                        src={window.location.origin + "/post4.jpg"}
                        alt="Image"
                      />
                      <div class="middle">
                        <div class="imgText">{data.title}</div>
                        <br />
                        <div class="locationText">{data.location}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
