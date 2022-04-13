import React from "react";
import pagenotfound from "../lotties/pagenotfound.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
export default class PageNotFound extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <React.Fragment>
          <div className="" style={{ marginTop: "7rem" }}>
            <Lottie
              style={{
                height: 530,
                width: "400",
              }}
              animationData={pagenotfound}
              loop={true}
            />

            <div className="d-flex justify-content-center mb-3 ">
              {" "}
              <Link to="/">
                <button className="btnColor">Back To Home</button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}
