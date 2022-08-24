import "./gallery.css";
import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgHash from "lightgallery/plugins/hash";
import lgAutoplay from "lightgallery/plugins/autoplay";
import { useNavigate } from "react-router-dom";

import "lightgallery/css/lightgallery-bundle.css";
import "lightgallery/css/lightgallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "ddhcbvm5d",
  },
  type: "authenticated",
});

export default function DisplayPhotos(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  state == null && navigate("/home");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div style={{ marginTop: "0rem" }}>
        <div className="container pt-4">
          <p
            className="galleryHeadingText"
            style={{ color: "white", marginTop: "3rem" }}
          >
            {" "}
            {state.data.title}
          </p>
          <div className="row">
            <div id="gallery" className="container-fluid">
              <LightGallery
                download={false}
                closable={true}
                fullScreen={true}
                plugins={[lgZoom, lgFullscreen, lgHash, lgAutoplay]}
                mode="lg-fade"
              >
                {new Array(state.data.count).fill(0).map((data, index) => {
                  return (
                    <a
                      key={index}
                      src={`${state.data.lgUrl}/img_${index + 1}.jpg`}
                      data-sub-html={`<p style='font-family:Satisfy;font-size:18px;'>${state.data.title}</p>`}
                    >
                      {/* <div className="hoverGalleryImg"> */}
                        <AdvancedImage
                          className="c"
                          cldImg={cld.image(
                            `${state.data.url}${index + 1}.jpg`
                          )}
                          plugins={[responsive({steps: [800, 1000, 1400]})]} 
                        />
                      {/* </div> */}
                    </a>
                  );
                })}
              </LightGallery>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
