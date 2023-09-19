import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { StepOneCompleteProfile } from "./StepOneCompleteProfile";
import { StepTwoCompleteProfile } from "./StepTwoCompleteProfile";
import { StepThreeCompleteProfile } from "./StepThreeCompleteProfile";
import { StepFourCompletProfile } from "./StepFourCompletProfile";
import { StepFiveCompleteProfile } from "./StepFiveCompleteProfile";
import "../../style.scss";
import "./CompleteProfile.scss"


const Newcompleteprofile = () => {
    const { id } = useParams()
    const [activeStep, setActiveStep] = useState(id);
    const steps = [
        { label: "Personal Details", key: "personalDetails"},
        { label: "Qualifications", key: "qualifications"},
        { label: "Teaching Details", key: "teachingDetails"},
        { label: "Add Availability", key: "addAvailability"},
        { label: "Bank Details", key: "bankDetails"},
    ];
    return (
        <>
            <div id="footer-bottom" className="instructorcompleteprofile">
                <Header />
                <div className="instru-bg-image">
                    <h1>Complete Profile</h1>
                    <p>
                        Home /<span> Complete Profile</span>
                    </p>
                </div>
                <div className="completeprofile completeProfile-container">
                    <div className="container">
                        <div className="row">
                            <div className="complete-profile-step">
                                <ul className="step-progressbar-ul">
                                    {steps.map((data, idx) =>
                                        <li key={data.key} className={`sp-item ${data.key} ${idx <= steps.findIndex(f => f.key === activeStep) ? 'active' : ""} ${idx < steps.findIndex(f => f.key === activeStep) ? 'saved' : ""}`}>
                                            <span className="sp-count"> {idx + 1} </span>
                                            <h5 className="sp-title"> {data.label}</h5>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div className="step-content-block">
                                {activeStep === 'personalDetails' && <StepOneCompleteProfile activeStep={activeStep} setActiveStep={setActiveStep} />}
                                {activeStep === 'qualifications' && <StepTwoCompleteProfile activeStep={activeStep} setActiveStep={setActiveStep} />}
                                {activeStep === 'teachingDetails' && <StepThreeCompleteProfile activeStep={activeStep} setActiveStep={setActiveStep} />}
                                {activeStep === 'addAvailability' && <StepFourCompletProfile activeStep={activeStep} setActiveStep={setActiveStep} />}
                                {activeStep === 'bankDetails' && <StepFiveCompleteProfile activeStep={activeStep} setActiveStep={setActiveStep} />}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Newcompleteprofile;
