import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import "../../../../src/style.scss";
import StepHead from "../../../components/MultiStepForm/StepHead";
import { PostInstructorDetail } from "../../../redux/actions/instructorAction";
import { useDispatch, useSelector } from "react-redux";
import PSClassStepOne from "./PSClassStepOne";
import PSClassStepTwo from "./PSClassStepTwo";
import PSClassStepThere from "./PSClassStepThere";

const Problemsolvingclass = () => {
    const dispatch = useDispatch();
    const { id, name } = useParams();
    const [activeStep, setActiveStep] = useState(name);
    
    const instructorDetailsState = useSelector((state) => state.instructor.instructor_detail);
    const amount = instructorDetailsState?.user_extra_info?.[0]?.problem_solving_price;

    useEffect(() => {
        let formData = new FormData();
        formData.append("id", id);
        dispatch(PostInstructorDetail(formData));
    }, [id, dispatch]);

    const steps = [
        { label: "Upload Problem", key: "upload-problem" },
        { label: "Payment Method", key: "payment-method" },
        { label: "Checkout", key: "checkout" },
    ];

    return (
        <>
            <div id="footer-bottom" className="instructorcompleteprofile">
                <Header />
                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p>
                        Home / Instructors / Rosy Mela /<span>Booking</span>
                    </p>
                </div>

                <div className="completeprofile completeProfile-container">
                    <div className="container">
                        <div className="row">
                            <StepHead data={steps} activeStep={activeStep} />
                            <div className="step-content-block">
                                {activeStep === 'upload-problem' && <PSClassStepOne setActiveStep={setActiveStep} amount={amount} />}
                                {activeStep === 'payment-method' && <PSClassStepTwo setActiveStep={setActiveStep} amount={amount} />}
                                {activeStep === 'checkout' && <PSClassStepThere setActiveStep={setActiveStep} amount={amount} />}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Problemsolvingclass