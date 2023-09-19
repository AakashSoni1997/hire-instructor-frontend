import React, { useState } from "react";
import "./Instructorsstudent.scss";
import ModalVideo from "react-modal-video";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { baseUrlPostGres } from "../../redux/constant";
import { toast } from "react-toastify";

const Instructorsstudent = ({
    ele,
    id,
    ImageUrl,
    InstructorsName,
    Flagimage,
    Checkmark,
    ExperienceYears,
    CompletedLesson,
    SubName1,
    SubName2,
    SubName3,
    HrsPrice,
    Rating,
    UserNumberRating,
    Description,
    wishlistId,
    unactive,
    active,
}) => {
    const {
        first_name,
        last_name,
        email,
        otp,
        otp_verify,
        country_id,
        state_id,
        city_id,
        descriptions,
        short_descriptions,
        phone_number,
        gender,
        role,
        stripe_user_id,
        profile_image,
        profile_video,
        proofId_image,
        proofaddress_image,
        status,
        register_status,
        auth_token,
        is_login,
        is_varificationbadge,
        email_verify_token,
        email_verified_at,
        dob,
        term_condition,
        ins_level_id,
        school_name,
        percentage,
        subject_name,
        clg_start_year,
        clg_end_year,
        certificate_image,
        country,
        user_tutor_subject,
        user_extra_info,
    } = ele;
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const [modalNavigateURL, setModalNavigateURL] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setModalNavigateURL("")
    };
    const handleShow = (id) => {
        setShow(true);
    };

    const handleWishList = (e) => {
    };

    const handleRedirectClassType = () => {
        modalNavigateURL ? navigate(modalNavigateURL) : toast.error("Please select class type", { theme: "colored" })
    }

    return (
        <>
            <div className="col-md-12 col-lg-6 col-12">
                <div className="card-main-section" >
                    <div className="card-first">
                        <div className="video-section">
                            <img
                                src={`${baseUrlPostGres()}${profile_image}`}
                                alt={ele.first_name}
                            />
                            <React.Fragment>
                                <ModalVideo
                                    channel="custom"
                                    url={`${baseUrlPostGres()}${profile_video}`}
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
                            <div className="on-off-btn">
                                {is_login === 0 ? (
                                    <span className="unactive">{is_login}</span>
                                ) : (
                                    <span className="active">{is_login}</span>
                                )}
                            </div>

                            <div className="heart-icon">
                                <div className="btn">
                                    <input
                                        required
                                        type="checkbox"
                                        id={ele.id}
                                        onClick={handleWishList}
                                    />
                                    <label htmlFor={ele.id}></label>
                                </div>
                            </div>
                        </div>

                        <div className="details-box">
                            <div className="details-box-first">
                                <h1 className="flagcheckmark">
                                    <Link to={`/instructordetail/${ele.id}`} >{`${ele.first_name} ${ele.last_name}`}</Link>
                                    <span>{ele.country?.emoji}</span>
                                    {is_varificationbadge === 0 && (
                                        <span className="Checkmark">
                                            <img src={Checkmark} alt="" />
                                        </span>
                                    )}
                                </h1>
                                <h2>Experience</h2>
                                <p>
                                    {user_extra_info === null ||
                                        user_extra_info === undefined ||
                                        user_extra_info === 0
                                        ? "fresher"
                                        : user_extra_info[0]?.exp_year}
                                </p>
                                <h3>Completed Lessons</h3>
                                <p>
                                    {ele.id === 2 ? (
                                        <b>25</b>
                                    ) : ele.id === 7 ? (
                                        <b>60</b>
                                    ) : ele.id === 8 ? (
                                        <b>15</b>
                                    ) : (
                                        ""
                                    )}
                                    +
                                </p>
                                <h4>Subject</h4>
                                <p>
                                    {user_tutor_subject.map((ele, index) =>
                                        index > 0
                                            ? `| ${ele.tutor_sub_name}`
                                            : `${ele.tutor_sub_name} `
                                    )}
                                </p>
                            </div>
                            <div className="details-box-first2">
                                <h1>
                                    $
                                    {Math.min(
                                        ele?.user_extra_info[0]?.on_demand_price,
                                        ele?.user_extra_info[0]?.schedule_price,
                                        ele?.user_extra_info[0]?.problem_solving_price
                                    )}
                                    -
                                    {Math.max(
                                        ele?.user_extra_info[0]?.on_demand_price,
                                        ele?.user_extra_info[0]?.schedule_price,
                                        ele?.user_extra_info[0]?.problem_solving_price
                                    )}
                                    /hr
                                </h1>
                                <p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="15.217"
                                        viewBox="0 0 16 15.217"
                                    >
                                        <path
                                            id="Icon_metro-star-full"
                                            data-name="Icon metro-star-full"
                                            d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                            transform="translate(-2.571 -2.683)"
                                            fill="#fed756"
                                        />
                                    </svg>
                                    <span>
                                        {ele.id === 2 ? (
                                            <b>4/5 (1125)</b>
                                        ) : ele.id === 7 ? (
                                            <b>4/5 (125)</b>
                                        ) : ele.id === 8 ? (
                                            <b>2/5 (675)</b>
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </p>
                                <button
                                    className="btn becomaninstructor"
                                    onClick={() => handleShow(id)}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="read-more-box">
                        <p>
                            {descriptions?.slice(0, 80)}
                            <Link
                                className="btn becomaninstructor"
                                to={`/instructordetail/${ele.id}`}
                            >
                                READ MORE
                            </Link>
                        </p>
                    </div>
                </div>
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
                                    name="month" onChange={(e) => setModalNavigateURL(e.target.value)}
                                    value={`/ondemandclass/subject-and-level/${ele.id}`}
                                />
                                <label htmlFor="plan1">On Demand Class</label>
                            </div>
                        </div>
                        <div className="radio-box">
                            <div className="check-box-create">
                                <input type="radio" id="plan2" name="month" onChange={(e) => setModalNavigateURL(e.target.value)} value={`/scheduleclass/subject-and-level/${ele.id}`} />
                                <label htmlFor="plan2">Schedule Class</label>
                            </div>
                        </div>
                        <div className="radio-box">
                            <div className="check-box-create">
                                <input type="radio" id="plan3" name="month" onChange={(e) => setModalNavigateURL(e.target.value)} value={`/problemsolvingclass/upload-problem/${ele.id}`} />
                                <label htmlFor="plan3">Problem Solving Class</label>
                            </div>
                        </div>
                        <div className="radio-box">
                            <div className="check-box-create">
                                <input type="radio" id="plan4" name="month" onChange={(e) => setModalNavigateURL(e.target.value)} value={`/subscription/selectplan/${ele.id}`} />
                                <label htmlFor="plan4">Subscription</label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="email-send continue">
                        <button type="button" className="btn becomaninstructor" onClick={handleRedirectClassType}>
                            Continue
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Instructorsstudent;
