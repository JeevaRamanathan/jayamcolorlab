import ReactPlayer from "react-player";
import { BsYoutube } from "react-icons/bs";
import "./videography.css";
import { useEffect } from "react";
export default function Videography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="container pt-4">
        <span className="headingText">Wedding Flims</span>
        <div className="bodyText mt-3 mb-4">
          Wedding videography tells the story of your marriage day which is a
          long lasting memory. Our video cameras are of high definition to
          capture all emotions and happiness and present them in a cinematic way
          with our expertise works. In addition, we also provide glimpse video
          of the whole event covering all the highlighted moments and candid
          shots with feel good music in the background which adds joy to the
          video.
        </div>

        <a
          className="iconHov"
          href="https://www.youtube.com/jayamcolorlab"
          target={"_blank"}
        >
          <p className="d-flex justify-content-center videoText">
            Click here to Find More Videos on our youtube channel!!{" "}
            <BsYoutube
              style={{
                fontSize: "40px",
                color: "red",
                marginLeft: "5px",
              }}
            />{" "}
          </p>
        </a>

        <div className="videoText d-flex justify-content-center">
          Drone Videography
        </div>

        <ReactPlayer
          width="100%"
          height="100%"
          url="https://fb.watch/bWRr2PugBh/"
          controls={true}
        />

        <div className="videoText mt-5  d-flex justify-content-center">
          Chettinad Wedding | Aishwarya & Nachiappa{" "}
        </div>
        <ReactPlayer
          className="mb-4"
          width={"100%"}
          url="https://www.youtube.com/watch?v=vY4pEORV7tM"
          controls={true}
        />
      </div>
    </div>
  );
}
