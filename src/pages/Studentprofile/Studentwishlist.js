import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import InstructorsStudent from "../../components/InstructorsStudent/Wishlistinstructors";
import Groupclassescard from "../../components/Groupclassescard/Groupclassescard";
import {Tab, Tabs} from 'react-bootstrap';
import '../Instructorprofile/Instructorprofile.scss';


const Studentwishlist = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>Wishlist</h1>
                    <p>Home / <span>Wishlist</span></p>
                </div>

            <div className='myprofile-section classesdetails-page wishlist-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                    </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                                <div className='profile-top-heading'>
                                    <h2>Wishlist</h2>
                                </div>
                                <div className='booking-request-section classes-tabs-three ratingsreviews-page-instructor'>
                    <Tabs defaultActiveKey="instructors" id="uncontrolled-tab-example">
                         <Tab eventKey="instructors" title="Instructors">
                                <div className='wishlist-card-instructors'>
                                    <div className='row'>
                                    <InstructorsStudent ImageUrl="/images/Jonesjacky.png" InstructorsName="Jones Jacky" wishlistId="list_1" Flagimage="/images/flag-american.png" Checkmark="/images/checked-mark.png" Speaks="English, Spanish" Qualification="Mathematics (Masters)" SubName1="English" SubName2="Mathematics" SubName3="Electronics" HrsPrice="20" Rating="4/5" UserNumberRating="1125" active="1" Description="Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dapibus, consectetur adipis" />

                                    <InstructorsStudent ImageUrl="/images/Jonesjacky.png" InstructorsName="Jones Jacky" wishlistId="list_2" Flagimage="/images/flag-american.png" Checkmark="/images/checked-mark.png" Speaks="English, Spanish" Qualification="Mathematics (Masters)" SubName1="English" SubName2="Mathematics" SubName3="Electronics" HrsPrice="20" Rating="4/5" UserNumberRating="1125" unactive="1" Description="Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dapibus, consectetur adipis" />

                                    <InstructorsStudent ImageUrl="/images/Jonesjacky.png" InstructorsName="Jones Jacky" wishlistId="list_3" Flagimage="/images/flag-american.png" Checkmark="/images/checked-mark.png" Speaks="English, Spanish" Qualification="Mathematics (Masters)" SubName1="English" SubName2="Mathematics" SubName3="Electronics" HrsPrice="20" Rating="4/5" UserNumberRating="1125" unactive="1" Description="Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellque non pretium nulla, sed venenatis fels. Fue volutpat tortor quis lobortis dapibus, consectetur adipis" />
                                    </div>
                                </div>
                            </Tab>

                        <Tab eventKey="groupclasses" title="Group Classes">  
                                <div className='wishlist-group-class-card'>
                                <div className="row g-5">
                        <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses1.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_01" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses22.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_02" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasse33.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_03" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses1.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_04" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
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

export default Studentwishlist
