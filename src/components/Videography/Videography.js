import ReactPlayer from "react-player";
import { BsYoutube } from "react-icons/bs";
import "./videography.css";
export default function Videography() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="container pt-4">
        <span className="headingText">Wedding Flims</span>
        <div className="bodyText mt-3 mb-4">
          Here we make a glimpse video of the whole event covering all the
          highlighted moments. Here are some of them!{" "}
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
              marginLeft:"5px",
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
