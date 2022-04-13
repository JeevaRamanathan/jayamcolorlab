import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../Carousel/Slider";
import Services from "../Services/Services";
import { FaGifts } from "react-icons/fa";
import CountUp from "react-countup";
import FadeInSection from "../../FadeInSection";
import VisibilitySensor from "react-visibility-sensor";
import { MdRestore, MdPhotoAlbum } from "react-icons/md";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <React.Fragment>
      <Slider />
      <div style={{ height: "91.8vh" }}></div>
      <FadeInSection>
        <Services home={"false"} />
      </FadeInSection>
      <div className="homeImg">
        <FadeInSection>
          <div className="container">
            <div className="homeText">
              {" "}
              <br />
              <br />
              Why Wedding Photography?
              <br />
              <br />
              Weddings are Once in a Lifetime Event, Make them More Memorable
              with Our Photography!{" "}
              <p className="mt-2 homeBox2">
                We are professional photographers who capture every part of your
                wedding day, parts of which you will miss due to greeting
                guests, touching up makeup, or just checking everything is
                running smoothly. We deliver professional wedding
                photography-means you will have high quality images to display
                in your home, as well as personalized gifts for friends and
                family. We have plenty of experience, and will be able to get
                the best images in the simplest, easiest way possible. This
                takes the stress off your shoulders. If budget is your main
                concern, don't worry, we do it at a more affordable cost
                depending upon the type of package that suits you!
              </p>
              <br />
              <p>So don't wait until last minute of wedding...Book Us Now!</p>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=919486491801&text=Hi, I would like to enquiry about the wedding photography with you!"
                target="_blank"
                style={{ textDecoration: "none", border: "none" }}
                className="btn btn-warning"
              >
                Book Now!
              </a>
              <br />
              <br />
              <br />
            </div>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="container mt-4 ">
          <div className="row">
            <div className="col-sm">
              <div className="row mt-5">
                <div className="col-auto">
                  <MdRestore
                    style={{
                      fontSize: "55px",
                      color: "ff6a00",
                      margin: 0,
                      padding: 0,
                    }}
                    className="mb-1"
                  ></MdRestore>
                </div>
                <div className="col">
                  <h4 className="homeText2">Restoration of Old Images</h4>
                  <p className="card-text homeText3">
                    We take your torn or old faded photograhs and transform them
                    into a beautifully restored photo. We preserve your original
                    images by eliminating scratches, folds, tears and fading and
                    enlarge it in suitable sizes with our edit.{" "}
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-auto">
                  <FaGifts
                    style={{
                      fontSize: "55px",
                      color: "ff6a00",
                      margin: 0,
                      padding: 0,
                    }}
                    className="mb-1"
                  ></FaGifts>
                </div>
                <div className="col">
                  <h4 className="homeText2">Personalized Photo Gifts</h4>
                  <p className="card-text homeText3">
                    Make any occasion special with a personalized gift to your
                    loved ones. You may wonder what gifts can be made from
                    photos, we bring you the personalized gift items like
                    Digitlized photo frame, Photo calendar, Personalised photo
                    Key ring, Mobile case printing, Photo locket, Photo magnets,
                    Photo mug, Photo T-Shirt and etc.., Just whatsapp us your
                    order and we will deliver it at your door step.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-auto">
                  <MdPhotoAlbum
                    style={{
                      fontSize: "55px",
                      color: "ff6a00",
                      margin: 0,
                      padding: 0,
                    }}
                    className="mb-1"
                  ></MdPhotoAlbum>
                </div>
                <div className="col">
                  <h4 className="homeText2">Album Designing</h4>
                  <p className="card-text homeText3">
                    Photo albums let you preserve important memories. We provide
                    you a professionally designed wedding album with our expert
                    designers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <img
                src="homeimg.png"
                style={{ height: "120%", width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
          <br />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="container mt-5">
          <div className="row">
            <div className="col d-flex justify-content-center">
              {/* <Lottie
                style={{
                  height: 230,
                }}
                animationData={animationData}
                loop={true}
              /> */}
              <img
                src="marraigehome.png"
                style={{
                  height: 240,
                  marginRight: "30px",
                }}
              />
            </div>
            <div className="col-sm">
              <div className="row mt-5">
                <div className="col-auto">
                  <img
                    src="chettinadspcl.png"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="col">
                  <h4 className="homeText2">
                    We are more Specialized in Chettinad Wedding!
                  </h4>
                  <p className="card-text homeText3">
                    We are more experienced in handling chettinad wedding, in
                    the surrounding of Karaikudi region knowing the rituals and
                    capturing them in the Authentic Chettinad Style!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </FadeInSection>

      <div className="countImg">
        <FadeInSection>
          <div className="container">
            <div className="homeText">
              {" "}
              <br />
              <br />
              <div
                className="mt-2"
                style={{
                  fontSize: "14px",
                  opacity: ".8",
                  fontFamily: "Open Sans",
                }}
              >
                <div className="row">
                  <div className="col-sm p-4 homeText">
                    <CountUp end={18} duration={1}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                    <br />
                    Years In Industry{""}
                  </div>
                  <div className="col-sm p-4  homeText">
                    <CountUp end={1000000} duration={1}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                    <br />
                    Shots Clicked
                  </div>
                  <div className="col-sm p-4  homeText">
                    <CountUp end={1000} duration={1}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                    <br />
                    Events Done
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </FadeInSection>
      </div>
    </React.Fragment>
  );
  // }
}
