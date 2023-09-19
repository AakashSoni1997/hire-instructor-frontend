import React, {useState, useRef} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import { Link } from "react-router-dom";
import {  Overlay, Tooltip  } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import '../Instructorprofile/Instructorprofile.scss';


const Studentreferearn = () => {

    const [tooltip, setTooltip] = useState(false);
    const target = useRef(null);
  
    const copyToClipBoard = (copyMe) => {
      setTooltip(!tooltip)
      navigator.clipboard
      .writeText(copyMe)
      .then(() =>{
          setTimeout(() => {
            setTooltip(false)
          }, 1000)
      })
      .catch((error) => {
          alert("something went wrong");
      })
    };

    return (
        <>
            <div id="footer-bottom" className='instructor-profile walletpayment'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Refer & Earn</h1>
                    <p>Home / <span>Refer & Earn</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                    </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                                <div className='profile-top-heading'>
                                    <h2>Refer & Earn</h2>
                                </div>
                                <div className='my-profile-details'>
                                    <div className='wallet-card-main-section row g-5'>
                                        <div className='col-lg-12 col-xl-5'>
                                        <div className='wallet-card'>
                                        <h2>My Credit</h2>
                                        <div className='balance-card'>
                                            <p>Available Balance</p>
                                            <span>100</span>
                                        </div>
                                        <div className='balance-amount'>
                                        <h3>You can redeem <b>100 Points</b> to Credit $10 to your wallet</h3>
                                        <Link className="btn" to="/!">Add Amount</Link>
                                        </div>
                                    </div>
                                        </div>

                                        <div className='col-lg-12 col-xl-7'>
                                        <div className='wallet-card wallet-card2 refer'>
                                        <h2>Kick off your friend’s <span>Hire Instructor</span> journey!</h2>
                                        <h3>For every referral that joins, you get 20 Points in your <br /> <b>Hire Instructor</b> wallet!</h3>
                                        <div className='copyclipboard-box'>
                                        <button type='button' className='btn' ref={target} onClick={() => copyToClipBoard('JOHNSMI254')}> JOHNSMI254 
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" viewBox="0 0 17.5 17.5">
                                            <g id="Group_5086" data-name="Group 5086" transform="translate(-523.25 -1010.25)">
                                                <rect id="Rectangle_2042" data-name="Rectangle 2042" width="12" height="12" rx="2" transform="translate(528 1015)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                                <path id="Path_680" data-name="Path 680" d="M16,8V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v8a2,2,0,0,0,2,2H8" transform="translate(520 1007)" fill="none" stroke="#005eb5" stroke-linecap="round" strokeLinejoin="round" stroke-width="1.5"/>
                                            </g>
                                        </svg>
                                        </span>
                                    </button>
                                    <Overlay target={target.current} show={tooltip} placement="top">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}> Copied! </Tooltip>
                                            )}
                                        </Overlay>
                                        </div>
                                        <Link className="btn" to="/!">Invite Your Friend</Link>
                                    </div>
                                        </div>

                                        <div className='col-12'>
                                        <div className='wallet-card transactionhistory'>
                                    <h2>Referral History</h2>
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
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td className='text-end'><span className='paid'>20 Points</span></td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/PretyRoseB.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Prety Rose</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td className='text-end'><span className='paid'>20 Points</span></td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/brahenwill.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Brahen Will</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td className='text-end'><span className='paid'>20 Points</span></td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/EllenaWilkinson.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Ellena Wilkinson</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td className='text-end'><span className='paid'>20 Points</span></td>
                                                    </tr>

                                                    <tr>
                                                    <td>
                                                        <div className='image-content-box'>
                                                            <div className='image-payment'>
                                                                <img src="images/AnnaLisy.png" alt="" />
                                                            </div>
                                                            <div className='name-level'>
                                                                <h3>Anna Lisy</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>01 Sept'22 at 8:00 am</td>
                                                    <td className='text-end'><span className='paid'>20 Points</span></td>
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

export default Studentreferearn
