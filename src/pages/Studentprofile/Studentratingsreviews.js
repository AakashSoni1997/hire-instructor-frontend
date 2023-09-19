import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import {Tab, Tabs} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Instructorprofile/Instructorprofile.scss';



const Studentratingsreviews = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Ratings & Reviews</h1>
                    <p>Home / <span>Ratings & Reviews</span></p>
                </div>

            <div className='myprofile-section classesdetails-page'>
                <div className='container'>
                    <div className='row gx-5'>
                       <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                        </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                        <div className='profile-top-heading'>
                                    <h2>Ratings & Reviews</h2>
                        </div>

                    <div className='booking-request-section classes-tabs-three ratingsreviews-page-instructor'>
                    <Tabs defaultActiveKey="received" id="uncontrolled-tab-example">
                         <Tab eventKey="received" title="Received">

                            <div className='ratingsreviews-tab'>
                                <div className='received-tab'>
                                    <div className='total-reviews'>
                                        <div className='rating-card'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                            <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                        </svg>
                                        <span>(4)</span>
                                        </div>
                                        <div>
                                            <p>Total Reviews : <strong> 1554</strong> </p>
                                        </div>
                                    </div>

                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/Zoemalik.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Jones Jacky</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/BrahenWillB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Brahen Will</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/PretyRoseB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Prety Rose</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/RemyJacksonB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Remy Jackson</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/AishaJoy.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Anna Lisy</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                </div>
                             </div>  

                            </Tab>

                            <Tab eventKey="submitted" title="Submitted">  

                            <div className='ratingsreviews-tab submitted'>
                                <div className='received-tab'>

                                <div className='all-reviews-section all-reviews-section-top-box'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/aishajoyt.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Aisha Joy</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/Zoemalik.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Jones Jacky</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/BrahenWillB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Brahen Will</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/PretyRoseB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Prety Rose</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/RemyJacksonB.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Remy Jackson</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
                                    </div>

                                    
                                    <div className='all-reviews-section'>
                                        <div className='reviews-box-main'>
                                            <div className='reviews-img-box'>
                                                <div className='image-inst'>
                                                <img src="images/AishaJoy.png" alt="" />
                                                </div>
                                                <div>
                                                <h3>Anna Lisy</h3>
                                                <div className='rating-card'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#fed756"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                                    <path id="Icon_metro-star-full" data-name="Icon metro-star-full" d="M23.571,10.322,16.315,9.267,13.071,2.683,9.826,9.267,2.571,10.322l5.25,5.125L6.581,22.683l6.489-3.416,6.489,3.416-1.239-7.236,5.25-5.125Z" transform="translate(-2.571 -2.683)" fill="#dcdcdc"/>
                                                </svg>
                                                <span>(4)</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='date-section'>
                                            <Link className="btn">26 Sept'22</Link>
                                            </div>
                                        </div>
                                        <div className='description'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dus, consectetur adipis. Pellque non pretium nulla, sed venenatis fels <Link className="btn" to="/">READ MORE</Link></p>
                                        </div>
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
        </>
    );
}

export default Studentratingsreviews
