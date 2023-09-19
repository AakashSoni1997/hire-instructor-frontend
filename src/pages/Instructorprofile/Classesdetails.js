import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Instructorclassesdetails from "../../components/Instructorclassesdetails/Instructorclassesdetails";
import { Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Tab, Tabs} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Instructorprofile.scss';



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

    const [items, setItems] = useState(Instructorclassesdetails);

    const filterItem = (categItem) => {
        const upadtedItems = Instructorclassesdetails.filter((curElem) => {
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
                       <div className='col-md-12 col-lg-4 col-xl-4'>
                       <Instructorsidebar />
                        </div>

                        <div className='col-md-12 col-lg-8 col-xl-8'>
                        <div className='profile-top-heading'>
                                    <h2>Classes Details</h2>
                        </div>

                    <div className='booking-request-section classes-tabs-three'>
                    <Tabs defaultActiveKey="upcomingclasses" id="uncontrolled-tab-example">
                         <Tab eventKey="upcomingclasses" title="Upcoming Classes">  
                             <div className="booking-filter">
                                <div className="btn" onClick={() => setItems(Instructorclassesdetails)}> 
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
                                                    const {image, name, price, subject, level, time, classtype, subjectclasstype, subjectclasstypelevel, cancel, workstation, comment, viewdetail, groupclassbox} = elem;
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
                                                                        <div className='subjectclasstypelevel2 subjectclasstypelevel22'>
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
                                                                {workstation && <Link className="btn accept workstation" onClick={handleShow}>{workstation}</Link>}
                                                                {viewdetail && <Link to="/problemsolving" className="btn accept viewdetail">{viewdetail}</Link>}
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
                                <div className="btn" onClick={() => setItems(Instructorclassesdetails)}> 
                                    <Form.Group controlId="kindOfStand">
                                        <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                                            </Form.Group>
                                    </div>

                                    <div className="btn" onClick={() => filterItem('ondemand')}>
                                        <Form.Group controlId="kindOfStand6"> <Form.Check value="On Demand" type="radio" aria-label="radio 1" label="On Demand"  onChange={handleChange} checked={kindOfStand === "On Demand"} />
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
                                                    const {image, name, price, time, subject, level, rateyourexperience, subjectclasstype, subjectclasstypelevel, classtype, ejectacceptbutton, RatingPending, comment, rating, groupclassbox} = elem;
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

                                                                {RatingPending  && <Link className="btn reject rating">{RatingPending}</Link>}
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
                                <div className="btn" onClick={() => setItems(Instructorclassesdetails)}> 
                                    <Form.Group controlId="kindOfStand">
                                        <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                                            </Form.Group>
                                    </div>

                                    <div className="btn" onClick={() => filterItem('ondemand')}>
                                        <Form.Group controlId="kindOfStand6"> <Form.Check value="On Demand" type="radio" aria-label="radio 1" label="On Demand"  onChange={handleChange} checked={kindOfStand === "On Demand"} />
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
                                                                            <div className='heading-description'>
                                                                            <h2>{name}</h2>
                                                                            </div>
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

            <Modal className='center-modal class-modal problemsolving rejectbooking' show={showratecard} onHide={handleCloseratecard}>
                <Modal.Header closeButton>
                    <Modal.Title>Rate your Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section'>
                    <div className="star-rating">
                               <input required type="radio" id="5-stars" name="rating" value="5" />
                                <label htmlFor="5-stars" className="star">&#9733;</label>
                               <input required type="radio" id="4-stars" name="rating" value="4.5" />
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
