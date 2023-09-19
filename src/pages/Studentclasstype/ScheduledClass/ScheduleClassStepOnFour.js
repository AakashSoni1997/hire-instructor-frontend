import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Buttons/Buttons";
import { paymentOnProblemSolvingAction } from "../../../redux/actions/PaymentAction";
import EditIcon from "../EditIcon";
import PaymentCheckout from "../PaymentCheckout";
import SuccessCheckIcon from "../SuccessCheckIcon";

const ScheduleClassStepOnFour = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const dispatch = useDispatch();
    const location = useLocation()
    const navigate = useNavigate()
    const prevPageData = location?.state

    const [showratecard, ratecardShow] = useState(false);
    const [couponId, setCouponId] = useState()
    const [submitClick, setSubmitClick] = useState(false)

    const isLoadingSelector = useSelector((state) => state?.instructor?.loading)
    const paymentSelector = useSelector((state) => state?.instructor?.instructor_problem_solving)

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const handleCloseratecard = () => ratecardShow(false);

    const handlePrevious = () => {
        navigate(`/scheduleclass/payment-method/${id}`, { state: prevPageData });
        setActiveStep('payment-method');
    }

    const handlePayment = () => {
        let formdata = new FormData();
        formdata.append("subject_id", prevPageData.subject_id);
        formdata.append("level_id", prevPageData.level_id);
        formdata.append("amount", grandTotalAmount(amount, 0));
        if (couponId) {
            formdata.append("coupon_id", couponId);
        }
        formdata.append("instructor_id", id);
        formdata.append("pay_from", prevPageData.pay_from);
        formdata.append("card_id", prevPageData.card_id);
        formdata.append("title", prevPageData.title);
        formdata.append("description", prevPageData.description);
        formdata.append("file_doc", prevPageData.file_doc);
        dispatch(paymentOnProblemSolvingAction(formdata));
        setSubmitClick(true)
    }

    const grandTotalAmount = (amount, discount) => {
        let finalAmount = (Number(amount) - discount)
        return finalAmount.toFixed(2)
    }

    useEffect(() => {
        if (Object.keys(paymentSelector).length > 0 && submitClick) {
            if (paymentSelector.status) {
                ratecardShow(true)
                setSubmitClick(false)
            } else {
                setSubmitClick(false)
            }
        }
    }, [paymentSelector, submitClick])

    return (
        <>
            <div className="personaldetails-main-section on-demand-class-type">
                <h2>Checkout</h2>
                <div className="on-demand-class-content">
                    <div className="row g-5">
                        <div className="col-md-8 col-sm-12">

                            <PaymentCheckout setCouponId={setCouponId} amount={amount} grandTotalAmount={grandTotalAmount} />

                            <div className="d-flex justify-content-center mt-5">
                                <Button
                                    name="Back"
                                    BtnText="Back"
                                    BtnColor="yellow"
                                    BtnType="button"
                                    onClick={handlePrevious}
                                />
                                <Button
                                    BtnText="Proceed to Pay"
                                    name="pay"
                                    BtnColor="primary"
                                    BtnType="button"
                                    onClick={handlePayment}
                                    disabled={isLoadingSelector}
                                    hasSpinner={isLoadingSelector && submitClick}
                                />
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
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

                            <div className="personaldetails-section payable-amount-card-box">
                                <div className="row align-items-center">
                                    <div className="col-md-9 col-sm-12">
                                        <span className="amount-text">Card</span>
                                        <p className="account-number-code">xxxx xxxx xxxx {prevPageData?.last4}</p>
                                    </div>

                                    <div className="col-md-3 col-sm-12 text-end">
                                        <div className="btn edit-btn" onClick={() => navigate(`/scheduleclass/payment-method/${id}`, { state: prevPageData })}>
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='center-modal class-modal problemsolving workstation'
                show={showratecard}
                onHide={handleCloseratecard}
                backdrop="static"
                keyboard={false}
            >
                {/* closeButton */}
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='blogdetails-modal'>
                    <div className='classtype-section'>
                        <div className='checkmark'>
                            <SuccessCheckIcon />
                            <p>Payment Successful!</p>
                        </div>
                        <div className='url-box'>
                            <p> You have added successfully your Lesson on </p>
                            {/* <h3>{moment(paymentSelector?.data?.start_date, "DD-MM-YYYY").format("DD MMMM YYYY")} to {moment(paymentSelector?.data?.end_date, "DD-MM-YYYY").format("DD MMMM YYYY")}</h3> */}
                            <h3>13 December 2022   I   10:00 AM - 11:00 AM</h3>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='email-send'>
                        <div className='accept'>
                            <Link className="btn" to="/studentclassesdetails">Go to Classes Details</Link>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ScheduleClassStepOnFour