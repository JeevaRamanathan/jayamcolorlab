import React from "react";

import { ImLocation2 } from "react-icons/im";
import "./contact.css";
import TextField from "@mui/material/TextField";
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Formik, Form } from "formik";

import * as yup from "yup";

import emailjs, { init } from "emailjs-com";
init("ZmZ4zmVufXLUa9Oad");

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: "",
      errorMessage: "",
      sending: false,
    };
  }
  componentDidMount() {
   
      window.scrollTo(0, 0);
  
  }
  render() {
    let formSchema = yup.object().shape({
      name: yup.string().trim().required("This field is required."),
      email: yup.string().email().required("This field is required."),
      message: yup.string().trim().required("This field is required."),
    });

    return (
      <React.Fragment>
        <section>
          <div style={{ height: "5rem" }}></div>

          <div className="container" style={{ marginTop: "5rem" }}>
            <div className="row">
              <div className="col-md-4 mb-4">
                <p className="contactText">Address</p>

                <ImLocation2 size={30} color={"#928D9E"} />
                <span className="mt-3 ml-3 text1">
                  <a
                    style={{ textDecoration: "none", color: "#313131" }}
                    href="https://www.google.com/maps/place/Jayam+Color+Lab+%26+Studio,+Trichy/@10.8321029,78.6905853,17z/data=!3m1!4b1!4m5!3m4!1s0x3baaf5b0ef29ea07:0xd1ce3b55aadd7a6d!8m2!3d10.8321029!4d78.692774"
                    target={"_blank"}
                  >
                    Jayam Color Lab, A-63, St.Joseph Complex Chatiram Bus Stand,
                    Trichy - 02.
                  </a>
                </span>
                <hr />

                <p className="contactText">Phone</p>
                <BsFillTelephonePlusFill
                  className="mr-3"
                  size={30}
                  color={"#928D9E"}
                />

                <span className="mt-2 mr-3 text1">
                  <a
                    style={{ textDecoration: "none", color: "#313131" }}
                    href="tel:+919486491801"
                  >
                    +91 94864 91801
                  </a> /  <a
                    style={{ textDecoration: "none", color: "#313131" }}
                    href="tel:+919443438255"
                  >
                    +91 94434 38255
                  </a>
                  <br />
                  <img
                    src="teleph.png"
                    className="mt-2"
                    height={30}
                    width={30}
                  />

                  <a
                    style={{ textDecoration: "none", color: "#313131" }}
                    href="tel:04312706519"
                  >
                    &nbsp;{"        "} 0431 2706519
                  </a>
                </span>
                <hr />
                <p className="contactText">Email</p>
                <MdEmail className="mr-3 " size={30} color={"#928D9E"} />
                <span className="text1" style={{ marginBottom: "4%" }}>
                  <a
                    style={{ textDecoration: "none", color: "#313131" }}
                    target={"_blank"}
                    href="mailto:studiojayam@gmail.com;jayamcolorlab@gmail.com"
                  >
                    {" "}
                    studiojayam@gmail.com <br />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jayamcolorlab@gmail.com
                  </a>
                </span>
                <hr />
                <span className="mb-2 mt-2 d-flex justify-content-center">
                  <a
                    className="iconHov"
                    href="https://www.facebook.com/jayamcolorlab"
                    target={"_blank"}
                  >
                    <BsFacebook
                      style={{
                        fontSize: "35px",
                        color: "#5f5b69",
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
                        color: "#5f5b69",
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
                        color: "#5f5b69",
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
                        color: "#5f5b69",
                        marginRight: "16px",
                      }}
                    />
                  </a>
                </span>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <p className="contactText2">
                  Feel Free To Connect With Us Any Time
                </p>

                <div className="row container">
                  <div className="col container">
                    <Formik
                      initialValues={{
                        name: "",

                        email: "",
                        message: "",
                      }}
                      enableReinitialize
                      validationSchema={formSchema}
                      onSubmit={(values, { resetForm }) => {
                        this.setState({ sending: true });
                        let details = {
                          name: values.name,
                          from_name: values.email,
                          to_name: "studiojayam@gmail.com",
                          message: values.message,
                          reply_to: "",
                        };
                        emailjs
                          .send(
                            String(process.env.REACT_APP_SERVICE_ID),
                            process.env.REACT_APP_TEMPLATE_ID,
                            details,
                            process.env.USER_ID
                          )
                          .then(
                            (result) => {
                              this.setState({
                                successMessage:
                                  "Thanks! We will connect with you shortly!",
                                errorMessage: "",
                                sending: false,
                              });
                              resetForm({ values: "" });
                            },
                            (error) => {
                              this.setState({
                                errorMessage:
                                   "Sorry for Inconvenience! Something went wrong, Check the details entered or try after sometime otherwise connect with us immediately in Whatsapp!",
                                successMessage: "",
                                sending: false,
                              });
                            }
                          );
                      }}
                    >
                      {(formik) => (
                        <Form>
                          <TextField
                            error={formik.errors.name && formik.touched.name}
                            style={{ borderColor: "white" }}
                            className="m-3"
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            color="warning"
                            id="name"
                            name="name"
                            label="Name"
                            required
                            value={formik.values.name}
                            helperText={
                              formik.errors.name && formik.touched.name
                                ? formik.errors.name
                                : null
                            }
                          />
                          <TextField
                            error={formik.errors.email && formik.touched.email}
                            className="m-3"
                            fullWidth
                            variant="outlined"
                            required
                            color="warning"
                            id="email"
                            name="email"
                            label="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={
                              formik.errors.email && formik.touched.email
                                ? formik.errors.email.charAt(0).toUpperCase() +
                                  formik.errors.email.slice(1)
                                : null
                            }
                          />

                          <TextField
                            error={
                              formik.errors.message && formik.touched.message
                            }
                            className="m-3"
                            fullWidth
                            color="warning"
                            label="Message"
                            id="message"
                            name="message"
                            multiline
                            value={formik.values.message}
                            rows={6}
                            onChange={formik.handleChange}
                            required
                            helperText={
                              formik.errors.message && formik.touched.message
                                ? formik.errors.message
                                : null
                            }
                          />
                          <button type="submit" className="btnColor m-3">
                            {this.state.sending && (
                              <i className="fa fa-circle-o-notch fa-spin">
                                &nbsp;
                              </i>
                            )}{" "}
                            Get In Touch
                          </button>
                          {this.state.successMessage && (
                            <p className="successMessage m-3">
                              {this.state.successMessage}
                            </p>
                          )}
                          {this.state.errorMessage && (
                            <p className="errorMessage text-danger m-3">
                              {this.state.errorMessage}
                            </p>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="260"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Jayam%20Color%20Lab,%20and%20Studio,%20Trichy&t=&z=19&ie=UTF8&iwloc=&output=embed&zoom=33"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
