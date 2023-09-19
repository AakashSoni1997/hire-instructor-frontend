import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import Numberinput from "../../components/Numberinput/Numberinput";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import '../Instructorprofile/Instructorprofile.scss';



  const options2 = [
    { value: "Female", label: "Female" },
    { value: "male", label: "male" },
  ];

  const options3 = [
    { value: "Tovey", label: "Tovey" },
    { value: "Tovey2", label: "Tovey2" },
  ];

  const options4 = [
    { value: "State Name", label: "State Name" },
    { value: "State Name2", label: "State Name2" },
  ];

  const options5 = [
    { value: "Rose City", label: "Rose City" },
    { value: "Rose City2", label: "Rose City2" },
  ];

const Studentmyprofile = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>My Account</h1>
                    <p>Home / My Account  / <span>Edit Profile</span></p>
                </div>

            <div className='myprofile-section'>
                <div className='container'>
                    <div className='row g-5'>
                    <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                    </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                                <div className='profile-top-heading'>
                                    <h2>My Profile</h2>
                                </div>
                                <div className='my-profile-details'>
                                    <div className='tab-section-profile'>
                                    <div className='tab-content'>
                                                <div className='camera-box'>
                                                <img src='/images/camera-icon.png' alt='Logo' />
                                                </div>
                                                <div className='myprofilebox2'>
                                                    <div className='myprofilebox1'>
                                                    <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">First Name</span>
                                                        </label>
                                                    </div>
                                                    <div className='myprofilebox1'>
                                                    <label className="custom-field one">
                                                       <input required type="text"  />
                                                        <span className="placeholder">Last Name</span>
                                                        </label>
                                                    </div>

                                                    <div className='myprofilebox1'>
                                                    <label className="custom-field one email-box">
                                                           <input required type="email"  value="annaclifton@example.com" disabled />
                                                            <span className="placeholder">Email</span>
                                                        </label>
                                                    </div>

                                                    <div className='myprofilebox1'>
                                                    {/* <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options1}
                                                        placeholder="+01" />
                                                        
                                                    </div>
                                                    <label className="custom-field one">
                                                   <input required type="number" />
                                                    <span className="placeholder">Phone Number</span>
                                                    </label> */}
                                                    
                                                    <Numberinput/>

                                                    </div>

                                                    <div className='myprofilebox1 date-picker-sec'>
                                                    <div className="form-group floating-label">
                                                           <input required type="date" id="date" className="form-control date-picker-ab" />
                                                            <label htmlFor="date">DOB</label>
                                                    </div>
                                                    </div>

                                                    <div className='myprofilebox1 dropdown-select'>
                                                    <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options2}
                                                        placeholder="Gender" />
                                                        
                                                    </div>
                                                    </div>

                                                    <div className='myprofilebox1 dropdown-select'>
                                                    <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options3}
                                                        placeholder="Country" />
                                                        
                                                    </div>
                                                    </div>

                                                    <div className='myprofilebox1 dropdown-select'>
                                                    <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options4}
                                                        placeholder="State" />
                                                        
                                                    </div>
                                                    </div>

                                                    <div className='myprofilebox1 dropdown-select'>
                                                    <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options5}
                                                        placeholder="City" />
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="save-button">
                                                    <Link className="btn" to="/">Save Changes</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='change-password-box'>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Change Password</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='password-profile-box'>
                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="password"  />
                                                        <span className="placeholder">Current Password</span>
                                                        </label>
                                                        </div>

                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="password"  />
                                                        <span className="placeholder">New Password</span>
                                                        </label>
                                                        </div>

                                                        <div className='password-profile-box1'>
                                                        <label className="custom-field one">
                                                       <input required type="password"  />
                                                        <span className="placeholder">Re-Enter New Password</span>
                                                        </label>
                                                        </div>
                                                    </div>
                                                    <div className="update-button">
                                                    <Link className="btn" to="/">Update</Link>
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

export default Studentmyprofile
