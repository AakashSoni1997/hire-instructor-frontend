import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ContactUs } from "../../redux/actions/HomePageActions";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid Email format!")
    .required("Email is Required!"),
  message: Yup.string().required("Message is Required !"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contactus = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(ContactUs(values));
  };


  return (
    <>
      <div id="footer-bottom" className="Instructordetail">
        <Header />
        <div className="instru-bg-image">
          <h1>Contact Us</h1>
          <p>
            Home /<span> Contact Us</span>
          </p>
        </div>

        <div className="contact-us">
          <div className="container contact-us-bg">
            <div className="row gx-5">
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="social-details">
                  <div className="social-icon">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25.795"
                        height="17.858"
                        viewBox="0 0 25.795 17.858"
                      >
                        <g
                          id="Icon_ionic-ios-mail"
                          data-name="Icon ionic-ios-mail"
                          transform="translate(-3.375 -7.875)"
                        >
                          <path
                            id="Path_623"
                            data-name="Path 623"
                            d="M28.959,10.352l-6.672,6.8a.12.12,0,0,0,0,.174l4.669,4.973a.8.8,0,0,1,0,1.141.808.808,0,0,1-1.141,0l-4.651-4.954a.127.127,0,0,0-.18,0L19.85,19.634a4.993,4.993,0,0,1-3.559,1.5,5.093,5.093,0,0,1-3.634-1.544l-1.091-1.11a.127.127,0,0,0-.18,0L6.736,23.435a.808.808,0,0,1-1.141,0,.8.8,0,0,1,0-1.141l4.669-4.973a.132.132,0,0,0,0-.174l-6.678-6.8a.122.122,0,0,0-.211.087v13.6a1.99,1.99,0,0,0,1.984,1.984H27.186a1.99,1.99,0,0,0,1.984-1.984v-13.6A.124.124,0,0,0,28.959,10.352Z"
                            transform="translate(0 -0.288)"
                          />
                          <path
                            id="Path_624"
                            data-name="Path 624"
                            d="M16.373,19.228A3.371,3.371,0,0,0,18.8,18.212l9.729-9.9A1.949,1.949,0,0,0,27.3,7.875H5.454a1.936,1.936,0,0,0-1.228.434l9.729,9.9A3.371,3.371,0,0,0,16.373,19.228Z"
                            transform="translate(-0.1)"
                          />
                        </g>
                      </svg>
                    </Link>
                  </div>

                  <div className="social-content">
                    <h1>Email</h1>
                    <h3>hireinstructor@dmail.com</h3>
                  </div>
                </div>

                <div className="social-details">
                  <div className="social-icon">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.25"
                        height="20.25"
                        viewBox="0 0 20.25 20.25"
                      >
                        <path
                          id="Icon_material-call"
                          data-name="Icon material-call"
                          d="M8.573,13.264a17.042,17.042,0,0,0,7.414,7.414L18.461,18.2a1.119,1.119,0,0,1,1.147-.27,12.833,12.833,0,0,0,4.016.641A1.128,1.128,0,0,1,24.75,19.7v3.926a1.128,1.128,0,0,1-1.125,1.125A19.123,19.123,0,0,1,4.5,5.625,1.128,1.128,0,0,1,5.625,4.5H9.563a1.128,1.128,0,0,1,1.125,1.125,12.78,12.78,0,0,0,.641,4.016,1.129,1.129,0,0,1-.281,1.148L8.572,13.264Z"
                          transform="translate(-4.5 -4.5)"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="social-content">
                    <h1>Phone Number</h1>
                    <h3>+01 9876543210</h3>
                  </div>
                </div>

                <div className="social-details">
                  <div className="social-icon">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.146"
                        height="23.065"
                        viewBox="0 0 16.146 23.065"
                      >
                        <path
                          id="Icon_material-location-on"
                          data-name="Icon material-location-on"
                          d="M15.573,3A8.067,8.067,0,0,0,7.5,11.073c0,6.055,8.073,14.993,8.073,14.993s8.073-8.938,8.073-14.993A8.067,8.067,0,0,0,15.573,3Zm0,10.956a2.883,2.883,0,1,1,2.883-2.883A2.884,2.884,0,0,1,15.573,13.956Z"
                          transform="translate(-7.5 -3)"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="social-content">
                    <h1>Location</h1>
                    <h3>123 Business Avenue, NYC</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="getintouch">
                  <h1>Get In Touch</h1>

                  <div className="getintouch-input-field">
                    <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={validationSchema}
                    >
                      {(formik) => (
                        <Form>
                          <div className="row g-5">
                            <div className="col-md-6">
                              <Field
                                type="text"
                                placeholder="Name"
                                name="name"
                                ></Field>
                              <ErrorMessage name="name">
                                {(error) => (
                                  <span className="validation-text">
                                    {error}
                                  </span>
                                )}
                              </ErrorMessage>
                            </div>
                            <div className="col-md-6">
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                              ></Field>
                              <ErrorMessage name="email">
                                {(error) => (
                                  <span className="validation-text">
                                    {error}
                                  </span>
                                )}
                              </ErrorMessage>
                            </div>
                            <div className="col-md-12">
                              <Field
                                as="textarea"
                                id="w3review"
                                rows="5"
                                placeholder="Message"
                                name="message"
                              ></Field>
                              <ErrorMessage name="message">
                                {(error) => (
                                  <span className="validation-text">
                                    {error}
                                  </span>
                                )}
                              </ErrorMessage>
                            </div>
                            <div className="col-md-12 send-massage">
                              <button
                              disabled={!( formik.dirty &&  formik.isValid)}
                                type="submit"
                                className="btn becomaninstructor"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contactus;
