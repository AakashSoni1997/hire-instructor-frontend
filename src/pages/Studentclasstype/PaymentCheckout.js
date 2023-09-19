import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Buttons/Buttons";
import { OnDemandClassCouponAction } from "../../redux/actions/instructorAction";
import { CouponCodeApplyAction, paymentOnDemand } from "../../redux/actions/PaymentAction";
import moment from "moment";
import { toast } from "react-toastify";
const PaymentCheckout = ({ setCouponId, amount, grandTotalAmount }) => {
    const dispatch = useDispatch();
    const location = useLocation()
    const prevPageData = location?.state

    const [showratecard, ratecardShow] = useState(false);
    const [finalDiscountAmount, setFinalDiscountAmount] = useState(0)
    const [couponCodeName, setCouponCodeName] = useState()
    const [couponSubmitClick, setCouponSubmitClick] = useState(false)

    const isLoading = useSelector((state) => state?.instructor?.loading)
    const couponSelector = useSelector((state) => state?.instructor?.ondemand_coupon)
    const paymentSelector = useSelector((state) => state?.card?.payment_success)
    const couponCodeApplySelector = useSelector((state) => state?.instructor?.apply_coupon_code);

    const handleCloseratecard = () => ratecardShow(false);
    const handleShowratecard = () => ratecardShow(true);

    useEffect(() => {
        dispatch(OnDemandClassCouponAction(prevPageData?.subject_id))
    }, [dispatch])

    const getExpiresDate = (date) => {
        let finalDate = moment(date, 'YYYY-MM-DD').diff(moment(moment(), 'YYYY-MM-DD'), 'days')
        return finalDate;
    }

    const handleApplyCode = (discount, id = null) => {
        setCouponId(id)
        let percentage = Number(amount) * Number(discount) / 100
        setFinalDiscountAmount(percentage.toFixed(2))
        ratecardShow(false)
        toast.success("Coupon code applied successfully", { theme: "colored" });
    }

    const submitCouponCode = (e) => {
        e.preventDefault();
        if (couponCodeName) {
            dispatch(CouponCodeApplyAction({
                type_coupon: 2, subject_id: prevPageData?.subject_id, coupon_name: couponCodeName
            }))
            setCouponSubmitClick(true)
        } else {
            toast.error("Please Enter Coupon code", { theme: "colored" });
        }
    }

    useEffect(() => {
        if (Object.keys(couponCodeApplySelector).length > 0 && couponSubmitClick) {
            if (couponCodeApplySelector.status) {
                setCouponCodeName("")
                setCouponSubmitClick(false)
                let percentage = Number(amount) * Number(couponCodeApplySelector.data) / 100
                setFinalDiscountAmount(percentage.toFixed(2))
            } else {
                setCouponSubmitClick(false)
                setCouponCodeName("")
            }
        }
    }, [couponCodeApplySelector, couponSubmitClick])

    return (
        <>
            <div className="personaldetails-section tow-card-box-coupon">
                <div className="row g-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="select-subject-level-card">
                            <span className="amount-text2">Have a coupon code?</span>
                            <div className="coupon-button">
                                <input type="text" value={couponCodeName} placeholder="Coupon Code" onChange={(e) => setCouponCodeName(e.target.value.toUpperCase())} />
                                <Button
                                    BtnText={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="23.627"
                                            height="15.758"
                                            viewBox="0 0 23.627 15.758"
                                        >
                                            <path
                                                id="Icon_ionic-ios-arrow-round-forward"
                                                data-name="Icon ionic-ios-arrow-round-forward"
                                                d="M22.942,11.553a1.072,1.072,0,0,0-.008,1.51l4.99,5H8.934a1.067,1.067,0,0,0,0,2.134H27.915l-4.99,5a1.08,1.08,0,0,0,.008,1.51,1.062,1.062,0,0,0,1.5-.008L31.2,19.883h0a1.2,1.2,0,0,0,.222-.336,1.018,1.018,0,0,0,.082-.41,1.07,1.07,0,0,0-.3-.747l-6.762-6.811A1.045,1.045,0,0,0,22.942,11.553Z"
                                                transform="translate(-7.875 -11.252)"
                                                fill="#2d2d2d"
                                            />
                                        </svg>
                                    }
                                    BtnColor="coupon"
                                    BtnType="button"
                                    disabled={isLoading}
                                    hasSpinner={isLoading && couponSubmitClick}
                                    onClick={submitCouponCode}
                                />
                            </div>
                            <button type="button" isLoading className="btn-coupan" onClick={handleShowratecard}>
                                Coupons for you
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="select-subject-level-card">
                            <div className="total-amount-card">
                                <div className="row gy-4 align-items-center">
                                    <div className="col-md-8 col-sm-12">
                                        <span className="amount-text">Total</span>
                                    </div>
                                    <div className="col-md-4 col-sm-12 text-end">
                                        <span className="amount-text">${amount ? amount : 0}</span>
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <span className="amount-text"> Coupon Code Discount </span>
                                        {finalDiscountAmount ?
                                            <small className="d-block text-success"> <strong> Coupon Applied</strong> </small>
                                            :
                                            null
                                        }
                                    </div>
                                    <div className="col-md-4 col-sm-12 text-end">
                                        <span className="amount-text">-${finalDiscountAmount}</span>
                                    </div>
                                    <div className="border-bottom2"> </div>
                                    <div className="col-md-8 col-sm-12">
                                        <span className="amount-text">Grand Total</span>
                                    </div>
                                    <div className="col-md-4 col-sm-12 text-end">
                                        <span className="amount-text"> ${grandTotalAmount(amount, finalDiscountAmount)} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                className="center-modal class-modal problemsolving rejectbooking paymentmethod available-coupons"
                show={showratecard}
                onHide={handleCloseratecard}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Available Coupons</Modal.Title>
                </Modal.Header>
                <Modal.Body className="blogdetails-modal">
                    <div className="row g-5">
                        {couponSelector &&
                            couponSelector?.data?.length > 0 ?
                            couponSelector?.data?.map((value, index) => {
                                return (
                                    <div className="col-lg-6 col-12" key={index}>
                                        <div className="card-coupons-box1">
                                            <div className="row g-5">
                                                <div className="col-lg-8">
                                                    <h3><span>{value.coupon_discount}% OFF</span> on all {value.subject.tutor_sub_name} Courses</h3>
                                                </div>
                                                <div className="col-lg-4 text-end">
                                                    <button type="button" className="btn btn-apply2" onClick={() => handleApplyCode(value.coupon_discount, value.id)}>Apply</button>
                                                </div>
                                                <div className="col-lg-7 text-start">
                                                    <div className="btn text-uppercase"> {value.coupon_code} </div>
                                                </div>
                                                <div className="col-lg-5 text-end align-self-center">
                                                    <h4>Expires in {getExpiresDate(value.expire_date)} days</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="text-center py-5">
                                <img src="/images/coupon-icon.svg" width="100" alt="Coupon" />
                                <span className="d-block pt-4"> No Coupon Codes are Available</span>
                            </div>
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PaymentCheckout