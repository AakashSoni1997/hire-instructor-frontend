import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Dropdown from 'react-bootstrap/Dropdown';
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './Instructorprofile.scss';

const options = [
    { value: "Select Reason A", label: "Select Reason A" },
    { value: "Select Reason B", label: "Select Reason B" },
  ];

const Chats = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const [showTwo,  rejectShow] = useState(false);

    const handleCloseTwo = () => rejectShow(false);
    const handleShowTwo = () => rejectShow(true);

    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Chats</h1>
                    <p>Home / <span>Chats</span></p>
                </div>

            <div className='myprofile-section classesdetails-page'>
                <div className='container'>
                    <div className='row gx-5'>
                       <div className='col-md-12 col-lg-4 col-xl-4'>
                       <Instructorsidebar />
                        </div>

                        <div className='col-md-12 col-lg-8 col-xl-8'>
                        <div className='profile-top-heading'>
                           <h2>Chats</h2>
                        </div>
                        
                        <div className='chat-box-section'>
                            <div className='row gx-5'>
                                <div className='col-lg-5'>
                                <div className='left-card-box'>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.132" height="16.132" viewBox="0 0 16.132 16.132">
                                                    <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
                                                        <path id="Path_144" data-name="Path 144" d="M10.26,3A7.26,7.26,0,1,1,5.126,5.126,7.212,7.212,0,0,1,10.26,3Zm0,12.906A5.646,5.646,0,1,0,4.613,10.26,5.653,5.653,0,0,0,10.26,15.906Z" fill="#828282"/>
                                                        <path id="Path_145" data-name="Path 145" d="M27.79,28.6a.8.8,0,0,1-.57-.236l-3.509-3.509a.807.807,0,0,1,1.141-1.141l3.509,3.509a.807.807,0,0,1-.57,1.377Z" transform="translate(-9.465 -9.465)" fill="#828282"/>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                       <input required type="text" className="form-control" placeholder="Search here"/>
                                    </div>
                                    <div className='user-online-box'>
                                        <ul>
                                            <li className='user-card active'>
                                                <Link to="!/">
                                                <div className='user-box-main'>
                                                    <div className='user-images'>
                                                    <img src="images/Zoemalik.png" alt="" />
                                                    </div>
                                                    <div className='user-name-box'>
                                                        <h2>Jones Jacky</h2>
                                                        <p>Hey, How are you?</p>
                                                    </div>
                                                    <div className='time-box'>
                                                        <h3>9:00 pm</h3>
                                                    </div>
                                                </div>
                                                </Link>
                                            </li>

                                            <li className='user-card'>
                                            <Link to="!/">
                                            <div className='user-box-main'>
                                                    <div className='user-images'>
                                                    <img src="images/BrahenWillB.png" alt="" />
                                                    </div>
                                                    <div className='user-name-box'>
                                                        <h2>Brahen Will</h2>
                                                        <p>Lorem ipsum dolor sit amet, con...</p>
                                                    </div>
                                                    <div className='time-box'>
                                                        <h3>Yesterday</h3>
                                                        <div className='massage-number'>2</div>
                                                    </div>
                                                </div>
                                                </Link>
                                            </li>

                                            <li className='user-card'>
                                            <Link to="!/">
                                            <div className='user-box-main'>
                                                    <div className='user-images'>
                                                    <img src="images/PretyRoseB.png" alt="" />
                                                    </div>
                                                    <div className='user-name-box'>
                                                        <h2>Prety Rose</h2>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                    <div className='time-box'>
                                                        <h3>30/09/2022</h3>
                                                    </div>
                                                </div>
                                                </Link>
                                            </li>

                                            <li className='user-card'>
                                            <Link to="!/">
                                            <div className='user-box-main'>
                                                    <div className='user-images'>
                                                    <img src="images/RemyJacksonB.png" alt="" />
                                                    </div>
                                                    <div className='user-name-box'>
                                                        <h2>Ellena Wilkinson</h2>
                                                        <p>Lorem ipsum dolor sit amet, con...</p>
                                                    </div>
                                                    <div className='time-box'>
                                                        <h3>30/09/2022</h3>
                                                    </div>
                                                </div>
                                                </Link>
                                            </li>

                                            <li className='user-card'>
                                            <Link to="!/">
                                            <div className='user-box-main'>
                                                    <div className='user-images'>
                                                    <img src="images/AishaJoy.png" alt="" />
                                                    </div>
                                                    <div className='user-name-box'>
                                                        <h2>Anna Lisy</h2>
                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                    <div className='time-box'>
                                                        <h3>30/09/2022</h3>
                                                    </div>
                                                </div>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                </div>

                                <div className='col-lg-7'>
                                    <div className='user-profile-chats'>
                                        <div className='profile-topbar-section'>
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='profile-box-top'>
                                                    <div className='profile-image2'>
                                                        <img src="images/Zoemalik.png" alt="" />
                                                    </div>
                                                    <div>
                                                        <h4>Jones Jacky</h4>
                                                        <span>Online</span>
                                                    </div>
                                                </div>
                                            </div>
                                    <div className='col-auto'>
                                    <div className="dropdown-report-section">
                                        <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5.625" height="22.5" viewBox="0 0 5.625 22.5">
                                                    <path id="Icon_ionic-md-more" data-name="Icon ionic-md-more" d="M20.813,9.563A2.813,2.813,0,1,0,18,12.375,2.821,2.821,0,0,0,20.813,9.563Zm0,16.875A2.813,2.813,0,1,0,18,29.25,2.821,2.821,0,0,0,20.813,26.438Zm0-8.437A2.813,2.813,0,1,0,18,20.813,2.821,2.821,0,0,0,20.813,18Z" transform="translate(-15.188 -6.75)" fill="#828282"/>
                                                </svg>
                                            </span>
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="user-card" onClick={handleShowTwo} >Report</Dropdown.Item>
                                            <Dropdown.Item className="user-card" to="/!">Block</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className='conversation-part'>
                                          <ul>
                                            <li className='left-side'>
                                                <div className='conversation-list'>
                                                    <h5>Hey, How are you?</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>


                                            <li className='right-side'>
                                                <div className='conversation-list'>
                                                    <h5>Hey, How are you?</h5>
                                                </div>
                                                <div className='conversation-list'>
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>

                                            <li className='left-side'>
                                                <div className='conversation-list'>
                                                    <h5>Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dapibus, consectetu</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>

                                            <li className='left-side'>
                                                <div className='conversation-list'>
                                                    <h5>Hey, How are you?</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>


                                            <li className='right-side'>
                                                <div className='conversation-list'>
                                                    <h5>Hey, How are you?</h5>
                                                </div>
                                                <div className='conversation-list'>
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>

                                            <li className='left-side'>
                                                <div className='conversation-list'>
                                                    <h5>Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dapibus, consectetu</h5>
                                                </div>
                                                <div className='time-list'>
                                                    <p>9:00 PM</p>
                                                </div>
                                            </li>

                                          </ul>
                                        </div>

                                        <div className='type-bottom-section'>
                                            <input required="" type="text" placeholder="Write your message....."/>
                                            <button type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.229" height="20.227" viewBox="0 0 20.229 20.227">
                                                <path id="Icon_ionic-ios-send" data-name="Icon ionic-ios-send" d="M24.094,4.548,4.754,12.978a.443.443,0,0,0,.016.806L10,16.74a.844.844,0,0,0,.964-.095L21.281,7.751c.068-.058.232-.169.3-.105s-.037.227-.095.3L12.556,17.994A.841.841,0,0,0,12.472,19l3.419,5.485a.445.445,0,0,0,.8-.011l8-19.341A.443.443,0,0,0,24.094,4.548Z" transform="translate(-4.503 -4.503)" fill="#fff"/>
                                            </svg>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
                <Footer />
            </div>

            <Modal className='center-modal class-modal problemsolving rejectbooking' show={showTwo} onHide={handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title>Report </Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section dropdown-select'>
                    <div className="App">
                        <ReactSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            placeholder="Reason of Cancellation" />
                            
                        </div>
                        <div className="form-group floating-label">
                            <textarea id="textarea" className="form-control" rows="3" ></textarea>
                            <label htmlFor="textarea">Describe Reason</label>
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

export default Chats
