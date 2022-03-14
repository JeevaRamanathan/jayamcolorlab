import React from "react";
import NavBar from "../../NavBar/NavBar";

export default class Photography extends React.Component {
  componentDidMount = async () => {
    // const s3 = new AWS.S3();
    // AWS.config.update({
    //   accessKeyId: "AKIAQVO6VNYD4AJRC4WP",
    //   secretAcces    sKey: "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",
    // });
    // const params = {
    //   Bucket: "jayamcolorlab",
    //   Key: `m1/`,
    // };
    // await fetch(
    //   `https://api.cloudinary.com/v1_1/ddhcbvm5d/resources/photography/wedding/w1`,
    //   {
    //     mode: "no-cors",
    //     method: "get",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       Authorization: `Basic ${Buffer.from(
    //         "895754119679594 + : enxgwu8VrtZLg3b_-4_ReU-dfjE"
    //       ).toString("base64")}`,
    //     },
    //   }
    // ).then((r) => r.json());
  };
  render() {
    return (
      <React.Fragment>
        <NavBar active={"gallery"} />
        Photography
        {/* <img src="https://res.cloudinary.com/ddhcbvm5d/image/upload/v1646849357/photography/wedding/w1/JYM_0613_uiamfk.jpg" /> */}
      </React.Fragment>
    );
  }
}
