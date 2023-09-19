import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../../../style.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StepHead from "../../../components/MultiStepForm/StepHead";
import { GetInstructorList, PostInstructorDetail } from "../../../redux/actions/instructorAction";
import ScheduleClassStepOne from "./ScheduleClassStepOne";
import ScheduleClassStepTwo from "./ScheduleClassStepTwo"
import ScheduleClassStepThree from "./ScheduleClassStepThree";
import ScheduleClassStepOnFour from "./ScheduleClassStepOnFour";

const Scheduleclass = () => {
    const dispatch = useDispatch();
    const { id, name } = useParams();
    const [activeStep, setActiveStep] = useState(name);

    const instructorDetailsState = useSelector((state) => state.instructor.instructor_detail);
    const amount = instructorDetailsState?.user_extra_info?.[0]?.schedule_price;

    useEffect(() => {
        let formData = new FormData();
        formData.append("id", id);
        dispatch(PostInstructorDetail(formData));
    }, [id, dispatch]);

    useEffect(() => {
        dispatch(GetInstructorList())
    }, [dispatch])

    const steps = [
        { label: "Subject & Level", key: "subject-and-level" },
        { label: "Date & Time", key: "date-and-time" },
        { label: "Payment Method", key: "payment-method" },
        { label: "Checkout", key: "checkout" },
    ];

    return (
        <>
            <div id="footer-bottom" className="instructorcompleteprofile">
                <Header />

                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p> Home / Instructors / Rosy Mela /<span> Booking</span></p>
                </div>

                <div className="completeprofile completeProfile-container">
                    <div className="container">
                        <div className="row">
                            <StepHead data={steps} activeStep={activeStep} />
                            <div className="step-content-block">
                                {activeStep === 'subject-and-level' && <ScheduleClassStepOne setActiveStep={setActiveStep} amount={amount} />}
                                {activeStep === 'date-and-time' && <ScheduleClassStepTwo setActiveStep={setActiveStep} amount={amount} />}
                                {activeStep === 'payment-method' && <ScheduleClassStepThree setActiveStep={setActiveStep} amount={amount} />}
                                {activeStep === 'checkout' && <ScheduleClassStepOnFour setActiveStep={setActiveStep} amount={amount} />}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};
export default Scheduleclass;
