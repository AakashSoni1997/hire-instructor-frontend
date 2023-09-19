import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { days } from "./NestedDays";
import Button from "./../../components/Buttons/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { InstructorCompleteProfileStepFour } from "../../redux/actions/CompleteProfileAction";

export const StepFourCompletProfile = ({ setActiveStep }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams()
    const [key, setKey] = useState()
    const [availability, setAvailability] = useState()
    const [selectedAvailability, setSelectedAvailability] = useState()
    const [count, setCount] = useState(1)
    const [submitClick, setSubmitClick] = useState(false)

    const isLoading = useSelector((state) => state.profile.loading);
    const completeProfileSelector = useSelector((state) => state.profile.availability);

    useEffect(() => {
        setActiveStep(id)
    }, [id])

    const handleDayTab = (data) => {
        setKey(data)
    };

    useEffect(() => {
        setAvailability(days)
    }, [])

    const handleChange = (e, data) => {
        availability && availability.map((value) => {
            value?.shifts?.map((shift_value) => {
                shift_value?.slots?.map((slots_value) => {
                    if (slots_value.slot_id == data.slot_id) {
                        slots_value.selected = !slots_value.selected
                        const selectedSlot = shift_value.slots.filter(value => value.selected)
                        if (selectedSlot?.length > 0) {
                            shift_value.shift_selected = true
                            value.day_selected = true
                        } else {
                            shift_value.shift_selected = false
                            value.day_selected = false
                        }
                    }
                    return <></>
                })
                return <></>
            })
            return <></>
        })
        setCount(count + 1)
    }

    useEffect(() => {
        if (availability) {
            const day_filter = availability?.filter(value => value.day_selected)
            day_filter.length > 0 && day_filter.forEach(element => {
                element.shifts.filter(el => {
                    return el.shift_selected === true
                });
            });
            const shift_filter = day_filter.length > 0 && day_filter.map((element) => {
                return {
                    ...element,
                    shifts: element.shifts.filter((subElement) => {
                        return subElement.shift_selected === true
                    })
                }
            })
            const slot_filter = shift_filter.length > 0 && shift_filter.map(element => {
                return {
                    ...element,
                    shifts: element.shifts.map(value => {
                        return {
                            ...value,
                            slots: value.slots.filter((subElement) => {
                                return subElement.selected === true
                            })
                        }
                    })
                }
            })
            setSelectedAvailability(slot_filter)
        }
    }, [availability, count])

    const handlePrevious = () => {
        navigate("/completeprofile/teachingDetails");
        setActiveStep('teachingDetails');
    }

    const handleStepThereSubmit = (e) => {
        e.preventDefault()
        if (selectedAvailability && selectedAvailability?.length > 0) {
            let data = { availability: JSON.stringify(selectedAvailability) }
            dispatch(InstructorCompleteProfileStepFour(data));
            setSubmitClick(true)
        } else {
            toast.error("Please select availability!", { theme: "colored" });
        }
    }

    useEffect(() => {
        if (Object.keys(completeProfileSelector).length > 0 && submitClick) {
            if (completeProfileSelector.status) {
                navigate("/completeprofile/bankDetails");
                setActiveStep('bankDetails');
            } else {
                setSubmitClick(false)
            }
        }
    }, [completeProfileSelector, submitClick])

    return (
        <div className="personaldetails-main-section" style={{ display: id === 'addAvailability' ? 'block' : 'none' }}>
            <h2>Add Availability</h2>
            <form autoComplete="off" onSubmit={handleStepThereSubmit}>
                <div className="personaldetails-section">
                    <div className="personal-details-fields">
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
                                                                            <div className="time-slots-box-first col-md-3 mb-3" key={index}>
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
                        disabled={isLoading}
                        hasSpinner={isLoading && submitClick}
                    />
                </div>
            </form>
        </div>
    );
};
