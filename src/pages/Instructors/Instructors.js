import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InstructorsStudent from "../../components/InstructorsStudent/Instructorsstudent";
import Rangeslider from "../../components/Rangeslider/Rangeslider";
import Dropdown from "react-bootstrap/Dropdown";
import "../../style.scss";
import ReactSelect from "react-select";
import {
    GetInstructorList,
    GetTutorLanguage,
    GetTutorSubjects,
} from "../../redux/actions/instructorAction";
import { useDispatch, useSelector } from "react-redux";
import { SelectBox } from "../../components/InputText/InputText";

const optionsOnline = [
    {
        value: 2,
        label: "---select---",
        name: "is_login",
    },
    {
        value: 1,
        label: "Online",
        name: "is_login",
    },
    {
        value: 0,
        label: "Offline",
        name: "is_login",
    },
];
const optionsSort = [
    {
        value: "",
        label: "---select---",
        name: "sort",
    },
    {
        value: 1,
        label: "Sort by : A-Z",
        name: "sort",
    },
    {
        value: 2,
        label: "Sort by : Z-A",
        name: "sort",
    },
];

let PageSize=8;

const Instructors = () => {
    const dispatch = useDispatch();

    let instructorsList = useSelector(
        (state) => state?.instructor?.instructor_list
    );

    const tutorLanguages = useSelector(
        (state) => state?.instructor?.tutor_language
    );
    const tutotLanguageOptions =
        tutorLanguages &&
        tutorLanguages.map((elem) => ({
            name: "userlang",
            value: elem.language_name,
            label: elem.language_name,
        }));

    const tutorSubjects = useSelector(
        (state) => state?.instructor?.tutor_subject
    );
    const tutotSubjectsOptions =
        tutorSubjects &&
        tutorSubjects.map((elem) => ({
            name: "subjectTutor",
            value: elem.tutor_sub_name,
            label: elem.tutor_sub_name,
        }));

    const [state, setState] = useState({
        subjectName: "",
        hourly_rate_min: "",
        hourly_rate_max: "",
        hourly_rate: "",
    });
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionOnline, setSelectedOptionOnline] = useState({});
    const [instructors, setInstructors] = useState([]);
    const [MinMaxValue, setMinMaxValue] = useState({
        min: 100,
        max: 1000,
    });

    const optionsClassType = [
        {
            name: "class_type",
            value: "on_demand_price_rate_",
            label: "On Demand Class",
        },
        {
            name: "class_type",
            value: "schedule_price_rate_",
            label: "Schedule Class",
        },
        {
            name: "class_type",
            value: "problem_solving_price_rate_",
            label: "Problem Solving Class",
        },
    ];

    useEffect(() => {
        dispatch(GetInstructorList(state));
    }, [state, dispatch]);

    useEffect(() => {
        setInstructors(instructorsList);
    }, [instructorsList]);

    useEffect(() => {
        if (selectedOptionOnline.is_login !== 2) {
            let instructorsListFiltered = instructorsList?.filter(
                (ele) => ele.is_login === selectedOptionOnline.is_login
            );
            setInstructors(instructorsListFiltered);
        } else {
            setInstructors(instructorsList)
        }
    }, [selectedOptionOnline]);

    useEffect(() => {
        dispatch(GetTutorSubjects());
        dispatch(GetTutorLanguage());
    }, [dispatch]);

    useEffect(() => {
        if (selectedOption?.value === "") {
            setInstructors(instructorsList)
        } else {
            let reverseInstructors = instructors.reverse();
            setInstructors([...reverseInstructors]);
        }
    }, [selectedOption]);

    const handleOnlineChange = (data) => {
        setSelectedOptionOnline(data);
    };

    const handleSort = (data) => {
        setSelectedOption(data);
    };

    const handleSearchSubmit = () => {
        dispatch(GetInstructorList(state))
    };

    const handleTutorName = ({ target: { name, value } }) => {
        setState({ ...state, tutor_name: value })
    };

    return (
        <>
            <div id="footer-bottom" className="instrutors courses-page">
                <Header />
                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p>
                        Home / <span>Instructors</span>
                    </p>
                </div>

                <div className="easyfind-box">
                    <div className="easy-box-ab">
                        <div className="container">
                            <div className="easy-box-content">
                                <h1>Easy Find</h1>

                                <div className="input-content-easy instructors-top-four">
                                    <div className="easy-box-1 dropdown-select">
                                        <div className="App">
                                            <span>Tutor's Subject</span>
                                            <SelectBox
                                                onChange={(data) => setState({ ...state, ...data })}
                                                options={[
                                                    ...[{ name: "subjectTutor", label: "select...", value: "" }],
                                                    ...tutotSubjectsOptions,
                                                ]}
                                                placeholder="Select"
                                            // formErrors="Please select Education Level!"
                                            />
                                        </div>
                                    </div>

                  <div className="easy-box-1 dropdown-select">
                    <div className="App">
                      <span>Class Type</span>
                      <SelectBox
                        onChange={(data) => setState({ ...state, ...data })}
                        options={optionsClassType}
                        placeholder="Select"
                        // formErrors="Select Class Type!"
                      />
                    </div>
                  </div>

                  <div className="easy-box-1 range-section">
                    <span>Price Per Hour</span>
                    <div className="range-dropdown">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <p>
                            <span>${MinMaxValue?.min}</span> -
                            <span>${MinMaxValue?.max}</span>
                          </p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Rangeslider
                            min={0}
                            max={1000}
                            onChange={({ min, max }) =>
                              setState({
                                ...state,
                                [`${state?.class_type}min`]: min,
                                [`${state?.class_type}max`]: max,
                              })
                            }
                          />

                          <div className="range-inputfilde-box">
                              <div>
                              <input required type="text" className="form-control" placeholder="Min" name="tutor_name"/>
                              </div>

                              <div>
                              <input required type="text" className="form-control" placeholder="Max" name="tutor_name"/>
                              </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* {state.class_type === undefined && (
                        <span className="validation-text">
                          please Select ClassType First !
                        </span>
                      )} */}
                    </div>
                  </div>

                                    <div className="easy-box-1 dropdown-select online">
                                        <div className="App">
                                            <span>Available</span>
                                            <SelectBox
                                                onChange={(data) => handleOnlineChange(data)}
                                                options={optionsOnline}
                                                placeholder="Online"
                                            />
                                        </div>
                                    </div>
                                </div>

                <div className="input-content-easy">
                  <div className="easy-box-1">
                    <div className="input-group">
                      {/* <InputText
                        name="tutor_name"
                        type="text"
                        onChange={(data) => setState({ ...state, ...data })}
                        // formErrors="Tutor name is required !"
                        placeholderInput="Tutor Name"
                        pattern={RegExp?.commonRegex}
                      /> */}
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        name="tutor_name"
                        onChange={handleTutorName}
                      />
                      <div className="input-group-prepend">
                        <button
                          className="btn"
                          type="button"
                          onClick={handleSearchSubmit}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.132"
                            height="16.132"
                            viewBox="0 0 16.132 16.132"
                          >
                            <g
                              id="Icon_feather-search"
                              data-name="Icon feather-search"
                              transform="translate(-3 -3)"
                            >
                              <path
                                id="Path_144"
                                data-name="Path 144"
                                d="M10.26,3A7.26,7.26,0,1,1,5.126,5.126,7.212,7.212,0,0,1,10.26,3Zm0,12.906A5.646,5.646,0,1,0,4.613,10.26,5.653,5.653,0,0,0,10.26,15.906Z"
                                fill="#828282"
                              />
                              <path
                                id="Path_145"
                                data-name="Path 145"
                                d="M27.79,28.6a.8.8,0,0,1-.57-.236l-3.509-3.509a.807.807,0,0,1,1.141-1.141l3.509,3.509a.807.807,0,0,1-.57,1.377Z"
                                transform="translate(-9.465 -9.465)"
                                fill="#828282"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="easy-box-1 dropdown-select">
                    <div className="App">
                      {/* <span>Speaks Language</span> */}
                      <SelectBox
                        onChange={(data) => setState({ ...state, ...data })}
                        options={tutotLanguageOptions}
                        placeholder="Select"
                        // formErrors="Please select country!"
                      />
                    </div>
                  </div>

                                    <div className="easy-box-1 dropdown-select">
                                        <div className="App">
                                            <ReactSelect
                                                onChange={handleSort}
                                                options={optionsSort}
                                                placeholder="Sort by : A-Z"
                                                isSearchable={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="instructors-card-section">
                    <div className="container">
                        <div className="row g-5">
                            {instructors &&
                                instructors?.map((ele, index) => (
                                    <React.Fragment key={index}>
                                        <InstructorsStudent key={ele.id} ele={{ ...ele }} />
                                    </React.Fragment>
                                ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Instructors;
