import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetInstructorLevelList, GetInstructorSubjectsList } from "../../../redux/actions/instructorAction";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorMsg from "../../../components/TextErrorMsg/TextErrorMsg";
import Button from "../../../components/Buttons/Buttons";
import EditIcon from "../EditIcon";

const ScheduleClassStepOne = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [sideBarDetails, setSideBarDetails] = useState()

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const [submitClick, setSubmitClick] = useState(false)
    const isLoading = useSelector((state) => state?.instructor.loading);
    const InstructorSubject = useSelector((state) => state?.instructor?.instructor_subject);
    const InstructorLevel = useSelector((state) => state.instructor?.instructor_level);
    const InstructorUserSubjectLevel = useSelector((state) => state.instructor?.instructor_level?.user_subject);

    useEffect(() => {
        dispatch(GetInstructorSubjectsList(id));
    }, [dispatch, id]);

    const handleOnChange = (event, data) => {
        if (event.target.name === "subject_id") {
            dispatch(GetInstructorLevelList(event.target.value));
            data.setFieldValue('level_id', '')
        } else if (event.target.name === "level_id") {
            let levelArr = InstructorUserSubjectLevel.filter(value => value.id == event.target.value)
            let data = {
                subject_name: InstructorLevel.tutor_sub_name,
                level_name: levelArr.length > 0 ? levelArr[0].class_name : event.target.value
            }
            setSideBarDetails(data)
        }
    }

    const handleStepOneSubmit = (value) => {
        navigate(`/scheduleclass/date-and-time/${id}`, { state: { ...value, ...sideBarDetails } });
        setActiveStep('date-and-time');
        setSubmitClick(true)
    }

    return (
        <>
            <div className="personaldetails-main-section on-demand-class-type" style={{ display: name === 'subject-and-level' ? 'block' : 'none' }}>
                <h2>Select Subject & Level</h2>
                <div className="on-demand-class-content">
                    <Formik
                        initialValues={{
                            subject_id: "",
                            level_id: ""
                        }}
                        validationSchema={() =>
                            Yup.object().shape({
                                subject_id: Yup.string().required('Subject is required!'),
                                level_id: Yup.string().required('Level is required!'),
                            })
                        }
                        onSubmit={handleStepOneSubmit}
                    >
                        {formik => {
                            return (
                                <Form onChange={(e) => handleOnChange(e, formik)}>
                                    <div className="row g-5">
                                        <div className="col-md-8 col-sm-12">
                                            <div className="personaldetails-section">
                                                <div className="select-subject-level-card uploadproblem-section">
                                                    <div className="row g-5">
                                                        <div className="col-md-6 col-sm-12 dropdown-select">
                                                            <div className="App">
                                                                <Field as="select" name="subject_id" className='w-100'>
                                                                    <option value=""> Select Subject </option>
                                                                    {InstructorSubject && InstructorSubject?.map((value, index) => {
                                                                        return (
                                                                            <option value={value.id} key={index}> {value.tutor_sub_name} </option>
                                                                        )
                                                                    })}
                                                                </Field>
                                                                <ErrorMessage name="subject_id" component={TextErrorMsg} />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6 col-sm-12 dropdown-select">
                                                            <div className="App">
                                                                <Field as="select" name="level_id" className='w-100'>
                                                                    <option value=""> Select Level </option>
                                                                    {InstructorUserSubjectLevel && InstructorUserSubjectLevel.map((value, index) => {
                                                                        return (
                                                                            <option value={value.id} key={index}> {value.class_name} </option>
                                                                        )
                                                                    })}
                                                                </Field>
                                                                <ErrorMessage name="level_id" component={TextErrorMsg} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center pt-5">
                                                <Button
                                                    BtnText="Next"
                                                    name="next"
                                                    BtnColor="primary"
                                                    BtnType="submit"
                                                    disabled={!formik.isValid || isLoading}
                                                    hasSpinner={isLoading && submitClick}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <div className="personaldetails-section payable-amount-card-box">
                                                <div className="row align-items-center">
                                                    <div className="col-md-9 col-sm-12">
                                                        <span className="amount-text">Payable Amount</span>
                                                    </div>

                                                    <div className="col-md-3 col-sm-12 text-end">
                                                        <h3 className="amount-price">${amount ? amount : 0}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="personaldetails-section payable-amount-card-box">
                                                <div className="row align-items-center">
                                                    <div className="col-md-9 col-sm-12">
                                                        <span className="amount-text">Schedule Class</span>
                                                    </div>

                                                    <div className="col-md-3 col-sm-12 text-end">
                                                        <Link className="btn edit-btn" to={`/instructordetail/${id}`}>
                                                            <EditIcon />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default ScheduleClassStepOne;