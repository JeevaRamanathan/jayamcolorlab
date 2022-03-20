import "./gallery.css";
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgHash from "lightgallery/plugins/hash";
import lgAutoplay from "lightgallery/plugins/autoplay";

import "lightgallery/css/lightgallery-bundle.css";
import "lightgallery/css/lightgallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// interface AppProps {}
// interface AppState {
//   // settings: LightGallerySettings;
// }

export default function DisplayPhotos(props) {
  const { state } = useLocation();
  console.log(state.data);
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div style={{ marginTop: "0rem" }}>
        <div className="container pt-4">
          <p
            className="galleryHeadingText"
            style={{ color: "white", marginTop: "3rem" }}
          >
            
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
                      src={`${state.data.url}/img(${index + 1}).jpg`}
                      // data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
                      data-sub-html={`<p style='font-family:Satisfy;font-size:18px;'>${state.data.title}</p>`}
                    >
                      
                      <div className="hoverGalleryImg">
                        
                        <img
                          className="img-responsive"
                          alt={ state.data.title+" Image"}
                          src={`${state.data.url}/img(${index + 1}).jpg`}
                          // src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                        />
                         
                      </div>
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
