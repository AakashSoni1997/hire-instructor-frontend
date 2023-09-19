import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Swiper, SwiperSlide } from "swiper/react";
import '../Instructorprofile/Instructorprofile.scss';
import "swiper/css/pagination";


import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay, Pagination } from "swiper";


const Studentwalletpayment = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile walletpayment'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Wallet & Payment</h1>
                    <p>Home / <span>Wallet & Payment</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                    </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                                <div className='profile-top-heading'>
                                    <h2>Wallet & Payment</h2>
                                </div>
                                <div className='my-profile-details'>
                                    <div className='wallet-card-main-section row g-5'>
                                        <div className='col-lg-12 col-xl-5'>
                                        <div className='wallet-card'>
                                        <h2>Wallet</h2>
                                        <div className='balance-card'>
                                            <p>Available Balance</p>
                                            <span>$50</span>
                                        </div>
                                        <div className='balance-amount'>
                                        <h3>You can add more balance to your wallet.</h3>
                                        <Link className="btn" to="/!">Add Amount</Link>
                                        </div>
                                    </div>
                                        </div>

                                        <div className='col-lg-12 col-xl-7'>
                                        <div className='wallet-card wallet-card2'>
                                        <div className='cards-button'>
                                        <h2>Your Cards</h2>
                                        <Link className="btn" to="/!">Add New</Link>
                                        </div>
                                        <div className='row g-5'>
                                            <div className='col-10'>
                                            <div className='card-swiper-slide-section'>
                                        <Swiper
                                            modules={[Autoplay, EffectCards, Pagination]}
                                            effect={"cards"}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            loop={true}
                                            // autoplay={{
                                            //     delay: 2500,
                                            //     disableOnInteraction: false,
                                            //   }}
                                            initialSlide={1}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            className="mySwiper"
                                            cardsEffect={{
                                                perSlideRotate : 0
                                            }}
                                        >
                                            <SwiperSlide>
                                                <img src="/images/credit-card1.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide></SwiperSlide>
                                            <SwiperSlide>
                                            <img src="/images/credit-card1.png" alt="" />
                                            </SwiperSlide>
                                            
                                        </Swiper>
                                        </div>
                                            </div>
                                            <div className='col-2 align-self-center'>
                                                <div className='edit-delete-button'>
                                                    <div className='edit-btn'>
                                                    <Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.742" height="15.742" viewBox="0 0 15.742 15.742">
                                                        <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,16.959v3.279H7.779l9.671-9.671L14.171,7.288ZM19.986,8.031a.871.871,0,0,0,0-1.233L17.94,4.752a.871.871,0,0,0-1.233,0l-1.6,1.6,3.279,3.279Z" transform="translate(-4.5 -4.496)" fill="#646464"/>
                                                    </svg>
                                                    </Link>
                                                    </div>
                                                    <div className='delete-btn'>
                                                    <Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="15.606" viewBox="0 0 12.138 15.606">
                                                        <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M8.367,18.372A1.739,1.739,0,0,0,10.1,20.106h6.936a1.739,1.739,0,0,0,1.734-1.734V7.968H8.367ZM10.5,12.2l1.222-1.222,1.847,1.838,1.838-1.838L16.629,12.2l-1.838,1.838,1.838,1.838L15.407,17.1l-1.838-1.838L11.731,17.1l-1.222-1.222,1.838-1.838Zm6.1-6.832L15.736,4.5H11.4l-.867.867H7.5V7.1H19.638V5.367Z" transform="translate(-7.5 -4.5)" fill="#646464"/>
                                                    </svg>
                                                    </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </div>

                                        <div className='col-12'>
                                        <div className='wallet-card transactionhistory'>
                                    <h2>Transaction History</h2>
                                    <div className='transactionhistory-table transactionhistory-table-main table-responsive'>
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
                                                    <td>Wallet</td>
                                                    <td>ID Number: #21354</td>
                                                    <td className='text-end'><span className='not-paid'>-$50</span></td>
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
                                                    <td>Wallet</td>
                                                    <td>ID Number: #21354</td>
                                                    <td className='text-end'><span className='not-paid'>-$70</span></td>
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
                                                    <td>Card</td>
                                                    <td>ID Number: #21354</td>
                                                    <td className='text-end'><span className='not-paid'>-$50</span></td>
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
                                                    <td>Card</td>
                                                    <td>ID Number: #21354</td>
                                                    <td className='text-end'><span className='not-paid'>-$50</span></td>
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
                                                    <td>Wallet</td>
                                                    <td>ID Number: #21354</td>
                                                    <td className='text-end'><span className='paid'>+$50</span></td>
                                                    </tr>

                                                </tbody>
                                            </Table>
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

export default Studentwalletpayment
