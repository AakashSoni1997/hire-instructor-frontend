import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Instructorsidebar from "../../../components/Instructorsidebar/Instructorsidebar";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import "../Instructorprofile.scss";

import { TabOneMyProfile } from "./TabOneMyProfile";
import { TabTwoMyProfile } from "./TabTwoMyProfile";
import { TabThreeMyProfile } from "./TabThreeMyProfile";
import { TabFourMyProfile } from "./TabFourMyProfile";


const Myprofile = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <div id="footer-bottom" className="instructor-profile">
        <Header />
        <div className="instru-bg-image">
          <h1>My Account</h1>
          <p>
            Home / My Account / <span>Edit Profile</span>
          </p>
        </div>

        <div className="myprofile-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-12 col-lg-4">
                <Instructorsidebar />
              </div>

              <div className="col-md-12 col-lg-8">
                <div className="profile-top-heading">
                  <h2>My Profile</h2>
                </div>
                <div className="my-profile-details">
                  <div className="tab-section-profile">
                    <Tabs
                      defaultActiveKey="personaldetails"
                      id="uncontrolled-tab-example"
                    >

                      <Tab eventKey="personaldetails" title="Personal Details">
                      <TabOneMyProfile />
                      </Tab>

                      <Tab eventKey="qualifications" title="Qualifications">
                      <TabTwoMyProfile/>
                      </Tab>

                      <Tab eventKey="teachingdetails" title="Teaching Details">
                      <TabThreeMyProfile />
                      </Tab>

                      <Tab eventKey="addavailability" title="Add Availability">
                      <TabFourMyProfile />
                      </Tab>
                    </Tabs>
                  </div>

                  <div className="change-password-box">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Change Password</Accordion.Header>
                        <Accordion.Body>
                          <div className="password-profile-box">
                            <div className="password-profile-box1">
                              <label className="custom-field one">
                                <input required type="password" />
                                <span className="placeholder">
                                  Current Password
                                </span>
                              </label>
                            </div>

                            <div className="password-profile-box1">
                              <label className="custom-field one">
                                <input required type="password" />
                                <span className="placeholder">
                                  New Password
                                </span>
                              </label>
                            </div>

                            <div className="password-profile-box1">
                              <label className="custom-field one">
                                <input required type="password" />
                                <span className="placeholder">
                                  Re-Enter New Password
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="update-button">
                            <Link className="btn" to="/">
                              Update
                            </Link>
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
};

export default Myprofile;
