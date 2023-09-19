import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Groupclassescard from "../../components/Groupclassescard/Instructorgroupclassescard";
import { Link } from "react-router-dom";
import "./Instructorprofile.scss";
import { useDispatch, useSelector } from "react-redux";
import { GroupClassListMyProfile } from "../../redux/actions/GroupClassActions";

const Instructorgroupclasses = () => {
  const disptach = useDispatch();
  useEffect(() => {
      disptach(GroupClassListMyProfile());
    }, [disptach]);
    const groupClassList=useSelector((state)=>state.group.group_class_list_success)
  return (
    <>
      <div id="footer-bottom" className="instructor-profile">
        <Header />
        <div className="instru-bg-image">
          <h1>Group Classes</h1>
          <p>
            Home / <span>Group Classes</span>
          </p>
        </div>

        <div className="myprofile-section classesdetails-page blog-page-add">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-12 col-lg-4">
                <Instructorsidebar />
              </div>

              <div className="col-md-12 col-lg-8">
                <div className="profile-top-heading addnewblog-section">
                  <div>
                    <h2>Group Classes</h2>
                  </div>
                  <div className="addnewblog">
                    <Link className="btn" to="/addgroupclass">
                      Add Group Classes
                    </Link>
                  </div>
                </div>

                <div className="blog-top-content">
                  <p>
                    You don't have any GroupClass yet, click on "Add New
                    GroupClass" and create GroupClass.
                  </p>
                </div>

                <div className="groupclasses-card">
                  <div className="row g-5">
                      {groupClassList && groupClassList?.map((elem,index)=>(
                    <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                          <Groupclassescard
                          elem={elem}  
                          ImageUrl="/images/Groupclasses1.png"
                            CourseName="Did you make your New Year resolutions?"
                            HrPrice="100"
                            TotalSeats="10"
                            BookedSeats="5"
                            ProfileImage="/images/rosymela.png"
                            TeacherName="Rosy Mela"
                            DateTime="Mon, 05 Sept'22  9 AM"
                          />
                    </div>
                      ))}
{/* 
                    <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                      <Groupclassescard
                        ImageUrl="/images/Groupclasses22.png"
                        CourseName="Did you make your New Year resolutions?"
                        HrPrice="100"
                        TotalSeats="10"
                        BookedSeats="5"
                        ProfileImage="/images/rosymela.png"
                        TeacherName="Rosy Mela"
                        DateTime="Mon, 05 Sept'22  9 AM"
                      />
                    </div>

                    <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                      <Groupclassescard
                        ImageUrl="/images/Groupclasse33.png"
                        CourseName="Did you make your New Year resolutions?"
                        HrPrice="100"
                        TotalSeats="10"
                        BookedSeats="5"
                        ProfileImage="/images/rosymela.png"
                        TeacherName="Rosy Mela"
                        DateTime="Mon, 05 Sept'22  9 AM"
                      />
                    </div>

                    <div className="col-md-6 col-lg-12 col-xl-6 col-12">
                      <Groupclassescard
                        ImageUrl="/images/Groupclasses1.png"
                        CourseName="Did you make your New Year resolutions?"
                        HrPrice="100"
                        TotalSeats="10"
                        BookedSeats="5"
                        ProfileImage="/images/rosymela.png"
                        TeacherName="Rosy Mela"
                        DateTime="Mon, 05 Sept'22  9 AM"
                      />
                    </div> */}
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
};

export default Instructorgroupclasses;
