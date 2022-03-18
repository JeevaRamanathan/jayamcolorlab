import React from "react";

import { ImLocation2 } from "react-icons/im";
import "./contact.css";
import TextField from "@mui/material/TextField";
import NavBar from "../NavBar/NavBar";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import mail from "../lotties/mail";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { Formik, Form } from "formik";
import * as yup from "yup";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: "",
    };
  }
  componentDidMount() {}

  render() {
    let formSchema = yup.object().shape({
      name: yup.string().trim().required("This field is required."),
      email: yup.string().email().required("This field is required."),
      message: yup.string().trim().required("This field is required."),
    });
    return (
      <React.Fragment>
        {/* <NavBar active={"contact"} /> */}
        {/* <img className="d" src="cam2.jpg" /> */}
        <section>
          <div style={{ height: "5rem" }}></div>

          <div className="container" style={{ marginTop: "5rem" }}>
            <div className="row">
              <div className="col-md-4 mb-4">
                <p className="contactText">Address</p>

                <ImLocation2 size={30} color={"#928D9E"} />
                <span className="mt-3 ml-3 text1">
                  Jayam Color Lab, A-63, St.Joseph Complex Chatiram Bus Stand,
                  Trichy - 02.
                </span>
                <hr />

                <p className="contactText">Phone</p>
                <BsFillTelephonePlusFill
                  className="mr-3"
                  size={30}
                  color={"#928D9E"}
                />
                <span className="mt-3 mr-3 text1">+91 94864 91801</span>

                <hr />
                <p className="contactText">Email</p>
                <MdEmail className="mr-3 " size={30} color={"#928D9E"} />
                <span className="text1" style={{ marginBottom: "4%" }}>
                  studiojayam@gmail.com
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
                        console.log(values);
                        resetForm({ values: "" });
                        this.setState({
                          successMessage:
                            "Thanks! We will connect with you shortly!",
                        });
                      }}
                    >
                      {/* {({formik, errors, handleChange, touched }) => ( */}
                      {(formik) => (
                        <Form>
                          {console.log(formik)}
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
                            Get In Touch
                          </button>
                          {this.state.successMessage && (
                            <p className="successMessage m-3">
                              {this.state.successMessage}
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
              src="https://maps.google.com/maps?q=jayam%20color%20lab,%20trichy&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
