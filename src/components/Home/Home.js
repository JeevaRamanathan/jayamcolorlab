import React from "react";
import "./Home.css";
import Slider from "../Carousel/Slider";
import Services from "../Services/Services";
import { FaGifts } from "react-icons/fa";
import CountUp from "react-countup";
import FadeInSection from "../../FadeInSection";
import VisibilitySensor from "react-visibility-sensor";
import { MdRestore, MdPhotoAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
};

export default function Home() {
  // render() {
  return (
    <React.Fragment>
      {/* <NavBar active={"home"} /> */}
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
              <br />
              <br />
              Weddings are Once in a Lifetime Event, Make them More Memorable
              with Our Photography!{" "}
              <p className="mt-2 homeBox2">
                A wedding happens only once in a lifetime. It’s an historic day
                in the lives of the bride and groom, which is why we are so
                passionate and dedicated to create an unforgettable experience
                for you with high level professional equipments. Choosing the
                best Wedding Function photographer is most important.Wedding
                photography is important because it will capture your day, it
                will capture your memories, it will tell a story, and not just
                any story, it will tell a beautiful story of your special day, a
                day you will never forget. A story that you can show friends and
                family, your kids, and grandchildren, something you will have
                and can treasure for ever. <br />
                So don't wait until your last minute of wedding...Book Us Now!
              </p>
              <br />
              {/* <Link to="/contact" style={{textDecoration:"none", border:'none'}} className="btn btn-warning">
                Book Now!
              </Link> */}
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
                    {/* Photographs forever can take a torn or faded and transform */}
                    {/* it into a beautifully-restored photo, suitable for framing. */}
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
                  <h4 className="homeText2">Personalized Photo Gitfs</h4>
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
                // className="homeH ov"
                src="homeimg.png"
                style={{ height: "120%", width: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
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
                {/* <CountUp end={10000} duration={1}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp> */}
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
