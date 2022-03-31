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

import { AdvancedImage, accessibility, lazyload, responsive } from '@cloudinary/react';
import {Cloudinary,Transformation} from "@cloudinary/url-gen";
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
const publicKey = "public_3EVAc7JS5PCvJTcn0733hUBthkA=";
const urlEndpoint = "https://ik.imagekit.io/exn5diy1pdh/";
const authenticationEndpoint = "http://localhost:3001/auth";


const cld = new Cloudinary({
  cloud: {
    cloudName: 'ddhcbvm5d'
  },
  type: "authenticated"
});
 
 
// const myImage=cld.image("resources/search/JYM")
export default function DisplayPhotos(props) {
  const { state } = useLocation();
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div style={{ marginTop: "0rem" }}>
        <div className="container pt-4">
          <p
            className="galleryHeadingText"
            style={{ color: "white", marginTop: "3rem" }}
          > {state.data.title}
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
                      // src={`${state.data.url}/img(${index + 1}).jpg`}
                      src={`${state.data.lgUrl}/img_${index+1}.jpg`}
                      // src={cld.image(`v1646849357/photography/wedding/w1/img_${index+1}.jpg`)}
                      // data-src={cld.image(`v1646849357/photography/wedding/w1/img_${index+1}.jpg`)}
                      data-sub-html={`<p style='font-family:Satisfy;font-size:18px;'>${state.data.title}</p>`}
                    >
                      
                      <div className="hoverGalleryImg">
                        
                        {/* <img
                          className="img-responsive"
                          alt={ state.data.title+" Image"}
                          src={`${state.data.url}/img(${index + 1}).jpg`}
                          />
                          */}
                           <AdvancedImage className='c' cldImg={cld.image(`${state.data.url}${index+1}.jpg`)} plugins={[responsive({steps: 200})]}/>

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
