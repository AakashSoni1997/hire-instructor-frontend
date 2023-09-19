
import React,{useState} from "react"
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Accordion } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import './Groupclassescard.scss';



const Groupclassescard = ({ ImageUrl, CourseName, TeacherName, ProfileImage, DateTime, wishlistId, HrPrice, TotalSeats, BookedSeats}) => {

        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <>
            <div className="groupclasses2">
                <div className="three-box-classes">
                <div className='top-img'>
                    <img src={ImageUrl} alt="" />
                    <div className="seats-section">
                        <div>
                            <p>Total Seats : <span>{TotalSeats}</span></p>
                        </div>
                        <div>
                            <p>Booked Seats : <span>{BookedSeats}</span></p>
                        </div>
                    </div>
                    <div className="heart-icon">
                            <div className="btn">
                           <input required type="checkbox" id={wishlistId}/>
                            <label htmlFor={wishlistId}>
                            </label>
                        </div>
                        </div>
                    </div>
                    <h3>{CourseName}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit ellente non pretium nulla, sed venenatis fels.</p>
                    <div className="subject">
                        <div className="subject1 profile-section">
                            <div className="profile-image-box">
                            <img src={ProfileImage} alt="" />
                            <div className="check-icon">
                                <img src="images/checked-mark.png" alt="" />
                            </div>
                            </div>
                            <h3>{TeacherName}</h3>
                        </div>
                        <div className="subject1 date">
                        <Link className="btn">{DateTime}</Link>
                        </div>
                    </div>
                    <div className="subject subject-button">
                    <div className="subject1 subject1-btn">
                        <Link className="btn becomaninstructor" onClick={handleShow}>Book Now</Link>
                        </div>
                        <div className="subject1">
                            <h3>${HrPrice}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='center-modal class-modal group-class-detail-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Group Class Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='classtype-section'>
                        <div className="group-modal-section">
                            <div className="group-img">
                                <img src="images/Groupclasses2211.png" alt="" />
                            </div>
                            <h2>Did you make your New Year resolutions?</h2>
                        <div className="user-profile">
                            <div className="user-profile-card">
                                <div className="profile-box">
                                    <div className="profile-img2">
                                    <img src="images/rosymela.png" alt="" />
                                    <div className="check-mark">
                                        <img src="images/checked-mark.png" alt="" />
                                    </div>
                                    </div>
                                    <span>Rosy Mela</span>
                                    </div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.978" height="19" viewBox="0 0 19.978 19">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M22.549,9.94l-6.9-1L12.56,2.683,9.473,8.937l-6.9,1,4.994,4.868L6.386,21.683l6.173-3.246,6.173,3.246-1.179-6.874L22.549,9.94Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                        </svg>
                                            <span> <b>4/5</b> (1125)</span>
                                        </p>
                                </div>

                                <div className="seats-booked-section">
                                    <div className="list-dropdown-section">
                                         <Dropdown.Item className="user-card" to="/!">A</Dropdown.Item>
                                         <Dropdown.Item className="user-card" to="/!">D</Dropdown.Item>
                                         <Dropdown.Item className="user-card" to="/!">E</Dropdown.Item>
                                         <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic"><span>...</span></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="user-card" to="/!">A</Dropdown.Item>
                                            <Dropdown.Item className="user-card" to="/!">B</Dropdown.Item>
                                            <Dropdown.Item className="user-card" to="/!">C</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <p>5 Seats Booked</p>
                                </div>
                            </div>

                            <div className="user-profile date">
                            <div className="user-profile-card">
                                <h3>$100</h3>
                                </div>
                                <div className="seats-booked-section">
                                    <p>Mo, 05 Sept 22,  9 AM</p>
                                </div>
                            </div>

                    <div className="aboutgroupclass-section">
                        <h2>About this Group Class</h2>
                        <div className="user-profile">
                            <div className="user-profile-card">
                                <p>Level</p>
                                </div>
                                <div className="seats-booked-section">
                                    <p>A-level</p>
                                </div>

                                <div className="user-profile-card">
                                <p>Number of Classes</p>
                                </div>
                                <div className="seats-booked-section">
                                    <p>3</p>
                                </div>

                                <div className="user-profile-card">
                                <p>Class Duration</p>
                                </div>
                                <div className="seats-booked-section">
                                    <p>60 Minutes</p>
                                </div>

                                <div className="user-profile-card">
                                <p>Total Seats</p>
                                </div>
                                <div className="seats-booked-section">
                                    <p>10 Students</p>
                                </div>
                            </div>
                        </div>

                    <div className="tab-section-class">
                    <div className="questions-section">
                        <div className="">
                            <Accordion defaultActiveKey="0" className="row">
                                <div className="col-lg-12">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Full Description</Accordion.Header>
                                        <Accordion.Body>
                                        Do you want the year 2023 to be more productive and fulfilling than 2022? Join me for this unique course, where you will learn effective strategies for setting realistic and achievable goals. We will talk about the S.M.A.R.T goal-setting technique and you will apply what you learned to create your next goals. It will be a very interactive class where we will discuss the difference between short and long term goals and how to achieve them fast. Are you ready to start off the year on the right foot?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-12">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What you will learn</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies nunc, in malesuada lorem. Donec nec dictum mauris. Nulla non nisi sed velit scelerisque consequat nec et purus. Aliquam ac auctor lorem. Sed a lorem ac arcu cursus varius eget a lorem. Quisque rhoncus elit magna, sit amet elementum nisl ultrices eget. Proin dapibus lorem lorem, id mattis risus mollis et. Suspendisse feugiat ac dui congue mollis. Quisque sollicitudin est in malesuada interdum. Ut hendrerit urna nibh, id interdum quam feugiat vel.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>

                                <div className="col-lg-12">
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Classes in this course</Accordion.Header>
                                        <Accordion.Body>
                                        <ol className="course-time-date-drop">
                                            <li>
                                                <div className="row">
                                                   <div className="col-md-8 col-sm-12">
                                                   <h3>Duis porta odio at elit faucibus, et placerat nisi maximus</h3>
                                                   </div>
                                                   <div className="col-md-4 col-sm-12">
                                                   <p>Mo, 05 Sept 22,  9 AM</p>
                                                   </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                   <div className="col-md-8 col-sm-12">
                                                   <h3>Vestibulum ut neque ut purus egestas ultricies.</h3>
                                                   </div>
                                                   <div className="col-md-4 col-sm-12">
                                                   <p>Mo, 05 Sept 22,  9 AM</p>
                                                   </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                   <div className="col-md-8 col-sm-12">
                                                   <h3>Cras viverra nisi non ipsum egestas faucibus id vel magna.</h3>
                                                   </div>
                                                   <div className="col-md-4 col-sm-12">
                                                  <p>Mo, 05 Sept 22,  9 AM</p>
                                                   </div>
                                                </div>
                                            </li>
                                        </ol>  
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                    </div>
                     </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='email-send'>
                <Link className="btn becomaninstructor" to="/">Book Now</Link>
                </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Groupclassescard

