import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Accordion } from "react-bootstrap";
import './Instructorprofile.scss';


const Paymentdetails = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Payment History</h1>
                    <p>Home / <span>Payment History</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-4'>
                       <Instructorsidebar />
                    </div>

                        <div className='col-md-12 col-lg-8'>
                                <div className='profile-top-heading'>
                                    <h2>Payment Details</h2>
                                </div>
                                <div className='my-profile-details'>
                                        <div className='tab-section-profile tab-section-profile2'>
                                            <div className='price-two-box'>
                                                <div className='price-first'>
                                                    <h2>Total Earning</h2>
                                                    <p>$500</p>
                                                </div>
                                                <div className='price-first price-first2'>
                                                    <h2>Pending Amount</h2>
                                                    <p>$130</p>
                                                </div>
                                            </div>

                                        <div className='manages-section payment-table-main'>
                                            <Table striped responsive>
                                                <tbody>
                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/Zoemalik.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Jones Jacky</h3>
                                                                <p>Mathematics (A- Level)</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td>ID Number: #21354</td>
                                                    <td><span>+$50</span></td>
                                                    <td className='text-end'>Pending</td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/PretyRoseB.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Prety Rose</h3>
                                                                <p>English Literature Physics (A-level)</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td>ID Number: #21354</td>
                                                    <td><span>+$50</span></td>
                                                    <td className='text-end'>Pending</td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/brahenwill.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Brahen Will</h3>
                                                                <p>Monthly Subscription</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td>ID Number: #21354</td>
                                                    <td><span className='paid'>+$50</span></td>
                                                    <td className='text-end'>Paid</td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/EllenaWilkinson.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Ellena Wilkinson</h3>
                                                                <p>English Literature Physics (A-level)</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td>ID Number: #21354</td>
                                                    <td><span className='paid'>+$50</span></td>
                                                    <td className='text-end'>Paid</td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/AnnaLisy.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Anna Lisy</h3>
                                                                <p>English Literature Physics (A-level)</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td>ID Number: #21354</td>
                                                    <td><span className='paid'>+$50</span></td>
                                                    <td className='text-end'>Paid</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                            </div>
                                        </div>

                                        <div className='change-password-box paymentbankdetails'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Bank Details</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='password-profile-box'>
                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">Account Number</span>
                                                        </label>
                                                        </div>

                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">Account Holder Name</span>
                                                        </label>
                                                        </div>

                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">Branch</span>
                                                        </label>
                                                        </div>

                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">IFSC</span>
                                                        </label>
                                                        </div>


                                                    </div>
                                                    <div className="update-button">
                                                    <Link className="btn" to="/">Save</Link>
                                                </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
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

export default Paymentdetails
