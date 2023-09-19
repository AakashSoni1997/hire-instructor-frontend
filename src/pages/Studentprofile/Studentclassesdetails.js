import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import Studentclassesdetailscard from "../../components/Studentclassesdetailscard/Studentclassesdetailscard";
import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Tab, Tabs} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../Instructorprofile/Instructorprofile.scss';



const Classesdetails = () => {

    const [show,  setShow] = useState(false);
    const [showratecard,  ratecardShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseratecard = () => ratecardShow(false);
    const handleShowratecard = () => ratecardShow(true);

    const [item, setItem] = useState({ kindOfStand: "All", another: "another" });

    const { kindOfStand } = item;
  
    const handleChange = e => {
      e.persist();  
      setItem(prevState => ({
        ...prevState,
        kindOfStand: e.target.value
      }));
    };

    const [items, setItems] = useState(Studentclassesdetailscard);

    const filterItem = (categItem) => {
        const upadtedItems = Studentclassesdetailscard.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(upadtedItems);
    }
    
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Classes Details</h1>
                    <p>Home / <span>Classes Details</span></p>
                </div>

            <div className='myprofile-section classesdetails-page'>
                <div className='container'>
                    <div className='row gx-5'>
                       <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                        </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                        <div className='profile-top-heading'>
                                    <h2>Classes Details</h2>
                        </div>

                    <div className='booking-request-section classes-tabs-three'>
                    <Tabs defaultActiveKey="upcomingclasses" id="uncontrolled-tab-example">
                         <Tab eventKey="upcomingclasses" title="Upcoming Classes">  
                             <div className="booking-filter">
                                <div className="btn" onClick={() => setItems(Studentclassesdetailscard)}> 
                                    <Form.Group controlId="kindOfStand">
                                        <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                                            </Form.Group>
                                    </div>

                                        <div className="btn" onClick={() => filterItem('Scheduled')}>
                                        <Form.Group controlId="kindOfStand3"> <Form.Check value="Scheduled" type="radio" aria-label="radio 1" label="Pending"  onChange={handleChange} checked={kindOfStand === "Scheduled"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('ProblemSolving')}>
                                        <Form.Group controlId="kindOfStand4"> <Form.Check value="Problem Solving" type="radio" aria-label="radio 1" label="Accepted"  onChange={handleChange} checked={kindOfStand === "Problem Solving"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('GroupClasses')}>
                                        <Form.Group controlId="kindOfStand5"> <Form.Check value="Group Classes" type="radio" aria-label="radio 1" label="Rejected"  onChange={handleChange} checked={kindOfStand === "Group Classes"} />
                                            </Form.Group>
                                        </div>
                                    </div>

                                <div className="blog-section">
                                    <div className="container">
                                        <div className="row g-5">
                                            {
                                                items.map((elem) => {
                                                    const {image, name, price, time, subject, level, classtype, cancel, workstation, comment, viewdetail, groupclassbox, Panding, Rejected, Accepted, subjectclasstype, subjectclasstypelevel} = elem;
                                                    return (
                                                        <>
                                                            <div className="col-12 col-xxl-6">
                                                                <div className="bookingrequest-card-main">
                                                                   <div className='booking-card'>
                                                                   <div className="image-box">
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                    <div className='booking-details'>
                                                                        <div className='heading-price'>
                                                                            <div className='heading-description'>
                                                                            <h2>{name}</h2>
                                                                            <p>{time}</p>
                                                                            </div>
                                                                            <div className='pending-box'>
                                                                            <h3>{price}</h3>
                                                                            {Panding && <Link className="btn pending">{Panding}</Link>}
                                                                            {Accepted && <Link className="btn pending accepted">{Accepted}</Link>}
                                                                            {Rejected && <Link className="btn pending rejected">{Rejected}</Link>}
                                                                            </div>
                                                                        </div>

                                                                        { subjectclasstype &&<div>
                                                                            <h4>Subject & Level</h4>
                                                                        <span>{subject} ({level})</span>
                                                                        <h4>Class Type</h4>
                                                                        <span>{classtype}</span>
                                                                    </div>}

                                                                    { subjectclasstypelevel &&<div className='subjectclasstypelevel'>
                                                                        <div className='subjectclasstypelevel2'>
                                                                        <h4>Class Type</h4>
                                                                        <span>Group Classes</span>
                                                                        </div>
                                                                        <div className='subjectclasstypelevel2'>
                                                                        <h4>Level</h4>
                                                                        <span>A-level</span>
                                                                        </div>
                                                                    </div>}
                                                                    </div>
                                                                   </div>

                                                                   { groupclassbox &&<div>
                                                                    <div className='group-classcard-main'>
                                                                        <div className='date-time-box date-time-box2'>
                                                                            <h4>Date & Time</h4>
                                                                            <span>05 Sept'22  9am</span>
                                                                        </div>
                                                                        <div className='date-time-box'>
                                                                            <h4>Duration</h4>
                                                                            <span>2 hrs</span>
                                                                        </div>

                                                                        <div className='date-time-box date-time-box2'>
                                                                            <h4>Booked Seats</h4>
                                                                            <span>5 Seats</span>
                                                                        </div>

                                                                        <div className='date-time-box'>
                                                                            <h4>Total Seats</h4>
                                                                            <span>10 Seats</span>
                                                                        </div>
                                                                    </div>
                                                                    </div>}

                                                                  


                                                            <div className="eject-accept">
                                                                {cancel && <Link className="btn reject">{cancel}</Link>}
                                                                {/* {rating  && <Link className="btn reject rating">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                                    </svg>
                                                                    <span>(4)</span>
                                                                </Link>} */}
                                                                {workstation && <Link className="btn accept workstation">{workstation}</Link>}
                                                                {viewdetail && <Link className="btn accept viewdetail" onClick={handleShow}>{viewdetail}</Link>}
                                                                {comment && <Link className="btn accept comment"><img src={comment} alt="" /></Link>}
                                                            </div>

                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                                </Tab>

                            <Tab eventKey="completedclasses" title="Completed Classes">  
                            <div className="booking-filter">
                                <div className="btn" onClick={() => setItems(Studentclassesdetailscard)}> 
                                    <Form.Group controlId="kindOfStand">
                                        <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                                            </Form.Group>
                                    </div>

                                        <div className="btn" onClick={() => filterItem('Scheduled')}>
                                        <Form.Group controlId="kindOfStand3"> <Form.Check value="Scheduled" type="radio" aria-label="radio 1" label="Scheduled"  onChange={handleChange} checked={kindOfStand === "Scheduled"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('ProblemSolving')}>
                                        <Form.Group controlId="kindOfStand4"> <Form.Check value="Problem Solving" type="radio" aria-label="radio 1" label="Problem Solving"  onChange={handleChange} checked={kindOfStand === "Problem Solving"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('GroupClasses')}>
                                        <Form.Group controlId="kindOfStand5"> <Form.Check value="Group Classes" type="radio" aria-label="radio 1" label="Group Classes"  onChange={handleChange} checked={kindOfStand === "Group Classes"} />
                                            </Form.Group>
                                        </div>
                                    </div>

            <div className="blog-section">
                <div className="container">
                    <div className="row g-5">
                        {
                        items.map((elem) => {
                            const {image, name, price, time, subject, level, rateyourexperience, classtype, ejectacceptbutton, RatingPending, comment, rating, groupclassbox, subjectclasstype, subjectclasstypelevel} = elem;
                            return (
                                    <>
                                    <div className="col-12 col-xxl-6">
                                        <div className="bookingrequest-card-main">
                                            <div className='booking-card'>
                                            <div className="image-box">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className='booking-details'>
                                                <div className='heading-price'>
                                                    <div className='heading-description'>
                                                    <h2>{name}</h2>
                                                    <p>{time}</p>
                                                    </div>
                                                    <div className='pending-box'>
                                                    <h3>{price}</h3>
                                                    </div>
                                                </div>

                                                { subjectclasstype &&<div>
                                                    <h4>Subject & Level</h4>
                                                <span>{subject} ({level})</span>
                                                <h4>Class Type</h4>
                                                <span>{classtype}</span>
                                            </div>}

                                            { subjectclasstypelevel &&<div className='subjectclasstypelevel'>
                                                <div className='subjectclasstypelevel2'>
                                                <h4>Class Type</h4>
                                                <span>Group Classes</span>
                                                </div>
                                                <div className='subjectclasstypelevel2'>
                                                <h4>Level</h4>
                                                <span>A-level</span>
                                                </div>
                                            </div>}
                                            </div>
                                            </div>

                                            { groupclassbox &&<div>
                                            <div className='group-classcard-main'>
                                                <div className='date-time-box date-time-box2'>
                                                    <h4>Date & Time</h4>
                                                    <span>05 Sept'22  9am</span>
                                                </div>
                                                <div className='date-time-box'>
                                                    <h4>Duration</h4>
                                                    <span>2 hrs</span>
                                                </div>

                                                <div className='date-time-box date-time-box2'>
                                                    <h4>Booked Seats</h4>
                                                    <span>400 Seats</span>
                                                </div>

                                                <div className='date-time-box'>
                                                    <h4>Total Seats</h4>
                                                    <span>500 Seats</span>
                                                </div>
                                            </div>
                                            </div>}


                                            { ejectacceptbutton &&<div className="eject-accept">
                                        {/* {cancel && <Link className="btn reject">{cancel}</Link>} */}
                                        {rating  && <Link className="btn reject rating">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                            </svg>
                                            <span>(4)</span>
                                        </Link>}

                                        {RatingPending  && <Link to="/studentcompletedclassesproblemsolving" className="btn reject rating">{RatingPending}</Link>}
                                        {/* {workstation && <Link className="btn accept workstation">{workstation}</Link>} */}
                                        {rateyourexperience && <Link className="btn accept workstation" onClick={handleShowratecard}>{rateyourexperience}</Link>}
                                        {/* {viewdetail && <Link to="/problemsolving" className="btn accept viewdetail">{viewdetail}</Link>} */}
                                        {comment && <Link className="btn accept comment"><img src={comment} alt="" /></Link>}
                                    </div>}


                                        </div>
                                    </div>
                                    </>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                            </Tab>

                            <Tab eventKey="cancelledclasses" title="Cancelled Classes">  
                            <div className="booking-filter">
                                <div className="btn" onClick={() => setItems(Studentclassesdetailscard)}> 
                                    <Form.Group controlId="kindOfStand">
                                        <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                                            </Form.Group>
                                    </div>

                                        <div className="btn" onClick={() => filterItem('Scheduled')}>
                                        <Form.Group controlId="kindOfStand3"> <Form.Check value="Scheduled" type="radio" aria-label="radio 1" label="Scheduled"  onChange={handleChange} checked={kindOfStand === "Scheduled"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('ProblemSolving')}>
                                        <Form.Group controlId="kindOfStand4"> <Form.Check value="Problem Solving" type="radio" aria-label="radio 1" label="Problem Solving"  onChange={handleChange} checked={kindOfStand === "Problem Solving"} />
                                            </Form.Group>
                                        </div>

                                        <div className="btn" onClick={() => filterItem('GroupClasses')}>
                                        <Form.Group controlId="kindOfStand5"> <Form.Check value="Group Classes" type="radio" aria-label="radio 1" label="Group Classes"  onChange={handleChange} checked={kindOfStand === "Group Classes"} />
                                            </Form.Group>
                                        </div>
                                    </div>

                                <div className="blog-section">
                                    <div className="container">
                                        <div className="row g-5">
                                            {
                                                items.map((elem) => {
                                                    const {image, name, price, time, subject, level, classtype, cancelledclasses} = elem;
                                                    return (
                                                        <>
                                                            <div className="col-12 col-xxl-6">
                                                                <div className="bookingrequest-card-main">
                                                                   <div className='booking-card'>
                                                                   <div className="image-box">
                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                    <div className='booking-details'>
                                                                        <div className='heading-price'>
                                                                            <h2>{name}</h2>
                                                                            <h3>{price}</h3>
                                                                        </div>
                                                                        <p>{time}</p>
                                                                        <h4>Subject & Level</h4>
                                                                        <span>{subject} ({level})</span>
                                                                        <h4>Class Type</h4>
                                                                        <span>{classtype}</span>
                                                                    </div>
                                                                   </div>

                                                                   { cancelledclasses &&<div>
                                                                    <div className='group-classcard-main group-classcard-main2'>
                                                                        <div className='date-time-box date-time-box2'>
                                                                            <h4>Reason of Cancellation</h4>
                                                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                                        </div>
                                                                        <div className='date-time-box'>
                                                                            <h4>Describe Reason</h4>
                                                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis velit id magna accumsan pellentesque ulputate felis nec felis venenatis mollis fusce tincidunt quis urna at tristique.</span>
                                                                        </div>
                                                                    </div>
                                                                    </div>}
                                                                   
{/* 
                                                            <div className="eject-accept">
                                                                {cancel && <Link className="btn reject">{cancel}</Link>}
                                                                {rating  && <Link className="btn reject rating">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                                    </svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                                    </svg>
                                                                    <span>(4)</span>
                                                                </Link>}
                                                                {workstation && <Link className="btn accept workstation" onClick={handleShow}>{workstation}</Link>}
                                                                {viewdetail && <Link to="/problemsolving" className="btn accept viewdetail">{viewdetail}</Link>}
                                                                {comment && <Link className="btn accept comment"><img src={comment} alt="" /></Link>}
                                                            </div> */}

                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
            </div>

            <Modal className='center-modal class-modal problemsolving workstation' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section'>
                        <div className='checkmark'>
                            <img src="images/checkmark.png" alt="" />
                            <p>Your Zoom Link is ready for class</p>
                        </div>
                        <div className='url-box'>
                        <Link className="btn" to="/">https://us04web.zoom.us/j/73933344208?pwd=dXpoSj
                          JKMFdxWVNjd2llYVZud25JUT09#success</Link>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='email-send'>
                <div className='accept'>
                <Link className="btn" to="/">Copy Link</Link>
                </div>
                </div>
                </Modal.Footer>
            </Modal>


            <Modal className='center-modal class-modal problemsolving problemsolvingstudent' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Problem Solving</Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section'>
                    <h2>Subject & Level</h2>
                    <p>English Literature Physics (A-level)</p>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h2>Detailed Problem</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis velit id magna accumsan pellentesque. Ut vulputate felis nec felis venenatis mollis. Fusce tincidunt quis urna at tristique. Quisque at pretium risus, et placerat odio. Quisque ultrices molestie magna, sit amet fringilla sem lobortis et.</p>
                    <div className='pdf-dection'>
                        <h2>Attachment</h2>

                        <div className='pdf-img'>
                            <div className='pdf-img-box'>
                                <img src="/images/pdf-icon.png" alt="" />
                            </div>
                            <div className='pdf-content'>
                                <p>detailed-problem-screenshot.pdf</p>
                                <Link className="btn" to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="17.5" viewBox="0 0 14.5 17.5">
                                        <g id="Group_4802" data-name="Group 4802" transform="translate(-12507.25 -9581.25)">
                                            <path id="Path_650" data-name="Path 650" d="M14,3V6.556a.889.889,0,0,0,.889.889h3.556" transform="translate(12502.556 9579)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                            <path id="Path_651" data-name="Path 651" d="M16.143,19H6.857A1.819,1.819,0,0,1,5,17.222V4.778A1.819,1.819,0,0,1,6.857,3h6.5L18,7.444v9.778A1.819,1.819,0,0,1,16.143,19Z" transform="translate(12503 9579)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                            <line id="Line_178" data-name="Line 178" y2="5" transform="translate(12514.268 9589)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                            <path id="Path_652" data-name="Path 652" d="M9,14l2.667,2.667L14.333,14" transform="translate(12502.834 9577.777)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                        </g>
                                    </svg>
                                 Download
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h2>Reason of Rejection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <h2>Describe Reason</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis velit id magna accumsan pellentesque ulputate felis nec felis venenatis mollis fusce tincidunt quis urna at tristique.</p>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                <div className='email-send'>
                <div className='reject'>
                <Link className="btn" to="/">Reject</Link>
                </div>
                <div className='accept'>
                <Link className="btn" to="/">Accept</Link>
                </div>
                </div>
                </Modal.Footer> */}
            </Modal>

            <Modal className='center-modal class-modal problemsolving rejectbooking' show={showratecard} onHide={handleCloseratecard}>
                <Modal.Header closeButton>
                    <Modal.Title>Rate your Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section'>
                    <div className="star-rating">
                               <input required type="radio" id="5-stars" name="rating" value="5" />
                                <label htmlFor="5-stars" className="star">&#9733;</label>
                               <input required type="radio" id="4-stars" name="rating" value="4" />
                                <label htmlFor="4-stars" className="star">&#9733;</label>
                               <input required type="radio" id="3-stars" name="rating" value="3" />
                                <label htmlFor="3-stars" className="star">&#9733;</label>
                               <input required type="radio" id="2-stars" name="rating" value="2" />
                                <label htmlFor="2-stars" className="star">&#9733;</label>
                               <input required type="radio" id="1-star" name="rating" value="1" />
                                <label htmlFor="1-star" className="star">&#9733;</label>
                        </div>
                        <div className="form-group floating-label">
                            <textarea id="textarea" className="form-control" rows="3" ></textarea>
                            <label htmlFor="textarea">Your review here</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='email-send'>
                <div className='accept'>
                <Link className="btn" to="/">Submit</Link>
                </div>
                </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Classesdetails
