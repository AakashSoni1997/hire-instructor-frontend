import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Groupclassescard from "../../components/Groupclassescard/Groupclassescard";
import ModalVideo from "react-modal-video";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { Button, Collapse, Tab, Tabs } from "react-bootstrap";
import "../../style.scss";
import { useParams } from "react-router-dom";
import { baseUrlPostGres } from "../../redux/constant";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { PostInstructorDetail } from "../../redux/actions/instructorAction";
import { toast } from "react-toastify";
import calender from "./calender.json";

const Instructordetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [instructorDetails, setInstructorDetails] = useState({});
  const [modalNavigateURL, setModalNavigateURL] = useState();
  const instructorDetailsState = useSelector(
    (state) => state.instructor.instructor_detail
  );

  const { id } = useParams();

  useEffect(() => {
    let formData = new FormData();
    formData.append("id", id);
    dispatch(PostInstructorDetail(formData));
  }, [id, dispatch]);

  useEffect(() => {
    setInstructorDetails(instructorDetailsState);
  }, [instructorDetailsState]);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setModalNavigateURL("");
  };
  const days = [
    { id: 1, name: "Mon", value: "Monday" },
    { id: 2, name: "Tue", value: "Tuesday" },
    { id: 3, name: "Wed", value: "Wednesday" },
    { id: 4, name: "Thu", value: "Thursday" },
    { id: 5, name: "Fri", value: "Friday" },
    { id: 6, name: "Sat", value: "Saturday" },
    { id: 7, name: "Sun", value: "Sunday" },
  ];
  const [openBadge, setBadge] = useState(false);

  const handleRedirectClassType = () => {
    modalNavigateURL
      ? navigate(modalNavigateURL)
      : toast.error("Please select class type", { theme: "colored" });
  };

  return (
    <>
      <div id="footer-bottom" className="Instructordetail">
        <Header />
        <div className="teacher-details-box">
          <div className="teacher-content-card-top">
            <div className="container">
              <div className="teacher-main-section">
                <div className="teacher-video">
                  <img
                    src={
                      instructorDetails?.profile_image === null ||
                      instructorDetails?.profile_image === undefined
                        ? "/images/dummy_avatar.jpg"
                        : `${baseUrlPostGres()}${
                            instructorDetails?.profile_image
                          }`
                    }
                    alt={instructorDetails?.first_name}
                  />
                  <React.Fragment>
                    <ModalVideo
                      channel="custom"
                      url={`${baseUrlPostGres()}${
                        instructorDetails?.profile_video
                      }`}
                      autoplay
                      isOpen={isOpen}
                      videoId="9xwazD5SyVg"
                      onClose={() => setOpen(false)}
                    />
                    <button className="btn" onClick={() => setOpen(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43.875"
                        height="43.875"
                        viewBox="0 0 43.875 43.875"
                      >
                        <path
                          id="Icon_ionic-ios-play-circle"
                          data-name="Icon ionic-ios-play-circle"
                          d="M25.313,3.375A21.938,21.938,0,1,0,47.25,25.313,21.934,21.934,0,0,0,25.313,3.375Zm8.838,22.349L19.68,34.478a.469.469,0,0,1-.707-.411V16.559a.467.467,0,0,1,.707-.411L34.151,24.9A.483.483,0,0,1,34.151,25.724Z"
                          transform="translate(-3.375 -3.375)"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </React.Fragment>
                </div>
                <div className="teacher-details">
                  <div className="main-deatils1">
                    <div className="detai1">
                      <h1>
                        {`${
                          instructorDetails?.first_name === undefined ||
                          instructorDetails?.first_name === null
                            ? ""
                            : instructorDetails?.first_name
                        } ${
                          instructorDetails?.last_name === undefined ||
                          instructorDetails?.first_name === null
                            ? ""
                            : instructorDetails?.last_name
                        }`}
                        <span className="flag">
                          <>{instructorDetails?.country?.emoji}</>
                        </span>

                        <span className="checked-mark">
                          {instructorDetails?.is_varificationbadge === 1 && (
                            <img src={"/images/checked-mark.png"} alt="" />
                          )}
                        </span>
                      </h1>
                      <p>
                        <svg
                          className="active"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                        >
                          <path
                            id="Icon_metro-star-full"
                            data-name="Icon metro-star-full"
                            d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                            transform="translate(-2.571 -2.684)"
                            fill="Currentcolor"
                          />
                        </svg>
                        <svg
                          className="active"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                        >
                          <path
                            id="Icon_metro-star-full"
                            data-name="Icon metro-star-full"
                            d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                            transform="translate(-2.571 -2.684)"
                            fill="Currentcolor"
                          />
                        </svg>
                        <svg
                          className="active"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                        >
                          <path
                            id="Icon_metro-star-full"
                            data-name="Icon metro-star-full"
                            d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                            transform="translate(-2.571 -2.684)"
                            fill="Currentcolor"
                          />
                        </svg>
                        <svg
                          className="active"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                        >
                          <path
                            id="Icon_metro-star-full"
                            data-name="Icon metro-star-full"
                            d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                            transform="translate(-2.571 -2.684)"
                            fill="Currentcolor"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25.12"
                          height="23.891"
                          viewBox="0 0 25.12 23.891"
                        >
                          <path
                            id="Icon_metro-star-full"
                            data-name="Icon metro-star-full"
                            d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                            transform="translate(-2.571 -2.683)"
                            fill="Currentcolor"
                          />
                        </svg>
                        <span>
                          <b>
                            {instructorDetails?.user_review?.rating === null ||
                            instructorDetails?.user_review?.rating === undefined
                              ? 4
                              : instructorDetails?.user_review?.rating}
                            /5
                          </b>
                          (
                          {instructorDetails?.user_review?.ratingCount ===
                            undefined ||
                          instructorDetails?.user_review?.ratingCount === null
                            ? 10
                            : instructorDetails?.user_review?.ratingCount}
                          )
                        </span>
                      </p>
                    </div>
                    <div className="detai1 price-details-card">
                      <h1 className="price-heading">
                        $
                        {Math.min(
                          instructorDetails?.user_extra_info?.[0]
                            ?.on_demand_price,
                          instructorDetails?.user_extra_info?.[0]
                            ?.schedule_price,
                          instructorDetails?.user_extra_info?.[0]
                            ?.problem_solving_price
                        )}
                        -
                        {Math.max(
                          instructorDetails?.user_extra_info?.[0]
                            ?.on_demand_price,
                          instructorDetails?.user_extra_info?.[0]
                            ?.schedule_price,
                          instructorDetails?.user_extra_info?.[0]
                            ?.problem_solving_price
                        )}
                        /hr
                      </h1>
                    </div>

                    <div className="subject-button-heart-icon">
                    <div className="subject-level-instructor-details">
                        <h3>Subject & Level</h3>
                        {/* <button className="btn"> +2</button> */}
                        <div className="sub-level">English (A-level) | Mathematics (A-level) 
                          <Collapse in={openBadge}>
                              <div id="example-collapse-text">
                                <p>English (A-level) | Mathematics (A-level)</p>
                              </div>
                            </Collapse>
                          <Button
                            onClick={() => setBadge(!openBadge)}
                            aria-controls="example-collapse-text"
                            aria-expanded={openBadge}
                          >
                            +2
                          </Button>

                        </div>
                        
                      </div>
                      <div className="book-heart-button">
                        <button className="btn" onClick={handleShow}>
                          Book Now
                        </button>
                        <div className="btn heart">
                          <input required type="checkbox" id={id} />
                          <label htmlFor={id}></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-details2">
                    <div className="detai1">
                      <h3>Speaks</h3>
                      <h4>
                        {instructorDetails?.user_lang?.map((ele, index) =>
                          index > 0
                            ? `| ${ele.language_name}`
                            : `${ele.language_name} `
                        )}
                      </h4>
                      <h3 className="highest">Qualification</h3>
                      <h4>
                        {
                          instructorDetails?.instructorlevel?.[0]
                            ?.inst_levels_name
                        }
                      </h4>
                    </div>

                    <div className="detai1 price-details-card">
                      <h3>Experience</h3>
                      <h4>
                        {instructorDetails?.user_extra_info?.[0]?.exp_year === 0
                          ? "Fresher"
                          : `${instructorDetails?.user_extra_info?.[0]?.exp_year}+`}
                      </h4>
                      <h3 className="highest">Completed Lessons</h3>
                      <h4>100+</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teachers-description">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-12 col-lg-7 col-xl-8 col-12">
                <div className="tab-section-profile">
                  <Tabs
                    defaultActiveKey="introduction"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="introduction" title="Introduction">
                      <div className="about-description">
                        <h2>About</h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: instructorDetails?.descriptions,
                          }}
                        ></div>
                        <div className="qualification-sec">
                          <h2>Qualification</h2>
                          <div className="qualification-card">
                            <h3>
                              {
                                instructorDetails?.instructorlevel?.[0]
                                  ?.inst_levels_name
                              }
                              in {instructorDetails?.subject_name}
                            </h3>
                            <div className="qualification-card-main">
                              <p>{instructorDetails?.school_name}</p>
                              <p>{instructorDetails?.percentage}+ Grade</p>
                              <p>
                                {`
                                ${instructorDetails?.clg_start_year} to
                                ${instructorDetails?.clg_end_year}`}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="qualification-sec">
                          <h2>Availability</h2>
                          <div className="availability-calendar">
                            <div className="feescharges-sec availability">
                              <div className="table-responsive">
                                <table className="customers">
                                  <thead>
                                    <tr>
                                      <th>Time Slots</th>
                                      {days.map((ele, index) => (
                                        <th>{ele.name}</th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        Morning
                                        <span>(8.00 AM To 12.00 PM)</span>
                                      </td>
                                      {calender[0].week_name === "Monday" ? (
                                        <td className="active">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19.728"
                                            height="15.107"
                                            viewBox="0 0 19.728 15.107"
                                          >
                                            <path
                                              id="Path_126"
                                              data-name="Path 126"
                                              d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                              transform="translate(-10.505 -12.206)"
                                              fill="Currentcolor"
                                            />
                                          </svg>
                                        </td>
                                      ) : (
                                        <td className="deactive"></td>
                                      )}
                                      {/* <td className="deactive"></td> */}
                                      {/* <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td> */}
                                    </tr>
                                    <tr>
                                      <td>
                                        Morning
                                        <span>
                                          Afternoon (12.00 PM To 5.00 PM)
                                        </span>
                                      </td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Morning
                                        <span>
                                          Evening (5.00 PM To 9.00 PM)
                                        </span>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                      <td className="active">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="19.728"
                                          height="15.107"
                                          viewBox="0 0 19.728 15.107"
                                        >
                                          <path
                                            id="Path_126"
                                            data-name="Path 126"
                                            d="M30.128,13.974l-1.612-1.658a.347.347,0,0,0-.257-.11h0a.333.333,0,0,0-.257.11L16.826,23.576l-4.068-4.068a.354.354,0,0,0-.513,0l-1.631,1.631a.365.365,0,0,0,0,.522l5.13,5.13a1.622,1.622,0,0,0,1.072.522,1.7,1.7,0,0,0,1.063-.5h.009L30.138,14.5A.392.392,0,0,0,30.128,13.974Z"
                                            transform="translate(-10.505 -12.206)"
                                            fill="Currentcolor"
                                          />
                                        </svg>
                                      </td>
                                      <td className="deactive"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="LessonFees" title="Lesson Fees">
                      <div className="feescharges-sec feescharges-sec-card">
                        <h2>Lessons</h2>
                        <div className="ondemand-price">
                          <div>
                            <h4>On Demand Class</h4>
                            <p>Per Hour</p>
                          </div>
                          <div>
                            <h3>
                              $
                              {
                                instructorDetails?.user_extra_info?.[0]
                                  ?.on_demand_price
                              }
                            </h3>
                          </div>
                        </div>

                        <div className="ondemand-price">
                          <div>
                            <h4>Schedule Class</h4>
                            <p>Per Hour</p>
                          </div>
                          <div>
                            <h3>
                              $
                              {
                                instructorDetails?.user_extra_info?.[0]
                                  ?.schedule_price
                              }
                            </h3>
                          </div>
                        </div>

                        <div className="ondemand-price">
                          <div>
                            <h4>Problem Solving</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <div>
                            <h3>
                              $
                              {
                                instructorDetails?.user_extra_info?.[0]
                                  ?.problem_solving_price
                              }
                            </h3>
                          </div>
                        </div>

                        <div className="monthlysubscription-sec">
                          <div className="ondemand-price">
                            <div>
                              <h4>Monthly Subscription</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                            <div>
                              <h3>
                                $
                                {
                                  instructorDetails?.user_extra_info?.[0]
                                    ?.monthly_subscription_price
                                }
                              </h3>
                            </div>
                          </div>

                          <div className="ondemand-price">
                            <div>
                              <h4>Yearly Subscription</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                            <div>
                              <h3>
                                $
                                {
                                  instructorDetails?.user_extra_info?.[0]
                                    ?.year_subscription_price
                                }
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="RatingsReviews" title="Ratings & Reviews">
                      <div className="about-description">
                        <div className="groupclasses ratingsreviews">
                          <div className="row gx-5">
                            <div className="col-lg-6">
                              <h2>Ratings & Reviews</h2>
                              <p className="rating-p">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                >
                                  <path
                                    id="Icon_metro-star-full"
                                    data-name="Icon metro-star-full"
                                    d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                    transform="translate(-2.571 -2.684)"
                                    fill="#fed756"
                                  ></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                >
                                  <path
                                    id="Icon_metro-star-full"
                                    data-name="Icon metro-star-full"
                                    d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                    transform="translate(-2.571 -2.684)"
                                    fill="#fed756"
                                  ></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                >
                                  <path
                                    id="Icon_metro-star-full"
                                    data-name="Icon metro-star-full"
                                    d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                    transform="translate(-2.571 -2.684)"
                                    fill="#fed756"
                                  ></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                >
                                  <path
                                    id="Icon_metro-star-full"
                                    data-name="Icon metro-star-full"
                                    d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                    transform="translate(-2.571 -2.684)"
                                    fill="#fed756"
                                  ></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25.12"
                                  height="23.891"
                                  viewBox="0 0 25.12 23.891"
                                >
                                  <path
                                    id="Icon_metro-star-full"
                                    data-name="Icon metro-star-full"
                                    d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                                    transform="translate(-2.571 -2.683)"
                                    fill="#dcdcdc"
                                  ></path>
                                </svg>
                                <span>(1025)</span>
                              </p>
                            </div>
                          </div>

                          <div className="reviews-person-main-section">
                            <div className="reviews-person">
                              <div className="ratings-box-card">
                                <div className="reviews-image">
                                  <img src="/images/Elbrick-Vasan.png" alt="" />
                                </div>
                                <div className="name-star">
                                  <h4>Elbrick Vasan</h4>
                                  <p className="rating-p">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25.12"
                                      height="23.891"
                                      viewBox="0 0 25.12 23.891"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                                        transform="translate(-2.571 -2.683)"
                                        fill="#dcdcdc"
                                      ></path>
                                    </svg>
                                    <span>(4)</span>
                                  </p>
                                </div>
                              </div>
                              <div className="date-botton">
                                <Link className="btn becomaninstructor">
                                  26 Sept'22
                                </Link>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              lit. Pellque non pretium nulla, sed venenatis
                              fels. Fue volutpat tortor quis lobortis dus,
                              consectetur adipis. Pellque non pretium nulla, sed
                              venenatis fels
                              <Link className="btn becomaninstructor" to="/">
                                READ MORE
                              </Link>
                            </p>
                          </div>

                          <div className="reviews-person-main-section">
                            <div className="reviews-person">
                              <div className="ratings-box-card">
                                <div className="reviews-image">
                                  <img src="/images/profile-image.png" alt="" />
                                </div>
                                <div className="name-star">
                                  <h4>Prety Rose</h4>
                                  <p className="rating-p">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25.12"
                                      height="23.891"
                                      viewBox="0 0 25.12 23.891"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                                        transform="translate(-2.571 -2.683)"
                                        fill="#dcdcdc"
                                      ></path>
                                    </svg>
                                    <span>(4)</span>
                                  </p>
                                </div>
                              </div>
                              <div className="date-botton">
                                <Link className="btn becomaninstructor">
                                  26 Sept'22
                                </Link>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              lit. Pellque non pretium nulla, sed venenatis
                              fels. Fue volutpat tortor quis lobortis dus,
                              consectetur adipis. Pellque non pretium nulla, sed
                              venenatis fels
                              <Link className="btn becomaninstructor" to="/">
                                READ MORE
                              </Link>
                            </p>
                          </div>

                          <div className="reviews-person-main-section">
                            <div className="reviews-person">
                              <div className="ratings-box-card">
                                <div className="reviews-image">
                                  <img src="/images/RemyJacksonB.png" alt="" />
                                </div>
                                <div className="name-star">
                                  <h4>Remy Jackson</h4>
                                  <p className="rating-p">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25.12"
                                      height="23.891"
                                      viewBox="0 0 25.12 23.891"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                                        transform="translate(-2.571 -2.683)"
                                        fill="#dcdcdc"
                                      ></path>
                                    </svg>
                                    <span>(4)</span>
                                  </p>
                                </div>
                              </div>
                              <div className="date-botton">
                                <Link className="btn becomaninstructor">
                                  26 Sept'22
                                </Link>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              lit. Pellque non pretium nulla, sed venenatis
                              fels. Fue volutpat tortor quis lobortis dus,
                              consectetur adipis. Pellque non pretium nulla, sed
                              venenatis fels
                              <Link className="btn becomaninstructor" to="/">
                                READ MORE
                              </Link>
                            </p>
                          </div>

                          <div className="reviews-person-main-section">
                            <div className="reviews-person">
                              <div className="ratings-box-card">
                                <div className="reviews-image">
                                  <img src="/images/AishaJoy.png" alt="" />
                                </div>
                                <div className="name-star">
                                  <h4>Anna Lisy</h4>
                                  <p className="rating-p">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25"
                                      height="24"
                                      viewBox="0 0 25 24"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.571,11.684l-9-1-3-8-4,8-9,1,6,6-1,9,8-4,7,4-1-9Z"
                                        transform="translate(-2.571 -2.684)"
                                        fill="#fed756"
                                      ></path>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="25.12"
                                      height="23.891"
                                      viewBox="0 0 25.12 23.891"
                                    >
                                      <path
                                        id="Icon_metro-star-full"
                                        data-name="Icon metro-star-full"
                                        d="M27.691,11.808l-8.679-1.261L15.131,2.683l-3.881,7.864L2.571,11.808l6.28,6.121L7.368,26.573l7.762-4.081,7.762,4.081L21.411,17.93l6.28-6.121Z"
                                        transform="translate(-2.571 -2.683)"
                                        fill="#dcdcdc"
                                      ></path>
                                    </svg>
                                    <span>(4)</span>
                                  </p>
                                </div>
                              </div>
                              <div className="date-botton">
                                <Link className="btn becomaninstructor">
                                  26 Sept'22
                                </Link>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              lit. Pellque non pretium nulla, sed venenatis
                              fels. Fue volutpat tortor quis lobortis dus,
                              consectetur adipis. Pellque non pretium nulla, sed
                              venenatis fels
                              <Link className="btn becomaninstructor" to="/">
                                READ MORE
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>

              <div className="col-md-12 col-lg-5 col-xl-4 col-12 sidebar-details">
                <div className="feescharges-sec availability specialization specialization2">
                  <h2>Specialization</h2>
                  <div className="specialization-content">
                    <div className="Specialization-tag">
                      {instructorDetails?.userspecialization?.map(
                        (ele, index) => (
                          <Link
                            to="#!"
                            className="btn becomaninstructor"
                            key={index}
                          >
                            {ele?.subject_name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="feescharges-sec availability specialization">
                  <h2>Tags</h2>
                  <div className="specialization-content">
                    <div className="Specialization-tag">
                      <Link to="#!" className="btn becomaninstructor">
                        Course
                      </Link>
                      <Link to="#!" className="btn becomaninstructor">
                        Instructor
                      </Link>
                      <Link to="#!" className="btn becomaninstructor">
                        Tutor
                      </Link>
                      <Link to="#!" className="btn becomaninstructor">
                        Great
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-description groupclass-card">
              <div className="groupclasses">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <h2>Group Classes</h2>
                  </div>
                  <div className="col-lg-6 viewall">
                    <p>
                      <Link className="btn" to="/groupclasses">
                        View All
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-6 col-lg-4 col-12">
                    <Groupclassescard
                      ImageUrl="/images/Groupclasses1.png"
                      CourseName="Did you make your New Year resolutions?"
                      HrPrice="100"
                      TotalSeats="10"
                      BookedSeats="5"
                      ProfileImage="/images/rosymela.png"
                      TeacherName="Rosy Mela"
                      DateTime="Mon, 05 Sept'22  9 AM"
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 col-12">
                    <Groupclassescard
                      ImageUrl="/images/Groupclasses22.png"
                      CourseName="Did you make your New Year resolutions?"
                      HrPrice="150"
                      TotalSeats="10"
                      BookedSeats="5"
                      ProfileImage="/images/rosymela.png"
                      TeacherName="Rosy Mela"
                      DateTime="Mon, 05 Sept'22  9 AM"
                    />
                  </div>

                  <div className="col-md-6 col-lg-4 col-12">
                    <Groupclassescard
                      ImageUrl="/images/Groupclasse33.png"
                      CourseName="Did you make your New Year resolutions?"
                      HrPrice="250"
                      TotalSeats="10"
                      BookedSeats="5"
                      ProfileImage="/images/rosymela.png"
                      TeacherName="Rosy Mela"
                      DateTime="Mon, 05 Sept'22  9 AM"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <Modal
        className="center-modal class-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Class Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="classtype-section classtype-section-radio-box">
            <div className="radio-box">
              <div className="check-box-create">
                <input
                  type="radio"
                  id="plan1"
                  name="month"
                  onChange={(e) => setModalNavigateURL(e.target.value)}
                  value={`/ondemandclass/subject-and-level/${id}`}
                />
                <label htmlFor="plan1">On Demand Class</label>
              </div>
            </div>
            <div className="radio-box">
              <div className="check-box-create">
                <input
                  type="radio"
                  id="plan2"
                  name="month"
                  onChange={(e) => setModalNavigateURL(e.target.value)}
                  value={`/scheduleclass/subject-and-level/${id}`}
                />
                <label htmlFor="plan2">Schedule Class</label>
              </div>
            </div>
            <div className="radio-box">
              <div className="check-box-create">
                <input
                  type="radio"
                  id="plan3"
                  name="month"
                  onChange={(e) => setModalNavigateURL(e.target.value)}
                  value={`/problemsolvingclass/upload-problem/${id}`}
                />
                <label htmlFor="plan3">Problem Solving Class</label>
              </div>
            </div>
            <div className="radio-box">
              <div className="check-box-create">
                <input
                  type="radio"
                  id="plan4"
                  name="month"
                  onChange={(e) => setModalNavigateURL(e.target.value)}
                  value={`/subscription/selectplan/${id}`}
                />
                <label htmlFor="plan4">Subscription</label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="email-send continue">
            <button
              type="button"
              className="btn becomaninstructor"
              onClick={handleRedirectClassType}
            >
              Continue
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Instructordetail;
