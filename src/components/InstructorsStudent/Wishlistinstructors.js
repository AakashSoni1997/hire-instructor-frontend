import React, {useState} from "react"
import ModalVideo from "react-modal-video";
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './Instructorsstudent.scss';


const Wishlistinstructors = ({ id,ImageUrl, InstructorsName, Flagimage, Checkmark, Speaks, Qualification, SubName1, SubName2, SubName3, HrsPrice, Rating, UserNumberRating, Description, wishlistId, unactive, active }) => {

    const [isOpen, setOpen] = useState(false)

        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    return (
        <>

            <div className="col-12">
            <div className="card-main-section">
                    <div className="card-first">
                    <div className="video-section">
                                <img src={ImageUrl} alt="" />
                                <React.Fragment>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="9xwazD5SyVg" onClose={() => setOpen(false)} />
                                    <button className="btn" onClick={() => setOpen(true)}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="43.875" height="43.875" viewBox="0 0 43.875 43.875">
                                         <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" d="M25.313,3.375A21.938,21.938,0,1,0,47.25,25.313,21.934,21.934,0,0,0,25.313,3.375Zm8.838,22.349L19.68,34.478a.469.469,0,0,1-.707-.411V16.559a.467.467,0,0,1,.707-.411L34.151,24.9A.483.483,0,0,1,34.151,25.724Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                                    </svg>
                                        </button>
                                </React.Fragment>

                                <div className="heart-icon">
                            <div className="btn">
                            <input type="checkbox" id={wishlistId}/>
                            <label htmlFor={wishlistId}>
                            </label>
                        </div>
                        </div>

                    <div className="on-off-btn">
                    {unactive && <span className="unactive">{unactive}</span>}
                    {active && <span className="active">{active}</span>}
                        {/* <span className="unactive"></span>
                        <span className="active"></span> */}
                    </div>
                    </div>

                        <div className="details-box">
                            <div className="details-box-first">
                                <h1 className="flagcheckmark">
                                    <Link to="/instructordetail">{InstructorsName}</Link>
                                    {Flagimage && <span className="Flagimage"><img src={Flagimage} alt="" /></span>}
                                    {Checkmark && <span className="Checkmark"><img src={Checkmark} alt="" /></span>}
                                
                                </h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <h2>Speaks</h2>
                                         <p>{Speaks}</p>
                                        </div>
                                        <div className="col-lg-6">
                                        <h3>Qualification</h3>
                                        <p>{Qualification}</p>
                                        </div>
                                    </div>
                                <h4>Specialization</h4>
                                <p>{SubName1} | {SubName2} | {SubName3}</p>
                            </div>
                            <div className="details-box-first2">
                                <h1>${HrsPrice}/hr</h1>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.217" viewBox="0 0 16 15.217">
                                        <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z" transform="translate(-2.571 -2.683)" fill="#fed756" />
                                    </svg>
                                    <span> <b>{Rating}</b> ({UserNumberRating})</span>
                                </p>
                                <Link className="btn becomaninstructor" onClick={handleShow}>Book Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="read-more-box">
                        <p>{Description}<Link className="btn becomaninstructor" to="/instructordetail">READ MORE</Link></p>
                    </div>
                </div>
            </div>

            <Modal className='center-modal class-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Class Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="classtype-section classtype-section-radio-box">
                <div className="radio-box">
                  <div className="check-box-create">
                    <Link to="/ondemandclass">                  
                    <input  type="radio" id="plan1" name="month" value="" defaultChecked/>
                      <label htmlFor="plan1">On Demand Class</label>
                      </Link>
                  </div>
                  </div>
                  <div className="radio-box">
                  <div className="check-box-create">
                    <Link to="scheduleclass">
                    <input type="radio" id="plan2" name="month" value=""/>
                    <label htmlFor="plan2">Schedule Class</label>
                    </Link>
                  </div>
                  </div>
                  <div className="radio-box">
                  <div className="check-box-create">
                  <Link to="problemsolvingclass">
                  <input type="radio" id="plan3" name="month" value=""/>
                      <label htmlFor="plan3">Problem Solving Class</label>
                    </Link>
                  </div>
                  </div>
                  <div className="radio-box">
                  <div className="check-box-create">
                  <Link to="subscription">
                  <input type="radio" id="plan4" name="month" value=""/>
                      <label htmlFor="plan4">Subscription</label>
                    </Link>
                  </div>
                  </div>
          </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='email-send continue'>
                <Link className="btn becomaninstructor" to="/">Continue</Link>
                </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Wishlistinstructors

