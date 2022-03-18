import React from "react";

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <React.Fragment>
          {/* {this.props.home == "false" ? null : <NavBar active={"services"} />} */}

      NOT FOUND
        </React.Fragment>
      </>
    );
  }
}
