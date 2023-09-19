import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Form from 'react-bootstrap/Form';
import './Instructorprofile.scss';


const Problemsolving = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Problem Solving</h1>
                    <p>Home / Classes Details  / <span>Problem Solving</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-4'>
                       <Instructorsidebar />
                    </div>

                        <div className='col-md-12 col-lg-8'>
                                <div className='profile-top-heading'>
                                    <h2>Problem Solving</h2>
                                </div>
                                <div className='my-profile-details'>
                                    <div className='problem-solving-box'>
                                    <div className="booking-card">
                                        <div className="image-box">
                                            <img src="images/EllenaWilkinson.png" alt="" />
                                        </div>
                                        <div className="booking-details">
                                            <div className="heading-price">
                                                <div>
                                                <h2>Ellena Wilkinson</h2>
                                                <p>1 hrs Ago</p>
                                                </div>
                                                <div>
                                                <h3>$20</h3>
                                                </div>
                                                </div>
                                                <h4>Subject & Level</h4>
                                                <span>Mathematics | A-level</span>
                                                <h4>Title</h4>
                                               <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                            </div>
                                         </div>
                                         <h4>Detailed Problem</h4>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis velit id magna accumsan pellentesque. Ut vulputate felis nec felis venenatis mollis. Fusce tincidunt quis urna at tristique. Quisque at pretium risus, et placerat odio. Quisque ultrices molestie magna, sit amet fringilla sem lobortis et.</span>

                                    <div className="pdf-dection">
                                        <h4>Attachment</h4>
                                        <div className="pdf-img">
                                            <div className="pdf-img-box">
                                                <img src="images/pdf-icon.png" alt="" />
                                                    </div>
                                                    <div className="pdf-content">
                                                        <div>
                                                        <span>detailed-problem-screenshot.pdf</span>
                                                        </div>
                                                        <a className="btn" href="/">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="17.5" viewBox="0 0 14.5 17.5"><g id="Group_4802" data-name="Group 4802" transform="translate(-12507.25 -9581.25)"><path id="Path_650" data-name="Path 650" d="M14,3V6.556a.889.889,0,0,0,.889.889h3.556" transform="translate(12502.556 9579)" fill="none" stroke="#005eb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path id="Path_651" data-name="Path 651" d="M16.143,19H6.857A1.819,1.819,0,0,1,5,17.222V4.778A1.819,1.819,0,0,1,6.857,3h6.5L18,7.444v9.778A1.819,1.819,0,0,1,16.143,19Z" transform="translate(12503 9579)" fill="none" stroke="#005eb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line id="Line_178" data-name="Line 178" y2="5" transform="translate(12514.268 9589)" fill="none" stroke="#005eb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></line><path id="Path_652" data-name="Path 652" d="M9,14l2.667,2.667L14.333,14" transform="translate(12502.834 9577.777)" fill="none" stroke="#005eb5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></g></svg>
                                                            Download
                                                        </a>
                                                    </div>
                                                 </div>
                                            </div>

                                        <div className='providesolution'>
                                        <h5>Provide Solution</h5>
                                            <div className="form-group floating-label">
                                                <textarea id="textarea" className="form-control" rows="4" ></textarea>
                                                <label htmlFor="textarea">Describe Reason</label>
                                            </div>
                                        </div>

                                        <div className='providesolution'>
                                        <div className="drag-image-video">
                                                    <Form.Group controlId="formFileMultiple">
                                                    <Form.Label>File</Form.Label>
                                                    <Form.Control type="file" multiple />
                                                </Form.Group>
                                                        </div>
                                        </div>
                                        <div className='send-button'>
                                        <button className='btn'>Send</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
            </div>
        </>
    );
}

export default Problemsolving
