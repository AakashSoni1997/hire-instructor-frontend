
import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Buttons";
import { toast } from "react-toastify";
import PaymentMethod from "../PaymentMethod";
import EditIcon from "../EditIcon";

const ScheduleClassStepThree = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const location = useLocation()
    const navigate = useNavigate()
    const prevPageData = location?.state

    const [state, setState] = useState({});

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const handleNextSubmitButton = () => {
        if (Object.keys(state).length > 0) {
            navigate(`/scheduleclass/checkout/${id}`, { state: { ...prevPageData, ...state } });
            setActiveStep('checkout');
        } else {
            toast.error("Please select payment mode", { theme: "colored" })
        }
    }

    const handlePrevious = () => {
        navigate(`/scheduleclass/date-and-time/${id}`, { state: prevPageData });
        setActiveStep('date-and-time');
    }

    return (
        <div className="personaldetails-main-section on-demand-class-type" style={{ display: name === 'payment-method' ? 'block' : 'none' }}>
            <h2>Payment Method</h2>
            <div className="on-demand-class-content">
                <div className="row g-5">
                    <div className="col-md-8 col-sm-12">

                        <PaymentMethod setState={setState} state={state} />

                        <div className="d-flex justify-content-center mt-5">
                            <Button
                                name="Back"
                                BtnText="Back"
                                BtnColor="yellow"
                                BtnType="button"
                                onClick={handlePrevious}
                            />
                            <Button
                                BtnText="Next"
                                name="next"
                                BtnColor="primary"
                                BtnType="button"
                                onClick={handleNextSubmitButton}
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

                        <div className="personaldetails-section payable-amount-card-box">
                            <div className="row align-items-center">
                                <div className="col-md-9 col-sm-12">
                                    <span className="amount-text"> 13 Dec'22  I  10:00 AM - 11:00 AM </span>
                                </div>
                                <div className="col-md-3 col-sm-12 text-end">
                                    <Link className="btn edit-btn" to={`/scheduleclass/date-and-time/${id}`}>
                                        <EditIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleClassStepThree;