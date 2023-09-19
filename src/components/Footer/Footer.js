import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Footer.scss";
import axios from "axios";
import { baseUrlPostGres } from "../../redux/constant";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { toast, ToastContainer } from "react-toastify";



const Footer = () => {
    const [newsLetterSearch, setNewsLetterSearch] = useState("");
    const [error, setError] = useState({});
    const handleSubmit = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let formdata = new FormData();
        formdata.append("email", newsLetterSearch);
        if (!newsLetterSearch) {
            setError({ ...error, ["newsLetterSearch"]: "Email is Required" });
        } else if (!regex.test(newsLetterSearch)) {
            setError({ ...error, ["newsLetterSearch"]: "Enter Vaild Email!" });
        } else {
            setError({});
            axios.post(`${baseUrlPostGres()}/api/newsletterSubscriberPost`, formdata, {
                headers: apiHeader(true),
            })
                .then((response) => console.log(response.data))
                .catch((err) => toast(err.response?.data?.message));
        }
    };

    return (
        <>
            <div className="main-footer">
                {/* <div className='container position-relative'>
          <div className='chat-button'>
          <Link className='btn' to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.318" height="25.318" viewBox="0 0 25.318 25.318">
              <path id="Union_1" data-name="Union 1" d="M12161.762,17156.58a.483.483,0,0,1-.163-.469s.7-3.664.723-3.771-.056-.271-.193-.486a8.943,8.943,0,0,1-1.512-4.99,9.068,9.068,0,0,1,3.144-6.812l.482-.43c-.077.266-.15.543-.211.818a7.533,7.533,0,0,0-.138.773,10.939,10.939,0,0,0-.095,1.3,10.327,10.327,0,0,0,10.407,10.291,11.2,11.2,0,0,0,2.07-.275c.3-.064.582-.133.8-.193.259-.064.513-.146.736-.225-.224.314-.417.582-.417.582a9.559,9.559,0,0,1-7.312,3.354,10.33,10.33,0,0,1-3.694-.727.9.9,0,0,0-.383-.082.927.927,0,0,0-.345.068l-3.414,1.344a.434.434,0,0,1-.177.039A.487.487,0,0,1,12161.762,17156.58Zm22.468-4.477-3.449-1.223a1.618,1.618,0,0,0-1.184-.018c-.177.064-.857.314-1.546.5a12.426,12.426,0,0,1-2.872.469,10.32,10.32,0,0,1-10.4-10.291,9.774,9.774,0,0,1,.224-2.084,10.5,10.5,0,0,1,10.364-8.086,10.351,10.351,0,0,1,10.57,10.162,9.861,9.861,0,0,1-1.68,5.5c-.043.061-.09.121-.129.189a1.445,1.445,0,0,0-.2.74l1,3.549a.787.787,0,0,1,.03.162.484.484,0,0,1-.487.488A.831.831,0,0,1,12184.229,17152.1Z" transform="translate(-12160.616 -17131.375)" fill="#005eb5" />
            </svg>
            Chat With Us
          </Link>
        </div>
          </div> */}
                <div className="footer-bg-image">
                    <div className="container">
                        <div className="footer-content">
                            <div className="logo-sec">
                                <Link to="/">
                                    <img src="/images/footer-logo.png" alt="" />
                                </Link>
                                <div className="social-icon">
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="7.498"
                                            height="14"
                                            viewBox="0 0 7.498 14"
                                        >
                                            <path
                                                id="Icon_awesome-facebook-f"
                                                data-name="Icon awesome-facebook-f"
                                                d="M8.616,7.875l.389-2.534H6.574V3.7A1.267,1.267,0,0,1,8,2.328H9.108V.171A13.478,13.478,0,0,0,7.146,0,3.093,3.093,0,0,0,3.835,3.41V5.341H1.609V7.875H3.835V14H6.574V7.875Z"
                                                transform="translate(-1.609)"
                                                fill="#005eb5"
                                            />
                                        </svg>
                                    </Link>

                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="11.371"
                                            viewBox="0 0 14 11.371"
                                        >
                                            <path
                                                id="Icon_awesome-twitter"
                                                data-name="Icon awesome-twitter"
                                                d="M12.561,6.215c.009.124.009.249.009.373a8.108,8.108,0,0,1-8.164,8.164A8.108,8.108,0,0,1,0,13.463a5.936,5.936,0,0,0,.693.036,5.746,5.746,0,0,0,3.562-1.226,2.874,2.874,0,0,1-2.683-1.99,3.618,3.618,0,0,0,.542.044,3.035,3.035,0,0,0,.755-.1,2.87,2.87,0,0,1-2.3-2.816V7.378a2.89,2.89,0,0,0,1.3.364A2.874,2.874,0,0,1,.977,3.9a8.156,8.156,0,0,0,5.916,3,3.239,3.239,0,0,1-.071-.657,2.872,2.872,0,0,1,4.966-1.963,5.649,5.649,0,0,0,1.821-.693,2.862,2.862,0,0,1-1.261,1.581A5.752,5.752,0,0,0,14,4.731a6.168,6.168,0,0,1-1.439,1.483Z"
                                                transform="translate(0 -3.381)"
                                                fill="#005eb5"
                                            />
                                        </svg>
                                    </Link>

                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="13.997"
                                            viewBox="0 0 14 13.997"
                                        >
                                            <path
                                                id="Icon_awesome-instagram"
                                                data-name="Icon awesome-instagram"
                                                d="M7,5.648a3.589,3.589,0,1,0,3.589,3.589A3.583,3.583,0,0,0,7,5.648Zm0,5.922A2.333,2.333,0,1,1,9.329,9.236,2.337,2.337,0,0,1,7,11.569ZM11.569,5.5a.837.837,0,1,1-.837-.837A.835.835,0,0,1,11.569,5.5Zm2.377.85a4.142,4.142,0,0,0-1.131-2.933A4.169,4.169,0,0,0,9.882,2.287c-1.156-.066-4.619-.066-5.775,0A4.164,4.164,0,0,0,1.175,3.414,4.156,4.156,0,0,0,.044,6.347c-.066,1.156-.066,4.619,0,5.775a4.142,4.142,0,0,0,1.131,2.933,4.175,4.175,0,0,0,2.933,1.131c1.156.066,4.619.066,5.775,0a4.142,4.142,0,0,0,2.933-1.131,4.169,4.169,0,0,0,1.131-2.933c.066-1.156.066-4.616,0-5.772Zm-1.493,7.012a2.362,2.362,0,0,1-1.331,1.331A15.426,15.426,0,0,1,7,14.974a15.546,15.546,0,0,1-4.126-.281A2.362,2.362,0,0,1,1.54,13.362a15.426,15.426,0,0,1-.281-4.126A15.546,15.546,0,0,1,1.54,5.11,2.362,2.362,0,0,1,2.87,3.78,15.426,15.426,0,0,1,7,3.5a15.546,15.546,0,0,1,4.126.281A2.362,2.362,0,0,1,12.453,5.11a15.426,15.426,0,0,1,.281,4.126A15.417,15.417,0,0,1,12.453,13.362Z"
                                                transform="translate(0.005 -2.238)"
                                                fill="#005eb5"
                                            />
                                        </svg>
                                    </Link>

                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="9.844"
                                            viewBox="0 0 14 9.844"
                                        >
                                            <path
                                                id="Icon_awesome-youtube"
                                                data-name="Icon awesome-youtube"
                                                d="M14.757,6.04A1.759,1.759,0,0,0,13.52,4.794,41.572,41.572,0,0,0,8.05,4.5a41.572,41.572,0,0,0-5.47.294A1.759,1.759,0,0,0,1.343,6.04,18.454,18.454,0,0,0,1.05,9.432a18.454,18.454,0,0,0,.293,3.392A1.733,1.733,0,0,0,2.58,14.049a41.572,41.572,0,0,0,5.47.294,41.572,41.572,0,0,0,5.47-.294,1.733,1.733,0,0,0,1.238-1.226,18.454,18.454,0,0,0,.293-3.392,18.454,18.454,0,0,0-.293-3.392ZM6.618,11.513V7.35l3.659,2.082L6.618,11.513Z"
                                                transform="translate(-1.05 -4.5)"
                                                fill="#005eb5"
                                            />
                                        </svg>
                                    </Link>

                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                id="Icon_awesome-linkedin-in"
                                                data-name="Icon awesome-linkedin-in"
                                                d="M3.134,14H.231V4.654h2.9ZM1.681,3.379a1.689,1.689,0,1,1,1.681-1.7A1.7,1.7,0,0,1,1.681,3.379ZM14,14H11.1V9.45c0-1.084-.022-2.475-1.509-2.475-1.509,0-1.74,1.178-1.74,2.4V14h-2.9V4.654H7.736V5.929h.041a3.05,3.05,0,0,1,2.746-1.509C13.46,4.419,14,6.354,14,8.866V14Z"
                                                transform="translate(0 -0.001)"
                                                fill="#005eb5"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="contactinfo">
                                <h1>Contact Info</h1>
                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14.002"
                                        height="14.001"
                                        viewBox="0 0 14.002 14.001"
                                    >
                                        <path
                                            id="Icon_ionic-ios-call"
                                            data-name="Icon ionic-ios-call"
                                            d="M18.087,15.465a11.761,11.761,0,0,0-2.457-1.644c-.736-.354-1.006-.346-1.527.029-.434.313-.714.605-1.214.5a7.241,7.241,0,0,1-2.439-1.8,7.189,7.189,0,0,1-1.8-2.439c-.106-.5.186-.78.5-1.214.375-.521.386-.791.029-1.527A11.528,11.528,0,0,0,7.528,4.906c-.536-.536-.656-.419-.951-.313a5.414,5.414,0,0,0-.871.463,2.628,2.628,0,0,0-1.046,1.1c-.208.448-.448,1.283.776,3.463a19.322,19.322,0,0,0,3.4,4.531h0l0,0,0,0h0a19.4,19.4,0,0,0,4.531,3.4c2.18,1.225,3.014.984,3.463.776a2.583,2.583,0,0,0,1.1-1.046,5.414,5.414,0,0,0,.463-.871C18.507,16.121,18.627,16,18.087,15.465Z"
                                            transform="translate(-4.49 -4.502)"
                                            fill="#fed756"
                                        />
                                    </svg>
                                    +01 9876543210
                                </Link>
                                <br />

                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18.702"
                                        height="12.947"
                                        viewBox="0 0 18.702 12.947"
                                    >
                                        <g
                                            id="Icon_ionic-ios-mail"
                                            data-name="Icon ionic-ios-mail"
                                            transform="translate(-3.375 -7.875)"
                                        >
                                            <path
                                                id="Path_117"
                                                data-name="Path 117"
                                                d="M21.924,10.341l-4.837,4.927a.087.087,0,0,0,0,.126L20.472,19a.583.583,0,0,1,0,.827.586.586,0,0,1-.827,0l-3.372-3.592a.092.092,0,0,0-.13,0l-.823.836a3.62,3.62,0,0,1-2.58,1.088A3.692,3.692,0,0,1,10.1,17.04l-.791-.8a.092.092,0,0,0-.13,0L5.812,19.827a.586.586,0,0,1-.827,0,.583.583,0,0,1,0-.827L8.37,15.394a.1.1,0,0,0,0-.126L3.528,10.341a.089.089,0,0,0-.153.063v9.859A1.443,1.443,0,0,0,4.814,21.7H20.638a1.443,1.443,0,0,0,1.439-1.439V10.4A.09.09,0,0,0,21.924,10.341Z"
                                                transform="translate(0 -0.88)"
                                                fill="#fed756"
                                            />
                                            <path
                                                id="Path_118"
                                                data-name="Path 118"
                                                d="M13.033,16.106a2.444,2.444,0,0,0,1.758-.737L21.844,8.19a1.413,1.413,0,0,0-.89-.315H5.116a1.4,1.4,0,0,0-.89.315l7.054,7.179A2.444,2.444,0,0,0,13.033,16.106Z"
                                                transform="translate(-0.307)"
                                                fill="#fed756"
                                            />
                                        </g>
                                    </svg>
                                    hireinstructor@dmail.com
                                </Link>
                                <br />

                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.649"
                                        height="16.642"
                                        viewBox="0 0 11.649 16.642"
                                    >
                                        <path
                                            id="Icon_material-location-on"
                                            data-name="Icon material-location-on"
                                            d="M13.325,3A5.82,5.82,0,0,0,7.5,8.825c0,4.369,5.825,10.817,5.825,10.817s5.825-6.449,5.825-10.817A5.82,5.82,0,0,0,13.325,3Zm0,7.9a2.08,2.08,0,1,1,2.08-2.08A2.081,2.081,0,0,1,13.325,10.9Z"
                                            transform="translate(-7.5 -3)"
                                            fill="#fed756"
                                        />
                                    </svg>
                                    123 Business Avenue, NYC
                                </Link>
                                <br />
                            </div>

                            <div className="quicklinks">
                                <h1>Quick Links</h1>
                                <div className="menu-section">
                                    <div className="menu-first">
                                        <Link to="/courses">Courses</Link>
                                        <br />
                                        <Link to="/findinstructor">Find Instructor </Link>
                                        <br />
                                        <Link to="/groupclasses">Group Classes </Link>
                                        <br />
                                        <Link to="/blog">Blogs</Link> <br />
                                        <Link to="/faqs">FAQs</Link>
                                    </div>

                                    <div className="menu-first">
                                        <Link to="/becomeaninstructor">Become an Instructor</Link>
                                        <br />
                                        <Link to="/aboutus">About Us</Link>
                                        <br />
                                        <Link to="/termsconditions">Terms & Conditions</Link>
                                        <br />
                                        <Link to="/privacypolicy">Privacy Policy</Link>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            <div className="newsletter">
                                <h1>Sign Up for Newsletter!</h1>
                                <p>You'll be informed about updates after sign up</p>

                                <div>
                                    <input required
                                        onChange={({ target: { value } }) =>
                                            setNewsLetterSearch(value)
                                        }
                                        type="text"
                                        placeholder="Email"
                                    ></input>
                                    <button type="button" className="btn-coupon" onClick={handleSubmit}>
                                        Send
                                    </button>
                                </div>
                                <span className="validation-text-footer">{error?.newsLetterSearch}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copy-righyt">
                <p>Copyright © 2022 Hire Instructor</p>
            </div>
            <ToastContainer />
            <span style={{ display: "none" }}>{new Date().toLocaleString()}</span>
        </>
    );
};

export default Footer;
