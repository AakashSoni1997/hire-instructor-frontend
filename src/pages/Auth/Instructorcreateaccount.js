import React, { useEffect, useState } from "react";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";
import Numberinput from "../../components/Numberinput/Numberinput";
import "react-phone-number-input/style.css";
import moment from "moment";
import {
  InstructorRegister,
  OtpVerification,
} from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { FieldText } from "../../components/InputText/InputText";
import { Regex } from "../../Utils/Regex";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import { GetCountryList } from "../../redux/actions/HomePageActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./../../components/Buttons/Buttons";
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";

const Instructorcreateaccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState();
  const [counter, setCounter] = useState(120);
  const [otpError, setOtpError] = useState(false);
  const [signUpClick, setSignUpClick] = useState(false);
  const [emailAddress, setEmailAddress] = useState();

  const isLoading = useSelector((state) => state.auth.loading);
  const signupSuccessSelector = useSelector(
    (state) => state.auth.user_register
  );
  const countryList = useSelector((state) => state?.home?.get_country_list);
  const OTPSuccessSelector = useSelector(
    (state) => state.auth.otp_verification
  );
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const registerSuccess = useSelector(
    (state) => state?.auth?.user_register?.status_code === 200
  );

  const SignupValidationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required!"),
    last_name: Yup.string().required("Last name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    phone_number: Yup.string()
      .min(13, "Number must be at most 10 characters")
      .max(13, "Number must be at most 10 characters")
      .matches(Regex.MOBILE_NUMBER_REGEX, "Phone number is not valid")
      .required("Phone number is required!"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        Regex.password,
        "1 uppercase 1 lowercase 1 special character required!"
      ),
    dob: Yup.string().required("DOB is Required!"),
    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    // Confirm password should be same !
    country_id: Yup.string().required("Please select country!"),
    term_condition: Yup.string().required(
      "Please Accept Terms & Conditions and Privacy Policy!"
    ),
  });

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (show) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setCounter(120);
    }
  }, [counter, show]);

  useEffect(() => {
    dispatch(GetCountryList());
  }, [dispatch]);

  const handleSignupSubmit = (value) => {
    let formData = new FormData();
    formData.append("first_name", value.first_name);
    formData.append("last_name", value.last_name);
    formData.append("phone_number", value.phone_number);
    formData.append("email", value.email);
    formData.append("password", value.password);
    formData.append("password_confirmation", value.password_confirmation);
    formData.append("dob", moment(value.dob).format("DD/MM/YY"));
    formData.append("country_id", value.country_id);
    formData.append("term_condition", value.term_condition);
    formData.append("role", 2);
    dispatch(InstructorRegister(formData));
    setEmailAddress(value.email);
    setSignUpClick(true);
  };

  useEffect(() => {
    if (
      signupSuccessSelector &&
      Object.keys(signupSuccessSelector)?.length > 0 &&
      signUpClick
    ) {
      if (
        signupSuccessSelector.status &&
        signupSuccessSelector.data.is_verify
      ) {
        setShow(true);
        setSignUpClick(false);
      }
    }
  }, [signupSuccessSelector]);

  const handleClose = () => {
    setShow(false);
    setCounter(120);
  };

  const handleOtp = () => {
    if (otp.length < 4) {
      setOtpError(true);
    }
    if (registerSuccess) {
      let formData = new FormData();
      formData.append("email", emailAddress);
      formData.append("otp", otp);
      dispatch(OtpVerification(formData));
    }
  };

  useEffect(() => {
    if (Object.keys(OTPSuccessSelector).length > 0 && show) {
      if (OTPSuccessSelector.data.status) {
        setShow(false);
        navigate("/instructorlogin");
      }
    }
  }, [OTPSuccessSelector]);

  return (
    <>
      <div className="login-main-section createaccount-page instructorcreate-sec">
        <div className="login-main-section1">
          <div className="login-account">
            <div className="position-relative login-top-content">
              <h1>Welcome Back</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum egestas purus a erat mattis.
              </p>
              <div className="view-courses">
                <Link className="btn becomaninstructor" to="/instructorlogin">
                  Log In
                </Link>
              </div>
            </div>
          </div>
          <div className="crose-button">
            <Link className="btn becomaninstructor" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.484"
                false
                height="20.479"
                viewBox="0 0 20.484 20.479"
              >
                <path
                  id="Icon_ionic-ios-close"
                  data-name="Icon ionic-ios-close"
                  d="M23.954,21.528l7.316-7.316a1.714,1.714,0,0,0-2.424-2.424L21.53,19.1l-7.316-7.316a1.714,1.714,0,1,0-2.424,2.424l7.316,7.316-7.316,7.316a1.714,1.714,0,0,0,2.424,2.424l7.316-7.316,7.316,7.316a1.714,1.714,0,0,0,2.424-2.424Z"
                  transform="translate(-11.285 -11.289)"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="login-main-section2">
          <div className="position-relative login-details-sec">
            <h1>Create Account</h1>
            <p>Enter your details to proceed</p>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                password: "",
                password_confirmation: "",
                dob: new Date(),
                country_id: "",
                term_condition: "",
              }}
              validationSchema={SignupValidationSchema}
              onSubmit={handleSignupSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="accountfieldmain">
                      <div className="accountfield">
                        <div className="accountfield-first">
                          <FieldText
                            name="first_name"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="accountfield-first">
                          <FieldText
                            name="last_name"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="accountfield">
                        <div className="accountfield-first">
                          <Field name="phone_number">
                            {({ form, field }) => {
                              return (
                                <Numberinput
                                  GetValue={(data) =>
                                    form.setFieldValue(
                                      field.name,
                                      data.phone_number
                                    )
                                  }
                                  name={field.name}
                                />
                              );
                            }}
                          </Field>
                          <ErrorMessage
                            name="phone_number"
                            component={TextErrorMsg}
                          />
                        </div>
                        <div className="accountfield-first">
                          <FieldText
                            name="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="accountfield">
                        <div className="accountfield-first">
                          <FieldText
                            name="password"
                            type="password"
                            showHide={true}
                            placeholder="Password"
                          />
                        </div>
                        <div className="accountfield-first">
                          <FieldText
                            name="password_confirmation"
                            type="password"
                            showHide={true}
                            placeholder="Re-Enter Password"
                          />
                        </div>
                      </div>

                      <div className="accountfield">
                        <div className="accountfield-first date-picker-sec">
                          <Field name="dob">
                            {({ form, field }) => {
                              return (
                                <DatePicker
                                  name={field.name}
                                  onChange={(e) =>
                                    form.setFieldValue(field.name, e)
                                  }
                                  // value={new Date()}
                                  yearPlaceholder="yyyy"
                                  monthPlaceholder="mm"
                                  dayPlaceholder="dd"
                                />
                              );
                            }}
                          </Field>
                          <ErrorMessage name="dob" component={TextErrorMsg} />
                        </div>

                        <div className="accountfield-first dropdown-select">
                          <div className="App">
                            <Field
                              as="select"
                              name="country_id"
                              className="select-control w-100"
                            >
                              <option value=""> Select Country </option>
                              {countryList.map((value, index) => {
                                return (
                                  <option value={value.id} key={index}>
                                    {" "}
                                    {value.name}{" "}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="country_id"
                              component={TextErrorMsg}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="accountfield">
                        <div className="check-box-create">
                          <Field name="term_condition">
                            {({ form, field }) => {
                              return (
                                <React.Fragment>
                                  <input
                                    name={field.name}
                                    type="checkbox"
                                    id={field.name}
                                    onChange={(e) =>
                                      form.setFieldValue(
                                        field.name,
                                        e.target.value === "off" ? 0 : 1
                                      )
                                    }
                                  ></input>
                                  <label htmlFor={field.name}>
                                    Agree to the{" "}
                                    <a target="_blank" href="/termsconditions">
                                      {" "}
                                      Terms & Conditions{" "}
                                    </a>{" "}
                                    and{" "}
                                    <a target="_blank" href="/privacypolicy">
                                      Privacy Policy
                                    </a>
                                  </label>
                                </React.Fragment>
                              );
                            }}
                          </Field>
                        </div>
                      </div>
                      <ErrorMessage
                        name="term_condition"
                        component={TextErrorMsg}
                      />

                      <div className="accountfield-signup">
                        <div className="signup">
                          <Button
                            BtnText="Sign Up"
                            BtnColor="primary becomaninstructor"
                            BtnType="submit"
                            // disabled={!formik.isValid || isLoading}
                            disabled={isLoading}
                            hasSpinner={isLoading && signUpClick}
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>

      <Modal className="center-modal verification-modal" show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bottom-line">
          We sent you a verification code to your email <strong></strong>
        </Modal.Body>
        <Modal.Body className="verification-code-box">
          <div className="verification-box">
            <OtpInput
              value={otp}
              onChange={(code) => setOtp(code)}
              numInputs={4}
              isInputNum={true}
              shouldAutoFocus={true}
            />
          </div>
          {otpError && (
            <span className="validation-text">
              {"Please enter valid OTP !"}
            </span>
          )}
          <p>{counter} Sec</p>
          <div className="email-send m-auto">
            <button className="btn becomaninstructor" onClick={handleOtp}>
              Verify
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Instructorcreateaccount;
