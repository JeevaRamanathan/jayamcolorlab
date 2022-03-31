import { Album as AB } from "./GalleryData";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Nodata from "../lotties/nodata.json";
import "./gallery.css";

import { useNavigate } from "react-router-dom";

export default function Album(props) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div style={{ marginTop: "4rem" }}>
        <div className="container pt-4">
          <span className="headingText">{AB["title"]} </span>
          {/* <div className="bodyText mt-3 mb-4">{AB.body} </div> */}
          <div className="row">
            {AB.images.length > 0 ? (
              AB.images.map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/gallery/${props.type}/album`, {
                        state: {
                          data: data,
                        },
                      })
                    }
                    className="col-lg-6 col-md-6 mb-3 d-flex "
                  >
                    <div
                      className="card cont img-hover-zoom img-hover-zoom--slowmo mb-3"
                      style={{ border: "none" }}
                    >
                      <img
                        className="galleryImg"
                        height={500}
                        width={700}
                        style={{ objectFit: "cover" }}
                        src={
                          // window.location.origin +
                          // "/" +
                          process.env.PUBLIC_URL + AB.images[index].thumbnail
                        }
                        alt="Image"
                      />
                      <div class="middle">
                        <div class="imgText">{data.title}</div>
                        <br />
                        <div class="locationText">{data.location}</div>
                      </div>
                      <div
                        class="hiddenText"
                        id="hide"
                        style={{ color: "black", textAlign: "center" }}
                      >
                        {data.title}
                        {data.title} / {data.location}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="container text-center mt-5 nodata">
                <Lottie
                  style={{
                    height: 290,
                    width: "300",
                  }}
                  animationData={Nodata}
                  loop={true}
                />
                Gallery Will Be Updated Soon!
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}