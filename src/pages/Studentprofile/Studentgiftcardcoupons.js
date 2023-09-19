import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../Instructorprofile/Instructorprofile.scss';


const Studentgiftcardcoupons = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile walletpayment'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Gift Card & Coupons</h1>
                    <p>Home / <span>Gift Card & Coupons</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                    </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                                <div className='profile-top-heading'>
                                    <h2>Gift Card & Coupons</h2>
                                </div>
                                <div className='my-profile-details'>
                                    <div className='wallet-card-main-section row g-5'>
                                        <div className='col-lg-12 col-xl-6'>
                                        <div className='wallet-card'>
                                        <h2>Send Gift Card</h2>
                                        <div className='gift-input-box'>
                                        <label className="custom-field one">
                                        <input required type="text"  />
                                        <span className="placeholder">Student's Full Name</span>
                                        </label>
                                        <label className="custom-field one">
                                        <input required type="text"  />
                                        <span className="placeholder">Student's Email</span>
                                        </label>
                                        <label className="custom-field one">
                                        <input required type="text"  />
                                        <span className="placeholder">Gift Amount</span>
                                        </label>
                                        </div>
                                        <div className='send-button-box'>
                                        <Link className="btn" to="/!">Send</Link>
                                        </div>
                                    </div>
                                        </div>

                                        <div className='col-lg-12 col-xl-6'>
                                        <div className='wallet-card gift-table-price-main'>
                                        <h2>Gift Card History</h2>
                                        <div className='gift-card-price-table table-responsive'>
                                        <Table responsive>
                                                <tbody>
                                                    <tr>
                                                    <td><span>Jones Jacky</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Brahen Will</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Prety Rose</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Prety Rose</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Aisha Joy</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Jones Jacky</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                    <tr>
                                                    <td><span>Brahen Will</span></td>
                                                    <td className='text-center'>01 Sept'22 at 8:00 AM</td>
                                                    <td className='text-end'><strong>$50</strong></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                        </div>

                            <div className='col-12'>
                                <div className='wallet-card'>
                                    <h2>Coupons</h2>

                                    <div className='coupons-four-card-section'>
                                        <div className='row g-5'>
                                        <div className='col-lg-12 col-xl 12 col-md-6'>
                                                <div className='coupons-card-box-first'>
                                                <div className="row g-5">
                                                    <div className="col-8">
                                                        <h3> <span>20% OFF</span> on all Mathematics Courses</h3>
                                                     </div>
                                                    <div className="col-4 text-end">
                                                        <Link className='btn btn-apply2'>Apply</Link>
                                                    </div>
                                                        <div className="col-7 text-start">
                                                        <Link className='btn'>LM546SV2315V54</Link>
                                                        </div>
                                                            <div className="col-5 text-end align-self-center">
                                                                <h4>Expires in 21 days</h4>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-xl 12 col-md-6'>
                                                <div className='coupons-card-box-first'>
                                                <div className="row g-5">
                                                    <div className="col-8">
                                                        <h3> <span>40% OFF</span> on your First Course</h3>
                                                     </div>
                                                    <div className="col-4 text-end">
                                                    <Link className='btn btn-apply2'>Apply</Link>
                                                    </div>
                                                        <div className="col-7 text-start">
                                                        <Link className='btn'>LM546SV2315V54</Link>
                                                        </div>
                                                            <div className="col-5 text-end align-self-center">
                                                                <h4>Expires in 21 days</h4>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-xl 12 col-md-6'>
                                                <div className='coupons-card-box-first'>
                                                <div className="row g-5">
                                                    <div className="col-8">
                                                        <h3> <span>50% OFF</span> on all Courses Above $900</h3>
                                                     </div>
                                                    <div className="col-4 text-end">
                                                    <Link className='btn btn-apply2'>Apply</Link>
                                                    </div>
                                                        <div className="col-7 text-start">
                                                        <Link className='btn'>LM546SV2315V54</Link>
                                                        </div>
                                                            <div className="col-5 text-end align-self-center">
                                                                <h4>Expires in 21 days</h4>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-xl 12 col-md-6'>
                                                <div className='coupons-card-box-first'>
                                                <div className="row g-5">
                                                    <div className="col-8">
                                                        <h3> <span>5% OFF</span> on Group Classes Courses</h3>
                                                     </div>
                                                    <div className="col-4 text-end">
                                                    <Link className='btn btn-apply2'>Apply</Link>
                                                    </div>
                                                        <div className="col-7 text-start">
                                                            <Link className='btn'>LM546SV2315V54</Link>
                                                        </div>
                                                            <div className="col-5 text-end align-self-center">
                                                                <h4>Expires in 21 days</h4>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
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
        </>
    );
}

export default Studentgiftcardcoupons
