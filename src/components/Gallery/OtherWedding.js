import React from "react";
import "./gallery.css";
import { OtherWedding as OW } from "./GalleryData";
import Lottie from "lottie-react";
import Nodata from "../lotties/nodata.json";

import { useNavigate } from "react-router-dom";
export default function OtherWedding(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ marginTop: "4rem" }}>
        <div className="container pt-4">
          <span className="headingText">{OW["title"]} </span>
          <div className="bodyText mt-3 mb-4">{OW.body} </div>
          <div className="row">
            {OW.images.length > 0 ? (
              OW.images.map((data, index) => {
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
                          window.location.origin +
                          "/" +
                          OW.images[index].thumbnail
                        }
                        alt="Image"
                      />
                      <div class="middle">
                        <div class="imgText">{data.title}</div>
                        <br />
                        <div class="locationText">{data.location}</div>
                      </div>
                      <div
                        class="locationText"
                        id="hide"
                        style={{ color: "black", textAlign: "center" }}
                      >
                        {data.title}
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
