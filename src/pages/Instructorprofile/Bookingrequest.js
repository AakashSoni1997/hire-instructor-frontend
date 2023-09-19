import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Menu from "../../components/Bookingrequest/Bookingrequestcard";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import Modal from "react-bootstrap/Modal";
import "./Instructorprofile.scss";
import {
    InstructorBookingRequestList,
} from "../../redux/actions/instructorAction";
import { useDispatch, useSelector } from "react-redux";
import {  sendUserIDToBackend, socket} from "../../redux/constant/Socket";
import { Pagination } from "../../components/Hooks/Pagination";

const options = [
    { value: "Select Reason A", label: "Select Reason A" },
    { value: "Select Reason B", label: "Select Reason B" },
];
const PageSize=10;
const Bookingrequest = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)

    const [items, setItems] = useState(Menu);
    const [selectedOption, setSelectedOption] = useState(null);
    const [show, setShow] = useState(false);
    const [showTwo, rejectShow] = useState(false);
    const [checkId, setCheckId] = useState("");
    // const [item, setItem] = useState({ kindOfStand: "All", another: "another" });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseTwo = () => rejectShow(false);
    const handleShowTwo = () => rejectShow(true);

    const bookingRequestList = useSelector(
        (state) => state?.instructor?.instructor_booking_request_list
    );

    // const filterItem = (categItem) => {
    //     const upadtedItems = Menu.filter((curElem) => {
    //         return curElem.category === categItem;
    //     });
    //     setItems(upadtedItems);
    // };

    useEffect(() => { }, [checkId]);

    useEffect(() => {
        sendUserIDToBackend()
        dispatch(InstructorBookingRequestList());
    }, [dispatch]);

    // useEffect(() => {
    //     removeSocketAllListeners()
    //     socketConnection()
    // }, [])

    const handleAcceptRequest = (value) => {
        const token = `Bearer ${JSON.parse(localStorage.getItem("security_auth"))?.token}`;
        let socket_emit_data = {
            bookingId: value.id,
            type: value.booking_type,
            student_user_id: value.user_id,
            token
        }
        socket.emit("instructor_booking_request", socket_emit_data);
        socket.on("instructor_booking_zoom_details", (accept) => {
            console.log("socket accept", accept);
            if (accept?.zoom_url?.length > 0) {
                window.open(accept?.zoom_url, "_blank");
            }
        });
    };


    return (
        <>
            <div id="footer-bottom" className="instructor-profile">
                <Header />
                <div className="instru-bg-image">
                    <h1>Booking Request</h1>
                    <p>
                        Home / <span>Booking Request</span>
                    </p>
                </div>

                <div className="myprofile-section">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <Instructorsidebar />
                            </div>

                            <div className="col-md-12 col-lg-8 col-xl-8">
                                <div className="profile-top-heading">
                                    <h2>Booking Request</h2>
                                </div>
                                <div className="booking-request-section">
                                    <div className="booking-filter">
                                        {/* <div className="btn" onClick={() => setItems(bookingRequestList)}>
                      <Form.Group controlId="kindOfStand">
                        <Form.Check
                          value="All"
                          type="radio"
                          aria-label="radio 1"
                          label="All"
                          onChange={handleChange}
                          checked={kindOfStand === "All"}
                        />
                      </Form.Group>
                    </div> */}

                                        {/* <div className="btn" onClick={() => filterItem("OnDemand")}>
                      <Form.Group controlId="kindOfStand2">
                        
                        <Form.Check
                          value="On Demand"
                          type="radio"
                          aria-label="radio 1"
                          label="On Demand"
                          onChange={handleChange}
                          checked={kindOfStand === "On Demand"}
                        />
                      </Form.Group>
                    </div>

                    <div
                      className="btn"
                      onClick={() => filterItem("Scheduled")}
                    >
                      <Form.Group controlId="kindOfStand3">
                        
                        <Form.Check
                          value="Scheduled"
                          type="radio"
                          aria-label="radio 1"
                          label="Scheduled"
                          onChange={handleChange}
                          checked={kindOfStand === "Scheduled"}
                        />
                      </Form.Group>
                    </div>

                    <div
                      className="btn"
                      onClick={() => filterItem("ProblemSolving")}
                    >
                      <Form.Group controlId="kindOfStand4">
                        
                        <Form.Check
                          value="Problem Solving"
                          type="radio"
                          aria-label="radio 1"
                          label="Problem Solving"
                          onChange={handleChange}
                          checked={kindOfStand === "Problem Solving"}
                        />
                      </Form.Group>
                    </div>

                    <div
                      className="btn"
                      onClick={() => filterItem("GroupClasses")}
                    >
                      <Form.Group controlId="kindOfStand5">
                        
                        <Form.Check
                          value="Group Classes"
                          type="radio"
                          aria-label="radio 1"
                          label="Group Classes"
                          onChange={handleChange}
                          checked={kindOfStand === "Group Classes"}
                        />
                      </Form.Group>
                    </div> */}
                                    </div>

                                    <div className="blog-section">
                                        <div className="container">
                                            <div className="row g-5">
                                                {bookingRequestList?.map((elem, index) => (
                                                    <>
                                                        <div className="col-12 col-xxl-6" key={index}>
                                                            <div className="bookingrequest-card-main">
                                                                <div className="booking-card">
                                                                    <div className="image-box">
                                                                        <img src={elem?.profile_image} alt="" />
                                                                    </div>
                                                                    <div className="booking-details">
                                                                        <div className="heading-price">
                                                                            <h2>{`${elem?.user?.first_name} ${elem?.user?.last_name}`}</h2>
                                                                            <h3>$20</h3>
                                                                        </div>
                                                                        <p>4min20sec</p>
                                                                        <h4>Subject & Level</h4>
                                                                        <span>
                                                                            {elem?.user_tutor_subject?.tutor_sub_name}
                                                                            ({elem?.class_level?.class_name})
                                                                        </span>
                                                                        <h4>Class Type</h4>
                                                                        <span>
                                                                            {elem?.booking_type === 1
                                                                                ? "On Demand"
                                                                                : elem?.booking_type === 2
                                                                                    ? "Scheduled"
                                                                                    : elem?.booking_type === 3
                                                                                        ? "Problem Solving"
                                                                                        : elem?.booking_type === 4
                                                                                            ? "Group Classes"
                                                                                            : ""}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="eject-accept">
                                                                    {elem?.booking_type === 1 && (
                                                                        <Link
                                                                            className="btn reject"
                                                                            onClick={handleShowTwo}
                                                                        >
                                                                            Reject
                                                                        </Link>
                                                                    )}
                                                                    {elem?.booking_type === 1 && (
                                                                        <button
                                                                            onClick={() => handleAcceptRequest(elem)}
                                                                            className="btn accept"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                    )}
                                                                    {elem?.booking_type === 3 && (
                                                                        <Link
                                                                            className="btn accept"
                                                                            onClick={handleShow}
                                                                        >
                                                                            View Detail
                                                                        </Link>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={bookingRequestList.length}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                />
                <Footer />
            </div>

            <Modal
                className="center-modal class-modal problemsolving"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Problem Solving</Modal.Title>
                </Modal.Header>
                <Modal.Body className="blogdetails-modal">
                    <div className="classtype-section">
                        <h2>Subject & Level</h2>
                        <p>English Literature Physics (A-level)</p>
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h2>Detailed Problem</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            quis velit id magna accumsan pellentesque. Ut vulputate felis nec
                            felis venenatis mollis. Fusce tincidunt quis urna at tristique.
                            Quisque at pretium risus, et placerat odio. Quisque ultrices
                            molestie magna, sit amet fringilla sem lobortis et.
                        </p>
                        <div className="pdf-dection">
                            <h2>Attachment</h2>

                            <div className="pdf-img">
                                <div className="pdf-img-box">
                                    <img src="/images/pdf-icon.png" alt="" />
                                </div>
                                <div className="pdf-content">
                                    <p>detailed-problem-screenshot.pdf</p>
                                    <Link className="btn" to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14.5"
                                            height="17.5"
                                            viewBox="0 0 14.5 17.5"
                                        >
                                            <g
                                                id="Group_4802"
                                                data-name="Group 4802"
                                                transform="translate(-12507.25 -9581.25)"
                                            >
                                                <path
                                                    id="Path_650"
                                                    data-name="Path 650"
                                                    d="M14,3V6.556a.889.889,0,0,0,.889.889h3.556"
                                                    transform="translate(12502.556 9579)"
                                                    fill="none"
                                                    stroke="#005eb5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    id="Path_651"
                                                    data-name="Path 651"
                                                    d="M16.143,19H6.857A1.819,1.819,0,0,1,5,17.222V4.778A1.819,1.819,0,0,1,6.857,3h6.5L18,7.444v9.778A1.819,1.819,0,0,1,16.143,19Z"
                                                    transform="translate(12503 9579)"
                                                    fill="none"
                                                    stroke="#005eb5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                                <line
                                                    id="Line_178"
                                                    data-name="Line 178"
                                                    y2="5"
                                                    transform="translate(12514.268 9589)"
                                                    fill="none"
                                                    stroke="#005eb5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    id="Path_652"
                                                    data-name="Path 652"
                                                    d="M9,14l2.667,2.667L14.333,14"
                                                    transform="translate(12502.834 9577.777)"
                                                    fill="none"
                                                    stroke="#005eb5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                            </g>
                                        </svg>
                                        Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="email-send">
                        <div className="reject">
                            <Link className="btn" to="/">
                                Reject
                            </Link>
                        </div>
                        <div className="accept">
                            <Link className="btn" to="/">
                                Accept
                            </Link>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                className="center-modal class-modal problemsolving rejectbooking"
                show={showTwo}
                onHide={handleCloseTwo}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Reject Booking</Modal.Title>
                </Modal.Header>
                <Modal.Body className="blogdetails-modal">
                    <div className="classtype-section dropdown-select">
                        <div className="App">
                            <ReactSelect
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                placeholder="Reason of Cancellation"
                            />
                        </div>
                        <div className="form-group floating-label">
                            <textarea
                                id="textarea"
                                className="form-control"
                                rows="3"
                            ></textarea>
                            <label htmlFor="textarea">Describe Reason</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="email-send">
                        <div className="accept">
                            <Link className="btn" to="/">
                                Submit
                            </Link>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Bookingrequest;
