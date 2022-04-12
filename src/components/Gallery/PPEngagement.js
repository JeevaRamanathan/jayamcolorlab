import { PPWE } from "./GalleryData";
import React from "react";
import Lottie from "lottie-react";
import Nodata from "../lotties/nodata.json";
import "./gallery.css";

import { useNavigate } from "react-router-dom";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cldn = new Cloudinary({
  cloud: {
    cloudName: "ddhcbvm5d",
  },
  type: "authenticated",
});


export default function PPEngagement(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ marginTop: "4rem" }}>
        <div className="container pt-4">
          <span className="headingText">{PPWE["title"]} </span>
          <div className="bodyText mt-3 mb-4">{PPWE.body} </div>
          <div className="row">
            {PPWE.images.length > 0 ? (
              PPWE.images.map((data, index) => {
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
                      {/* <img
                        className="galleryImg"
                        height={500}
                        width={700}
                        style={{ objectFit: "cover" }}
                        src={
                          // window.location.origin +
                          // "/" +
                          process.env.PUBLIC_URL +
                          PPWE.images[index].thumbnail
                        }
                        alt="Image"
                      /> */}

                      <AdvancedImage
                        className="galleryImg"
                        height={500}
                        width={700}
                        style={{ objectFit: "cover" }}
                        cldImg={cldn.image(
                          `${PPWE.images[index].thumbnail}`
                        )}
                        plugins={[responsive({steps: [800, 1000, 1400]})]} 
                      />

                      <div className="middle">
                        <div className="imgText">{data.title}</div>
                        <br />
                        <div className="locationText">{data.location}</div>
                      </div>
                      <div
                        className="hiddenText"
                        id="hide"
                        style={{ color: "black", textAlign: "center" }}
                      >
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
