import React from "react";
import pagenotfound from "../lotties/pagenotfound.json";
import Lottie from "lottie-react";
import {Link } from 'react-router-dom'
export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <React.Fragment>
          <div className="" style={{ marginTop: "7rem" }}>
            <Lottie
              style={{
                height: 600,
                width: "300",
              }}
              animationData={pagenotfound}
              loop={true}
            />
           
            <div className="d-flex justify-content-center "> <Link to="/">
              <button className="btnColor">Back To Home</button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}
