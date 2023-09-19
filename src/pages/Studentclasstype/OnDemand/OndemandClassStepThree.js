import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Buttons/Buttons";
import { paymentOnDemand } from "../../../redux/actions/PaymentAction";
import EditIcon from "../EditIcon";
import PaymentCheckout from "../PaymentCheckout";

const OndemandClassStepThree = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const dispatch = useDispatch();
    const location = useLocation()
    const navigate = useNavigate()
    const prevPageData = location?.state

    const [couponId, setCouponId] = useState()
    const [submitClick, setSubmitClick] = useState(false)

    const isLoading = useSelector((state) => state?.instructor?.loading)
    const paymentSelector = useSelector((state) => state?.instructor?.instructor_payment)

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const handlePrevious = () => {
        navigate(`/ondemandclass/payment-method/${id}`, { state: prevPageData });
        setActiveStep('payment-method');
    }

    const handlePayment = () => {
        let data = {
            subject_id: prevPageData.subject_id,
            level_id: prevPageData.level_id,
            // amount: grandTotalAmount(amount, finalDiscountAmount),
            amount: grandTotalAmount(amount, 0),
            coupon_id: couponId,
            instructor_id: id,
            pay_from: prevPageData.pay_from,
            card_id: prevPageData.card_id
        }
        dispatch(paymentOnDemand(data));
        setSubmitClick(true)
    }

    const grandTotalAmount = (amount, discount) => {
        let finalAmount = (Number(amount) - discount)
        return finalAmount.toFixed(2)
    }

    useEffect(() => {
        if (Object.keys(paymentSelector).length > 0 && submitClick) {
            if (paymentSelector.status) {
                navigate((`/ondemandclassconfirmation/${paymentSelector.data.id}`))
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
                                    disabled={isLoading}
                                    hasSpinner={isLoading && submitClick}
                                />
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="personaldetails-section payable-amount-card-box">
                                <div className="row align-items-center">
                                    <div className="col-md-9 col-sm-12">
                                        <span className="amount-text">On Demand Class</span>
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
                                        <Link className="btn edit-btn" to={`/ondemandclass/subject-and-level/${id}`}>
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
                                        <div className="btn edit-btn" onClick={() => navigate(`/ondemandclass/payment-method/${id}`, { state: prevPageData })}>
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default OndemandClassStepThree