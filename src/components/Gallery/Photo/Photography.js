import React from "react";
import NavBar from "../../NavBar/NavBar";

export default class Photography extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar active={"gallery"} />
        Photography
      </React.Fragment>
    );
  }
}
