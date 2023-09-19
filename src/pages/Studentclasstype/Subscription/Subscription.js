import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../../../../src/style.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StepOneSubscription from "./StepOneSubscription";
import StepTwoSubscription from "./StepTwoSubscription";
import StepThreeSubscription from "./StepThreeSubscription";
import StepHead from "../../../components/MultiStepForm/StepHead";
import { PostInstructorDetail } from "../../../redux/actions/instructorAction";

const Subscription = () => {
    const dispatch = useDispatch();
    const { id, name } = useParams();
    const [activeStep, setActiveStep] = useState(name);

    const instructorDetailsState = useSelector((state) => state.instructor.instructor_detail);
    const amount = instructorDetailsState?.user_extra_info?.[0]?.monthly_subscription_price;

    useEffect(() => {
        let formData = new FormData();
        formData.append("id", id);
        dispatch(PostInstructorDetail(formData));
    }, [id, dispatch]);

    const steps = [
        { label: "Select Plan", key: "selectplan" },
        { label: "Payament Method", key: "payment-method" },
        { label: "Checkout", key: "checkout" },
    ];

    return (
        <>
            <div id="footer-bottom" className="instructorcompleteprofile">
                <Header />
                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p>
                        Home / Instructors / Rosy Mela /<span> Booking </span>
                    </p>
                </div>

                <div className="completeprofile completeProfile-container">
                    <div className="container">
                        <div className="row">

                            <StepHead data={steps} activeStep={activeStep} />

                            <div className="step-content-block">
                                {activeStep === "selectplan" && (<StepOneSubscription amount={amount} setActiveStep={setActiveStep} />)}
                                {activeStep === "payment-method" && (<StepTwoSubscription amount={amount} setActiveStep={setActiveStep} />)}
                                {activeStep === "checkout" && (<StepThreeSubscription amount={amount} setActiveStep={setActiveStep} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Subscription;
