import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Buttons";
import EditIcon from "../EditIcon";
import { Tab, Tabs } from "react-bootstrap";
import { days } from "../../Instructorcompleteprofile/NestedDays";
import "./../../Instructorcompleteprofile/CompleteProfile.scss"

const ScheduleClassStepTwo = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const location = useLocation()
    const navigate = useNavigate()
    const prevPageData = location?.state

    const [key, setKey] = useState()

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const handleDayTab = (data) => {
        setKey(data)
    };

    const handleChange = () => {

    }

    const handleStepThereSubmit = (e) => {
        e.preventDefault()
        navigate(`/scheduleclass/payment-method/${id}`, { state: prevPageData });
        setActiveStep('date-and-time');
    }

    const handlePrevious = () => {
        navigate(`/scheduleclass/subject-and-level/${id}`, { state: prevPageData });
        setActiveStep('subject-and-level');
    }

    return (
        <div className="personaldetails-main-section on-demand-class-type">
            <h2>Select Date & Time</h2>
            <div className="on-demand-class-content">
                <div className="row g-5">
                    <div className="col-md-8 col-sm-12">
                        <form autoComplete="off" onSubmit={handleStepThereSubmit}>
                            <div className="personaldetails-section">
                                <div className="select-subject-level-card">
                                    <div className="row align-items-center">
                                        <img src="images/calendar.png" alt="" />
                                    </div>
                                </div>

                                <div className="select-subject-level-card payment-box-main-content">
                                    <div className="availability-box-main">
                                        <div className="classes-tabs-three">
                                            <Tabs
                                                defaultActiveKey="monday"
                                                activeKey={key}
                                                onSelect={handleDayTab}
                                            >
                                                {days.map((ele) => (
                                                    <Tab key={ele.id} eventKey={ele.name} title={ele.title} >
                                                        <div className="morning-slot-box">
                                                            <Tabs className="slot-tabs-block">
                                                                {ele?.shifts?.map((ele2, index) => {
                                                                    return (
                                                                        <Tab
                                                                            eventKey={ele2.shift_name}
                                                                            key={index}
                                                                            title={
                                                                                <>
                                                                                    <p>{ele2?.shift_name}</p>
                                                                                    <span>{ele2.shift_time}</span>
                                                                                </>
                                                                            }
                                                                        >
                                                                            <div className="time-slots-box-section row">
                                                                                {ele2?.slots?.map((value, index) => {
                                                                                    return (
                                                                                        <div className="time-slots-box-first col-md-4 mb-3" key={index}>
                                                                                            <div className="radio-box">
                                                                                                <div className="check-box-create">
                                                                                                    <input
                                                                                                        // required
                                                                                                        type="checkbox"
                                                                                                        id={`${value.slot_id}_${value.slot_name}`}
                                                                                                        name={`${value.slot_id}_${value.slot_name}`}
                                                                                                        value={value.slot_name}
                                                                                                        onChange={(e) => handleChange(e, value)}
                                                                                                    />
                                                                                                    <label htmlFor={`${value.slot_id}_${value.slot_name}`}> {value.slot_name} </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                })}
                                                                            </div>
                                                                        </Tab>
                                                                    )
                                                                })}
                                                            </Tabs>
                                                        </div>
                                                    </Tab>
                                                ))}
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center pt-5">
                                <Button
                                    name="previous"
                                    BtnText="Back"
                                    BtnColor="yellow"
                                    BtnType="button"
                                    onClick={handlePrevious}
                                />

                                <Button
                                    BtnText="Next"
                                    name="next"
                                    BtnColor="primary"
                                    BtnType="submit"
                                />
                            </div>
                        </form>
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
                                    <span className="amount-text"> Schedule Class </span>
                                </div>
                                <div className="col-md-3 col-sm-12 text-end">
                                    <Link className="btn edit-btn" to={`/instructordetail/${id}`}>
                                        <EditIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="personaldetails-section payable-amount-card-box">
                            <div className="row align-items-center">
                                <div className="col-md-9 col-sm-12">
                                    <span className="amount-text">{prevPageData?.subject_name} | {prevPageData?.level_name}</span>
                                </div>
                                <div className="col-md-3 col-sm-12 text-end">
                                    <Link className="btn edit-btn" to={`/scheduleclass/subject-and-level/${id}`}>
                                        <EditIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScheduleClassStepTwo