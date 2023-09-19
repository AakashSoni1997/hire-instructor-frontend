import React, {useEffect, useState} from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Groupclassescard from "../../components/Groupclassescard/Groupclassescard";
import '../../style.scss';
import ReactSelect from "react-select";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GroupClassListMyProfile } from "../../redux/actions/GroupClassActions";

  const options3 = [
    { value: 'On Demand Class', label: 'On Demand Class' },
    { value: 'Schedule Class', label: 'Schedule Class' },
    { value: 'Group Class', label: 'Group Class' },
  ];




const Groupclasses = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const disptach = useDispatch();
    useEffect(() => {
        disptach(GroupClassListMyProfile());
      }, [disptach]);
      const groupClassList=useSelector((state)=>state.group.group_class_list_success)

    return (
        <>
            <div id="footer-bottom" className="instrutors">
                <Header />
                <div className="instru-bg-image">
                    <h1>Group Classes</h1>
                    <p>Home / <span>Group Classes</span></p>
                </div>
                <div className="easyfind-box">
                    <div className="easy-box-ab">
                        <div className="container">
                            <div className="easy-box-content">
                                <h1>Easy Find</h1>
                                <div className="input-content-easy groupclass">
                                    <div className="easy-box-1">
                                    <label className="custom-field one">
                                       <input required type="text"  />
                                        <span className="placeholder">Topic</span>
                                        </label>
                                    </div>
                                    <div className="easy-box-1 date-picker-sec">
                                    <div className="form-group floating-label">
                                       <input required type="date" id="date" className="form-control date-picker-ab" />
                                        <label htmlFor="date">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="easy-box-1 dropdown-select">
                                    <div className="App">
                                <ReactSelect
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options3}
                                    placeholder="Select Levels"
                                    isSearchable={false}
                                    // defaultMenuIsOpen={true}
                                />
                            </div>
                                    </div>
                                    <div className="easy-box-2">
                                        <Link className="btn becomaninstructor" to="/">Search</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="groupclasses-card">
                <div className="container">
                   <div className="row g-5">
                    {}
                        {/* <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses1.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_1" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses22.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_2" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasse33.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_3" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses1.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_4" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses22.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_5" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasse33.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_6" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses1.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_7" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasses22.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_8" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div>

                        <div className="col-md-6 col-lg-4 col-12">
                        <Groupclassescard ImageUrl="/images/Groupclasse33.png" CourseName="Did you make your New Year resolutions?" wishlistId="list_9" HrPrice="100" TotalSeats="10" BookedSeats="5" ProfileImage="/images/rosymela.png" TeacherName="Rosy Mela" DateTime="Mon, 05 Sept'22  9 AM" />
                        </div> */}
                        
                   </div>
                </div>
            </div>

                <div className="pagination-main-section">
                <div className="container">
                <div className="pagination-box">
                <Link className="btn-2 previous" to="/" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
                    <path id="Icon_material-chevron-left" data-name="Icon material-chevron-left" d="M7,1.41,5.668,0,0,6l5.668,6L7,10.59,2.673,6Z"/>
                </svg>
                 <span>Previous</span>
                 </Link>
                 <Link className="btn-2 active" to="/">1</Link>
                 <Link className="btn-2" to="/">2</Link>
                 <Link className="btn-2" to="/">3</Link>
                 <Link className="btn-2" to="/">4</Link>
                 <Link className="btn-2" to="/">5</Link>
                 <Link className="btn-2" to="/">6</Link>
                 <Link className="btn-2" to="/">7</Link>

                 <Link className="btn-2 next" to="/">
                 <span>Next</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
                    <path id="Icon_material-chevron-left" data-name="Icon material-chevron-left" d="M0,1.41,1.332,0,7,6,1.332,12,0,10.59,4.327,6Z"/>
                </svg>
                 </Link>
                </div>
            </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Groupclasses




