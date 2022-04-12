import "./footer.css";

import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img
                src="/jcllogolarge1.png"
                style={{
                  height: "180px",
                  width: "180px",
                  objectFit: "contain",
                }}
                alt="logo"
              />
            </div>
            <div className="footerText">
              {" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.google.com/maps/place/Jayam+Color+Lab+%26+Studio,+Trichy/@10.8321029,78.6905853,17z/data=!3m1!4b1!4m5!3m4!1s0x3baaf5b0ef29ea07:0xd1ce3b55aadd7a6d!8m2!3d10.8321029!4d78.692774"
                target={"_blank"}
              >
                {" "}
                A-63, St.Joseph Complex Chatiram Bus Stand, Trichy - 02 |
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:+919486491801"
              >
                {"  "} +91 94864 91801 |{" "}
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:04312706519"
              >
                0431 2706519{" "}
              </a>
            </div>
            <span className="mb-2 mt-2 d-flex justify-content-center">
              <a
                className="iconHov"
                href="https://www.facebook.com/jayamcolorlab"
                target={"_blank"}
              >
                <BsFacebook
                  style={{
                    fontSize: "35px",
                    color: "white",
                    marginRight: "16px",
                  }}
                />
              </a>
              <a
                className="iconHov"
                href="https://www.youtube.com/jayamcolorlab"
                target={"_blank"}
              >
                <BsYoutube
                  style={{
                    fontSize: "35px",
                    color: "white",
                    marginRight: "16px",
                  }}
                />
              </a>
              <a
                className="iconHov"
                href="https://www.instagram.com/jayamcolorlab"
                target={"_blank"}
              >
                <BsInstagram
                  style={{
                    fontSize: "35px",
                    color: "white",
                    marginRight: "16px",
                  }}
                />
              </a>

              <a
                className="iconHov"
                href="mailto:studiojayam@gmail.com;jayamcolorlab@gmail.com"
                target={"_blank"}
              >
                <SiGmail
                  style={{
                    fontSize: "35px",
                    color: "white",
                    marginRight: "16px",
                  }}
                />
              </a>
            </span>
            <div className="footerText mt-2 ">
              {" "}
              copyright &#169; {new Date().getFullYear()} Jayam Color Lab | With
              ❤️ Designed by Jayam Color Lab
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
