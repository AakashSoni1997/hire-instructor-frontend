import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../style.scss';

const Aboutus = () => {

    const [isOpen, setOpen] = useState(false)
    
    return (
        <>
            <div id="footer-bottom" className="Instructordetail">
                <Header />
                <div className="instru-bg-image">
                    <h1>About Us</h1>
                    <p>Home /<span> About Us</span></p>
                </div>
                
                <div className='about-us-section'>
                    <div className='top-section-about'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='img-about'>
                                    <img src="images/counter-image2.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='about-us-content'>
                                    <span className='semi-heading'>About Us</span>
                                    <h1>We Have Best Online  <span>Education</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum.</p>
                                    <div className='bullet-tab'>
                                        <div className='bullet-tab2'>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.787" height="11.323" viewBox="0 0 14.787 11.323">
                                                <path id="Path_648" data-name="Path 648" d="M25.213,13.532,24,12.289a.26.26,0,0,0-.192-.082h0a.249.249,0,0,0-.192.082l-8.377,8.439-3.049-3.049a.266.266,0,0,0-.385,0L10.587,18.9a.274.274,0,0,0,0,.391l3.845,3.845a1.216,1.216,0,0,0,.8.391,1.274,1.274,0,0,0,.8-.378h.007l9.181-9.229A.294.294,0,0,0,25.213,13.532Z" transform="translate(-10.505 -12.206)" fill="#161616"/>
                                             </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia?</p>
                                    </div>
                                    <div className='bullet-tab2'>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.787" height="11.323" viewBox="0 0 14.787 11.323">
                                                <path id="Path_648" data-name="Path 648" d="M25.213,13.532,24,12.289a.26.26,0,0,0-.192-.082h0a.249.249,0,0,0-.192.082l-8.377,8.439-3.049-3.049a.266.266,0,0,0-.385,0L10.587,18.9a.274.274,0,0,0,0,.391l3.845,3.845a1.216,1.216,0,0,0,.8.391,1.274,1.274,0,0,0,.8-.378h.007l9.181-9.229A.294.294,0,0,0,25.213,13.532Z" transform="translate(-10.505 -12.206)" fill="#161616"/>
                                             </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia?</p>
                                    </div>
                                    <div className='bullet-tab2'>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.787" height="11.323" viewBox="0 0 14.787 11.323">
                                                <path id="Path_648" data-name="Path 648" d="M25.213,13.532,24,12.289a.26.26,0,0,0-.192-.082h0a.249.249,0,0,0-.192.082l-8.377,8.439-3.049-3.049a.266.266,0,0,0-.385,0L10.587,18.9a.274.274,0,0,0,0,.391l3.845,3.845a1.216,1.216,0,0,0,.8.391,1.274,1.274,0,0,0,.8-.378h.007l9.181-9.229A.294.294,0,0,0,25.213,13.532Z" transform="translate(-10.505 -12.206)" fill="#161616"/>
                                             </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia?</p>
                                    </div>
                                    <div className='bullet-tab2'>
                                            <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.787" height="11.323" viewBox="0 0 14.787 11.323">
                                                <path id="Path_648" data-name="Path 648" d="M25.213,13.532,24,12.289a.26.26,0,0,0-.192-.082h0a.249.249,0,0,0-.192.082l-8.377,8.439-3.049-3.049a.266.266,0,0,0-.385,0L10.587,18.9a.274.274,0,0,0,0,.391l3.845,3.845a1.216,1.216,0,0,0,.8.391,1.274,1.274,0,0,0,.8-.378h.007l9.181-9.229A.294.294,0,0,0,25.213,13.532Z" transform="translate(-10.505 -12.206)" fill="#161616"/>
                                             </svg>
                                        </span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia?</p>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='about-us-content about-us2'>
                                    <span className='semi-heading'>About Us</span>
                                    <h1>Lorem ipsum dolor <span>sit amet.</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officiis. Similique dignissimos itaque doloremque non laborum corporis vero reiciendis quaerat architecto, repellendus quibusdam voluptate inventore debitis voluptas ipsum, quisquam nesciunt?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officiis. Similique dignissimos itaque doloremque non laborum corporis vero reiciendis quaerat architecto, repellendus quibusdam voluptate inventore debitis voluptas ipsum, quisquam nesciunt?</p>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='img-about'>
                                    <img src="images/counter-image3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='whatis-instructor-section'>
                        <div className='container'>
                            <div className='row'>
                            <div className='col-lg-5 position-relative'>
                            <div className='image-box-right'>
                            <img src="images/event-img.jpg" alt="" />
                            </div>
                            <div className='watchus'>
                                {/* <Link className='btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="49.895" height="49.895" viewBox="0 0 49.895 49.895">
                                    <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" d="M28.323,3.375A24.948,24.948,0,1,0,53.27,28.323,24.944,24.944,0,0,0,28.323,3.375ZM38.373,28.79,21.918,38.745a.534.534,0,0,1-.8-.468V18.367a.532.532,0,0,1,.8-.468l16.456,9.955A.55.55,0,0,1,38.373,28.79Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                                </svg>
                                Watch Us !
                                </Link> */}

                                <React.Fragment>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="9xwazD5SyVg" onClose={() => setOpen(false)} />
                                    <button className="btn" onClick={() => setOpen(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49.895" height="49.895" viewBox="0 0 49.895 49.895">
                                    <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" d="M28.323,3.375A24.948,24.948,0,1,0,53.27,28.323,24.944,24.944,0,0,0,28.323,3.375ZM38.373,28.79,21.918,38.745a.534.534,0,0,1-.8-.468V18.367a.532.532,0,0,1,.8-.468l16.456,9.955A.55.55,0,0,1,38.373,28.79Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                                </svg>
                                    Watch Us ! </button>
                                </React.Fragment>
                            </div>
                            </div>
                            <div className='col-lg-7'>
                            <div className='content-box-whatis'>
                                <h1>What is <span>Hire Instructor</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officiis. Similique dignissimos itaque doloremque non laborum corporis vero reiciendis quaerat architecto.</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum.</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis itaque distinctio minima explicabo! Quas culpa nihil placeat doloribus, expedita veritatis sed est nostrum eum dignissimos quod a ad earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officiis. Similique dignissimos itaque doloremque non laborum corporis vero reiciendis quaerat architecto, repellendus quibusdam voluptate inventore debitis voluptas ipsum, quisquam nesciunt.</p>
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
export default Aboutus