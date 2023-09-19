import React, { useEffect, useState } from "react";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import Numberinput from "../../components/Numberinput/Numberinput";
import Modal from "react-bootstrap/Modal";
import { FieldText } from "../../components/InputText/InputText";
import { Regex } from "../../Utils/Regex";
import { useDispatch, useSelector } from "react-redux";
import { OtpVerification, ResnedOtp, StudentRegister } from "../../redux/actions/AuthAction";
import OtpInput from "react-otp-input";
import { CitiesList, GetCountryList, StatesList } from "../../redux/actions/HomePageActions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from "./../../components/Buttons/Buttons";
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";

const Createaccount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [emailAddress, setEmailAddress] = useState();
    const [otp, setOtp] = useState();
    const [otpError, setOtpError] = useState(false);
    const [counter, setCounter] = useState(60);
    const [signUpClick, setSignUpClick] = useState(false)
    const [otpClick, setOtpClick] = useState(false)

    const isLoading = useSelector((state) => state.auth.loading);
    const signupSuccessSelector = useSelector((state) => state.auth.user_register);
    const OTPSuccessSelector = useSelector((state) => state.auth.otp_verification);

    const countryList = useSelector((state) => state?.home?.get_country_list);
    const stateList = useSelector((state) => state?.home?.post_states_list);
    const citiesList = useSelector((state) => state?.home?.post_cities_list);
    const registerSuccess = useSelector((state) => state?.auth?.user_register?.status_code === 200);
    const resendOtpSuccess = useSelector((state) => state.auth?.resend_otp_success?.data?.status)

    const SignupValidationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required!'),
        last_name: Yup.string().required('Last name is required!'),
        email: Yup.string().email('Invalid email').required('Email is required!'),
        phone_number: Yup.string().min(10, "Phone number length should be between 7 to 15 digits.").max(18, "Phone number length should be between 7 to 15 digits.").matches(Regex.MOBILE_NUMBER_REGEX, 'Phone number is not valid').required('Phone number is required!'),
        password: Yup.string().required('Password is required').min(6, 'Password should be between 6 to 16 digits.').max(16, 'Password should be between 6 to 16 digits.').matches(Regex.password, '1 uppercase 1 lowercase 1 special character and 1 digit required!'),
        password_confirmation: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        // Confirm password should be same !
        country_id: Yup.string().required('Please select country!'),
        state_id: Yup.string().required('Please select State!'),
        city_id: Yup.string().required('Please select City !'),
        term_condition: Yup.bool() // use bool instead of boolean
            .oneOf([true], "Please Accept Terms & Conditions and Privacy Policy!")
    })

    useEffect(() => {
        dispatch(GetCountryList());
    }, [dispatch]);

    useEffect(() => {
        if (show) {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            setCounter(60);
        }
    }, [counter, show]);


    const handleOnChange = (event) => {
        let formdata = new FormData();
        if (event.target.name === "country_id") {
            formdata.append("country_id", event.target.value);
            dispatch(StatesList(formdata));
        } else if (event.target.name === "state_id") {
            formdata.append("state_id", event.target.value);
            dispatch(CitiesList(formdata));
        }
    }

    const handleSignupSubmit = (value) => {
        let formData = new FormData();
        formData.append("first_name", value.first_name);
        formData.append("last_name", value.last_name);
        formData.append("phone_number", value.phone_number);
        formData.append("email", value.email);
        formData.append("password", value.password);
        formData.append("password_confirmation", value.password_confirmation);
        formData.append("referral_code", value.referral_code);
        formData.append("country_id", value.country_id);
        formData.append("state_id", value.state_id);
        formData.append("city_id", value.city_id);
        formData.append("term_condition", value.term_condition === true ? 1 : 0);
        formData.append("role", 2);
        dispatch(StudentRegister(formData));
        setEmailAddress(value.email)
        setSignUpClick(true)
    }

    useEffect(() => {
        if (signupSuccessSelector && Object.keys(signupSuccessSelector).length > 0 && signUpClick) {
            if (signupSuccessSelector.status && signupSuccessSelector.data.is_verify) {
                setShow(true);
                setSignUpClick(false)
            }
        }
    }, [signupSuccessSelector])


    const handleClose = () => {
        setShow(false);
        setCounter(60);
    };

    const handleOtp = () => {
        if (otp?.toString().length < 4 || otp == undefined) {
            setOtpError(true);
        }
        if (counter > 0 && registerSuccess) {
            let formData = new FormData();
            formData.append("email", emailAddress);
            formData.append("otp", otp);
            setOtpClick(true);
            dispatch(OtpVerification(formData));
        } else if (counter === 0 && resendOtpSuccess) {
            let formData = new FormData();
            formData.append("email", emailAddress);
            formData.append("otp", otp);
            setOtpClick(true);
            dispatch(OtpVerification(formData));
        }
    };

    const handleResendOtp = () => {
        console.log(emailAddress, "emailAddress");
        if (counter === 0 && emailAddress !== undefined && emailAddress !== "" && emailAddress !== null) {
            dispatch(ResnedOtp({ email: emailAddress }));
            setCounter(60)
        }
    };

    useEffect(() => {
        if (Object.keys(OTPSuccessSelector).length > 0 && show) {
            if (OTPSuccessSelector.data.status) {
                setShow(false);
                navigate("/studentlogin");
                setOtpClick(false)
            }
        }
    }, [OTPSuccessSelector])

    useEffect(() => {
        if (otp?.toString().length === 4) {
            setOtpError(false)
        }
    }, [otp])

    return (
        <>
            <div className="login-main-section createaccount-page">
                <div className="login-main-section1">
                    <div className="login-account">
                        <div className="position-relative login-top-content">
                            <h1>Welcome Back</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum egestas purus a erat mattis.
                            </p>
                            <div className="view-courses">
                                <Link className="btn becomaninstructor" to="/studentlogin">
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
                                email: '',
                                phone_number: "",
                                password: '',
                                password_confirmation: "",
                                country_id: "",
                                state_id: "",
                                city_id: "",
                                term_condition: false
                            }}
                            validationSchema={SignupValidationSchema}
                            onSubmit={handleSignupSubmit}
                        >
                            {formik => {
                                return (
                                    <Form onChange={handleOnChange}>
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
                                                                    GetValue={(data) => form.setFieldValue(field.name, data.phone_number)}
                                                                    name={field.name}
                                                                />
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="phone_number" component={TextErrorMsg} />
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
                                                <div className="accountfield-first">
                                                    <FieldText
                                                        name="referral_code"
                                                        type="text"
                                                        placeholder="Referral code (Optional)"
                                                    />
                                                </div>
                                                <div className="accountfield-first dropdown-select">
                                                    <Field as="select" name="country_id" className='select-control w-100'>
                                                        <option value=""> Select Country </option>
                                                        {countryList.map((value, index) => {
                                                            return (
                                                                <option value={value.id} key={index}> {value.name} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="country_id" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="accountfield">
                                                <div className="accountfield-first dropdown-select">
                                                    <Field as="select" name="state_id" className='select-control w-100'>
                                                        <option value=""> Select State </option>
                                                        {stateList.map((value, index) => {
                                                            return (
                                                                <option value={value.id} key={index}> {value.name} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="state_id" component={TextErrorMsg} />
                                                </div>
                                                <div className="accountfield-first dropdown-select">
                                                    <Field as="select" name="city_id" className='select-control w-100'>
                                                        <option value=""> Select City </option>
                                                        {citiesList.map((value, index) => {
                                                            return (
                                                                <option value={value.id} key={index}> {value.name} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="city_id" component={TextErrorMsg} />
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
                                                                        onChange={e => form.setFieldValue(field.name, e.target.checked)}
                                                                    ></input>
                                                                    <label htmlFor={field.name}>
                                                                        Agree to the <a target="_blank" href="/termsconditions"> Terms & Conditions </a> and <a target="_blank" href="/privacypolicy">Privacy Policy</a>
                                                                    </label>
                                                                </React.Fragment>
                                                            )
                                                        }}
                                                    </Field>
                                                </div>
                                            </div>
                                            <ErrorMessage name="term_condition" component={TextErrorMsg} />
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
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>

            <Modal
                className="center-modal verification-modal"
                show={show}
            >
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Verification</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bottom-line"> We sent you a verification code to your email <strong></strong></Modal.Body>
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
                    {counter < 1 ? (
                        <div className="email-send m-auto">
                            <Button
                                BtnText="Resend OTP"
                                BtnColor="text"
                                BtnType="button"
                                onClick={handleResendOtp}
                            />
                        </div>
                    ) : (
                        <p>{counter} Sec</p>
                    )}
                    <div className="email-send m-auto">
                        <Button
                            BtnText="Verify"
                            BtnColor="primary becomaninstructor"
                            BtnType="button"
                            onClick={handleOtp}
                            disabled={isLoading}
                            hasSpinner={isLoading && otpClick}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
};

export default Createaccount;
