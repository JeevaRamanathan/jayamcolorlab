import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="row mt-5">About console.warn();</div>
        <br />
        <br />
        <br />
        we
        <br />
      </React.Fragment>
    );
  }
}
