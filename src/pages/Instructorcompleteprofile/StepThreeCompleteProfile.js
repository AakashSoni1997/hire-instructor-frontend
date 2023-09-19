import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FieldText } from "../../components/InputText/InputText";
import { GetInstructorClassLevel, GetInstructorTags } from "../../redux/actions/instructorAction";
import Button from "./../../components/Buttons/Buttons";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";
import { InstructorCompleteProfileStepThree } from "../../redux/actions/CompleteProfileAction";

export const StepThreeCompleteProfile = ({ setActiveStep }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams()
    const [submitClick, setSubmitClick] = useState(false)
    const [subjectWantToTutor, setSubjectWantToTutor] = useState([{ subject_name: "", level_id: "" }]);
    const [tagName, setTagName] = useState([])

    useEffect(() => {
        setActiveStep(id)
    }, [id])

    const tagsList = useSelector((state) => state?.instructor?.instructor_tags);
    const classLevel = useSelector((state) => state?.instructor?.instructor_class_level);
    const isLoading = useSelector((state) => state.profile.loading);
    const completeProfileSelector = useSelector((state) => state.profile.teaching_details);

    const tagsOptions = tagsList.map((elem) => (
        {
            cat: `Group ${elem.id}`,
            key: elem.tags_name,
            value: elem.id
        }
    ))

    useEffect(() => {
        dispatch(GetInstructorClassLevel());
        dispatch(GetInstructorTags())
    }, [])

    const handleMultiSelect = (data) => {
        const tags = data.map((elem) => {
            return elem.value;
        });
        setTagName([...tags]);
    };

    const handleAddMoreSubjects = () => {
        setSubjectWantToTutor(s => {
            return [...s, { subject_name: "", level_id: "" }];
        });
    };
    const handleSubjectWantTutorDelete = (id) => {
        setSubjectWantToTutor(oldValues => {
            return oldValues.filter((_, i) => i !== id)
        })
    };

    const handleOnChange = (e) => {
        const index = e.target.id;
        if (e.target.name === "subject_name" || e.target.name === "level_id") {
            setSubjectWantToTutor(s => {
                const newArr = s.slice();
                newArr[index][e.target.name] = e.target.value;
                return newArr;
            });
        }
    }

    const handlePrevious = () => {
        navigate("/completeprofile/qualifications");
        setActiveStep('qualifications');
    }

    const StepThereValidationSchema = Yup.object().shape({
        exp_year: Yup.string().required('Experience year is required!'),
        exp_months: Yup.string().required('Experience month is required!'),
        on_demand_price: Yup.string().required('On-demand price is required!'),
        schedule_price: Yup.string().required('Schedule price is required!'),
        problem_solving_price: Yup.string().required('Problem solving price is required!'),
        monthly_subscription_price: Yup.string().required('Monthly subscription price is required!'),
        year_subscription_price: Yup.string().required('Year subscription price is required!'),
        tag_id: Yup.string().required('Language is required!'),
    })

    const handleStepThereSubmit = (value) => {
        let data = {
            exp_year: value.exp_year,
            exp_months: value.exp_months,
            on_demand_price: value.on_demand_price,
            schedule_price: value.schedule_price,
            problem_solving_price: value.problem_solving_price,
            monthly_subscription_price: value.monthly_subscription_price,
            year_subscription_price: value.year_subscription_price,
            tag_id: JSON.stringify(tagName),
            tutorsubname: JSON.stringify(subjectWantToTutor)
        }
        dispatch(InstructorCompleteProfileStepThree(data));
        setSubmitClick(true)
    }

    useEffect(() => {
        if (Object.keys(completeProfileSelector).length > 0 && submitClick) {
            if (completeProfileSelector.status) {
                navigate("/completeprofile/addAvailability");
                setActiveStep('addAvailability');
            } else {
                setSubmitClick(false)
            }
        }
    }, [completeProfileSelector, submitClick])

    return (
        <div className="personaldetails-main-section" style={{ display: id === 'teachingDetails' ? 'block' : 'none' }}>
            <h2>Teaching Details</h2>
            <Formik
                initialValues={{
                    exp_year: "",
                    exp_months: "",
                    on_demand_price: "",
                    schedule_price: "",
                    problem_solving_price: "",
                    monthly_subscription_price: "",
                    year_subscription_price: "",
                    tag_id: ""
                }}
                validationSchema={StepThereValidationSchema}
                onSubmit={handleStepThereSubmit}
            >
                {formik => {
                    return (
                        <Form onChange={handleOnChange}>
                            <div className="personaldetails-section">
                                <div className="personal-details-fields complete-profile2">
                                    <div className="accountfieldmain">
                                        <div className="accountfield">
                                            <div className="accountfield addsubjects-section">
                                                <h3>What subjects do you want to tutor?</h3>
                                                <div className="addsubjects">
                                                    <button
                                                        className="btn becomaninstructor"
                                                        onClick={handleAddMoreSubjects}
                                                        type="button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17.5"
                                                            height="17.5"
                                                            viewBox="0 0 17.5 17.5"
                                                        >
                                                            <circle
                                                                id="Ellipse_101"
                                                                data-name="Ellipse 101"
                                                                cx="8"
                                                                cy="8"
                                                                r="8"
                                                                transform="translate(0.75 0.75)"
                                                                fill="none"
                                                                stroke="#005eb5"
                                                                stroke-linecap="round"
                                                                strokeLinejoin="round"
                                                                stroke-width="1.5"
                                                            />
                                                            <line
                                                                id="Line_176"
                                                                data-name="Line 176"
                                                                x2="6"
                                                                transform="translate(5.75 8.75)"
                                                                fill="none"
                                                                stroke="#005eb5"
                                                                stroke-linecap="round"
                                                                strokeLinejoin="round"
                                                                stroke-width="1.5"
                                                            />
                                                            <line
                                                                id="Line_177"
                                                                data-name="Line 177"
                                                                y2="6"
                                                                transform="translate(8.75 5.75)"
                                                                fill="none"
                                                                stroke="#005eb5"
                                                                stroke-linecap="round"
                                                                strokeLinejoin="round"
                                                                stroke-width="1.5"
                                                            />
                                                        </svg>
                                                        Add More Subjects
                                                    </button>
                                                </div>
                                            </div>

                                            {subjectWantToTutor.map((value, index) => (
                                                <React.Fragment key={index}>
                                                    <div className="accountfield-first">
                                                        <FieldText
                                                            type="text"
                                                            name="subject_name"
                                                            placeholder="Subject Tutor"
                                                            id={index}
                                                            value={value.subject_name}
                                                        />
                                                    </div>
                                                    <div className="accountfield-first dropdown-select">
                                                        <div className="App">
                                                            <Field as="select" name="level_id" className='select-control w-100' id={index} value={value.level_id}>
                                                                <option value=""> Select Level </option>
                                                                {classLevel.map((value, index) => {
                                                                    return (
                                                                        <option value={value.id} key={index}> {value.class_name} </option>
                                                                    )
                                                                })}
                                                            </Field>
                                                        </div>
                                                    </div>
                                                    <div className="accountfield-first cros-button-sub">
                                                        <button
                                                            onClick={() => handleSubjectWantTutorDelete(index)}
                                                            value={index}
                                                            type="button"
                                                            className={
                                                                index < 1
                                                                    ? `btn becomaninstructor`
                                                                    : `active btn becomaninstructor`
                                                            }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20.687"
                                                                height="26.597"
                                                                viewBox="0 0 20.687 26.597"
                                                            >
                                                                <path
                                                                    id="Icon_material-delete-forever"
                                                                    data-name="Icon material-delete-forever"
                                                                    d="M8.978,28.142A2.964,2.964,0,0,0,11.933,31.1H23.754a2.964,2.964,0,0,0,2.955-2.955V10.41H8.978Zm3.635-10.521L14.7,15.538l3.147,3.133,3.133-3.133,2.083,2.083-3.133,3.133,3.133,3.133L20.976,25.97l-3.133-3.133L14.711,25.97l-2.083-2.083,3.133-3.133Zm10.4-11.644L21.537,4.5H14.149L12.672,5.978H7.5V8.933H28.187V5.978Z"
                                                                    transform="translate(-7.5 -4.5)"
                                                                    fill="#fff"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </React.Fragment>
                                            ))}

                                            <div className="accountfield addsubjects-section">
                                                <h3>Experience</h3>
                                            </div>

                                            <div className="number-months-year">
                                                <div className="accountfield-first dropdown-select">
                                                    <div className="App">
                                                        <Field as="select" name="exp_year" className='select-control w-100'>
                                                            <option value=""> Select Number of Years </option>
                                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => {
                                                                return (
                                                                    <option value={value} key={index}> {value} </option>
                                                                )
                                                            })}
                                                        </Field>
                                                        <ErrorMessage name="exp_year" component={TextErrorMsg} />
                                                    </div>
                                                </div>

                                                <div className="accountfield-first dropdown-select">
                                                    <div className="App">
                                                        <Field as="select" name="exp_months" className='select-control w-100'>
                                                            <option value=""> Select Number of Month </option>
                                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value, index) => {
                                                                return (
                                                                    <option value={value} key={index}> {value} </option>
                                                                )
                                                            })}
                                                        </Field>
                                                        <ErrorMessage name="exp_months" component={TextErrorMsg} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accountfield addsubjects-section">
                                                <h3>Add Cost</h3>
                                            </div>

                                            <div className="accountfield-first">
                                                <FieldText
                                                    name="on_demand_price"
                                                    type="number"
                                                    placeholder="On Demand Class"
                                                />
                                            </div>

                                            <div className="accountfield-first">
                                                <FieldText
                                                    name="schedule_price"
                                                    type="number"
                                                    placeholder="Schedule Class"
                                                />
                                            </div>

                                            <div className="accountfield-first">
                                                <FieldText
                                                    name="problem_solving_price"
                                                    type="number"
                                                    placeholder="Problem Solving Class"
                                                />
                                            </div>

                                            <div className="number-months-year">
                                                <div className="accountfield-first">
                                                    <FieldText
                                                        name="monthly_subscription_price"
                                                        type="number"
                                                        placeholder="Monthly Subscription"
                                                    />
                                                </div>

                                                <div className="accountfield-first">
                                                    <FieldText
                                                        name="year_subscription_price"
                                                        type="number"
                                                        placeholder="Yearly Subscription"
                                                    />
                                                </div>
                                            </div>

                                            <div className="accountfield addsubjects-section">
                                                <h3>Tags</h3>
                                            </div>

                                            <div className="accountfield-first text-area-box tags">
                                                <Field name="tag_id">
                                                    {({ form, field }) => {
                                                        return (
                                                            <Multiselect
                                                                disablePreSelectedValues
                                                                name={field.name}
                                                                displayValue="key"
                                                                onKeyPressFn={function noRefCheck() { }}
                                                                onRemove={function noRefCheck() { }}
                                                                onSearch={function noRefCheck() { }}
                                                                onSelect={(data) => {
                                                                    handleMultiSelect(data)
                                                                    form.setFieldValue(field.name, JSON.stringify(data))
                                                                }}
                                                                placeholder="Tags"
                                                                options={tagsOptions}
                                                            />
                                                        )
                                                    }}
                                                </Field>
                                                <ErrorMessage name="tag_id" component={TextErrorMsg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                {/* <Button
                                    name="previous"
                                    BtnText="Back"
                                    BtnColor="yellow"
                                    BtnType="button"
                                    onClick={handlePrevious}
                                /> */}

                                <Button
                                    BtnText="Next"
                                    name="next"
                                    BtnColor="primary"
                                    BtnType="submit"
                                    disabled={!formik.isValid || isLoading}
                                    hasSpinner={isLoading && submitClick}
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};
