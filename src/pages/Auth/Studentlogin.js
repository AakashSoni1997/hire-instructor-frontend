import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { StudentLogin, ForgotEmail, StudentSocialLogin, ResetPasswordAction } from "../../redux/actions/AuthAction";
import { FieldText } from "../../components/InputText/InputText";
import axios from "axios";
import { apiHeader } from "../../redux/actions/ApiHeader";
import Button from "./../../components/Buttons/Buttons";
import "./Auth.scss";
import { Regex } from "../../Utils/Regex";

function Studentlogin() {
    const navigate = useNavigate();
    const disptach = useDispatch();
    const location = useLocation()
    const providerFb = new FacebookAuthProvider();
    const providerGoogle = new GoogleAuthProvider();

    const [show, setShow] = useState(false);
    const [resetModalshow, setResetModalshow] = useState(false);
    const [loginClick, setLoginClick] = useState(false)
    const [forgotClick, setForgotClick] = useState(false)
    const [resetPassClick, setResetPassClick] = useState(false)

    // Get Id in params
    const params = new URLSearchParams(location.search)
    let resetPassToken = params.get('reset-password')

    useEffect(() => {
        if (resetPassToken) {
            setResetModalshow(true)
        }
    }, [resetPassToken])

    const handleClose = () => {
        setResetModalshow(false)
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const isLoading = useSelector((state) => state.auth.loading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const forgotPassSelector = useSelector((state) => state.auth?.forgot_pass);
    const ResetPassSelector = useSelector((state) => state.auth?.reset_pass);

    const handleSocialLogin = (text) => {
        signInWithPopup(auth, text === "fb" ? providerFb : providerGoogle).then(
            (res) => {
                let formdata = new FormData();
                formdata.append("first_name", res._tokenResponse.firstName);
                formdata.append("last_name", res._tokenResponse.lastName);
                formdata.append("email", res._tokenResponse.email);
                formdata.append("profile_image", res._tokenResponse.photoUrl);
                formdata.append(
                    text === "fb" ? "facebook_id" : "google_id",
                    res.user.providerData[0].uid
                );
                disptach(StudentSocialLogin(formdata));
            }
        );
    };

    const handleLinkedinLogin = (code) => {
        console.log("handleLinkedinLogin", code)
        let formData = new FormData();
        formData.append("grant_type", "authorization_code");
        formData.append("code", code);
        formData.append("client_id", "77vg3vo71vtmsm");
        formData.append("client_secret", "3acrAUqKpRHUCoC5");
        formData.append("redirect_uri", `${window.location.origin}/linkedin`);
        axios.post(
            `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=77vg3vo71vtmsm&client_secret=3acrAUqKpRHUCoC5&redirect_uri=${window.location.origin}/linkedin`,
            {},
            {
                headers: apiHeader(true),
            }
        ).then((response) => {
            let token = response.data.access_token;
            axios.get(`https://api.linkedin.com/v2/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
            }).then((responseProfile) =>
                console.log("responseProfile", responseProfile)
            );
        });
    };

    const handleLoginSubmit = (values) => {
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);
        disptach(StudentLogin(formData));
        setLoginClick(true)
    }

    useEffect(() => {
        if (isAuthenticated === true) {
            navigate("/");
            setLoginClick(false)
        }
    }, [isAuthenticated]);

    const handleForgotSubmit = (values) => {
        let formData = new FormData();
        formData.append("email", values.forgot_email);
        formData.append("role", 2);
        formData.append("type_user", 1);
        disptach(ForgotEmail(formData));
        setForgotClick(true)
    };

    useEffect(() => {
        if (forgotPassSelector && Object.keys(forgotPassSelector).length > 0 && show) {
            if (forgotPassSelector.data.status) {
                setShow(false);
                setForgotClick(false)
            }
        }
    }, [forgotPassSelector])

    const handleResetPasswordSubmit = (values) => {
        let data = {
            token: resetPassToken,
            password: values.password,
            confirm_password: values.confirm_password
        }
        disptach(ResetPasswordAction(data))
        setResetPassClick(true)
    }

    useEffect(() => {
        if (ResetPassSelector && Object.keys(ResetPassSelector).length > 0 && resetModalshow) {
            if (ResetPassSelector.data.status) {
                setResetModalshow(false);
                setResetPassClick(false);
                navigate("/studentlogin");
            }
        }
    }, [ResetPassSelector])

    return (
        <>
            <div className="login-main-section login-page">
                <div className="login-main-section1">
                    <div className="login-account">
                        <div className="position-relative login-top-content">
                            <h1>Create Account</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vestibulum egestas purus a erat mattis.
                            </p>
                            <div className="view-courses">
                                <Link
                                    className="btn becomaninstructor"
                                    to="/studentcreateaccount"
                                >
                                    Join Now
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
                        <h1>Welcome Back</h1>
                        <p>Enter your details to proceed</p>

                        <div className="accountfieldmain accountfieldmain-login">
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={() =>
                                    Yup.object().shape({
                                        email: Yup.string().email('Invalid email').required('Email is required!'),
                                        password: Yup.string().required('Password is required!'),
                                    })
                                }
                                onSubmit={handleLoginSubmit}
                            >
                                {formik => {
                                    return (
                                        <Form>
                                            <div className="accountfield">
                                                <div className="accountfield-first">
                                                    <FieldText
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </div>

                                                <div className="accountfield-first">
                                                    <FieldText
                                                        name="password"
                                                        type="password"
                                                        showHide={true}
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="forget-password">
                                                <div className="box">
                                                    <Link className="button" onClick={handleShow}>
                                                        Forgot Password?
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="accountfield-heading">
                                                <h2>OR Continue With</h2>
                                            </div>

                                            <div className="accountfield-fb-goo-button-sec">
                                                <div className="facebook">
                                                    <Button
                                                        BtnColor="primary becomaninstructor"
                                                        BtnType="button"
                                                        onClick={() => handleSocialLogin("fb")}
                                                        BtnText={<><img src="/images/facebook.png" alt="" /> Facebook</>}
                                                    />
                                                </div>

                                                <div className="facebook">
                                                    <Button
                                                        BtnColor="primary becomaninstructor"
                                                        BtnType="button"
                                                        onClick={() => handleSocialLogin("google")}
                                                        BtnText={<><img src="/images/google.png" alt="" /> Google</>}
                                                    />
                                                </div>

                                                <div className="linkedIn">
                                                    <button className="btn becomaninstructor" type="button">
                                                        <LinkedIn
                                                            clientId="77vg3vo71vtmsm"
                                                            redirectUri={`${window.location.origin}/linkedin`}
                                                            scope="r_liteprofile,r_emailaddress"
                                                            onSuccess={(code) => handleLinkedinLogin(code)}
                                                            onError={(error) => {
                                                                console.log(error, "error");
                                                            }}
                                                        >
                                                            {({ linkedInLogin }) => (
                                                                <img
                                                                    onClick={linkedInLogin}
                                                                    src={linkedin}
                                                                    alt="Sign in with Linked In"
                                                                    style={{ maxWidth: "180px", cursor: "pointer", margin: 0 }}
                                                                />
                                                            )}
                                                        </LinkedIn>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="accountfield-signup">
                                                <div className="signup">
                                                    <Button
                                                        BtnText="Login"
                                                        BtnColor="primary becomaninstructor"
                                                        BtnType="submit"
                                                        // disabled={!formik.isValid || isLoading}
                                                        disabled={isLoading}
                                                        hasSpinner={isLoading && loginClick}
                                                    />
                                                </div>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                className="center-modal"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bottom-line">
                    Enter your email to reset password
                </Modal.Body>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            forgot_email: ''
                        }}
                        validationSchema={() =>
                            Yup.object().shape({
                                forgot_email: Yup.string().email('Invalid email').required('Email is required!'),
                            })
                        }
                        onSubmit={handleForgotSubmit}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <div className="login-main-section login-main-section-email">
                                        <div className="login-main-section2">
                                            <div className="position-relative w-100">
                                                <div className="accountfieldmain">
                                                    <div className="accountfield">
                                                        <div className="accountfield-first text-start">
                                                            <FieldText
                                                                name="forgot_email"
                                                                type="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accountfield-signup mb-0">
                                        <div className="signup">
                                            <Button
                                                BtnText="Send"
                                                BtnColor="primary becomaninstructor"
                                                BtnType="submit"
                                                // disabled={!formik.isValid || isLoading}
                                                disabled={isLoading}
                                                hasSpinner={isLoading && forgotClick}
                                            />
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>

            <Modal
                className="center-modal"
                show={resetModalshow}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Reset Password </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bottom-line"> Enter new password </Modal.Body>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            password: '',
                            confirm_password: ''
                        }}
                        validationSchema={() =>
                            Yup.object().shape({
                                password: Yup.string().required('Password is required').min(6, 'Password should be between 6 to 16 digits.').max(16, 'Password should be between 6 to 16 digits.').matches(Regex.password, '1 uppercase 1 lowercase 1 special character and 1 digit required!'),
                                confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
                            })
                        }
                        onSubmit={handleResetPasswordSubmit}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <div className="login-main-section login-main-section-email">
                                        <div className="login-main-section2">
                                            <div className="position-relative w-100">
                                                <div className="accountfieldmain">
                                                    <div className="accountfield text-start">
                                                        <div className="accountfield-first">
                                                            <FieldText
                                                                name="password"
                                                                type="password"
                                                                showHide={true}
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                        <div className="accountfield-first mt-5">
                                                            <FieldText
                                                                name="confirm_password"
                                                                type="password"
                                                                showHide={true}
                                                                placeholder="Re-Enter Password"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accountfield-signup mb-0">
                                        <div className="signup">
                                            <Button
                                                BtnText="Send"
                                                BtnColor="primary becomaninstructor"
                                                BtnType="submit"
                                                // disabled={!formik.isValid || isLoading}
                                                disabled={isLoading}
                                                hasSpinner={isLoading && resetPassClick}
                                            />
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Studentlogin;
