import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FieldText } from "../../components/InputText/InputText";
import Button from "./../../components/Buttons/Buttons";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Regex } from '../../Utils/Regex';
import { InstructorCompleteProfileStepFive } from '../../redux/actions/CompleteProfileAction';

export const StepFiveCompleteProfile = ({ setActiveStep }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams()
    const [submitClick, setSubmitClick] = useState(false)

    const isLoading = useSelector((state) => state.profile.loading);
    const completeProfileSelector = useSelector((state) => state.profile.bank_details);

    useEffect(() => {
        setActiveStep(id)
    }, [id])

    const handlePrevious = () => {
        navigate("/completeprofile/addAvailability");
        setActiveStep('addAvailability');
    }

    const StepFiveValidationSchema = Yup.object().shape({
        routing_number: Yup.string().matches(Regex.ROUTING_NUMBER_REGEX, "You have entered invalid routing number.").required('Routing number is Required!'),
        holder_name: Yup.string().matches(Regex.ALLOW_LETTERS_ONLY, "Account holder's name must not contain numbers or special characters.").required('Account holder name is Required!'),
        account_number: Yup.string().matches(Regex.BANK_ACCOUNT_REGEX, 'Account number should be between 9 to 18 digits.').required('Account number is Required!'),
        branch: Yup.string().matches(Regex.ALLOW_LETTERS_ONLY, "Branch name must not contain numbers or special characters.").required('Branch name is Required!'),
    })

    const handleStepFiveSubmit = (value) => {
        let data = {
            routing_number: value.routing_number,
            holder_name: value.holder_name,
            account_number: value.account_number,
            branch: value.branch
        }
        dispatch(InstructorCompleteProfileStepFive(data));
        setSubmitClick(true)
    }

    useEffect(() => {
        if (Object.keys(completeProfileSelector).length > 0 && submitClick) {
            if (completeProfileSelector.status) {
                navigate("/");
                setActiveStep('');
            } else {
                setSubmitClick(false)
            }
        }
    }, [completeProfileSelector, submitClick])

    return (
        <div className="personaldetails-main-section" style={{ display: id === 'bankDetails' ? 'block' : 'none' }}>
            <h2>Bank Details</h2>
            <Formik
                initialValues={{
                    routing_number: "",
                    holder_name: "",
                    account_number: "",
                    branch: ""
                }}
                validationSchema={StepFiveValidationSchema}
                onSubmit={handleStepFiveSubmit}
            >
                {formik => {
                    return (
                        <Form>
                            <div className="personaldetails-section">
                                <div className="personal-details-fields complete-profile2">
                                    <div className="accountfieldmain">
                                        <div className="accountfield">
                                            <div className="accountfield-first">
                                                <FieldText
                                                    type="number"
                                                    name="routing_number"
                                                    placeholder="Routing Number"
                                                />
                                            </div>
                                            <div className="accountfield-first">
                                                <FieldText
                                                    type="number"
                                                    name="account_number"
                                                    placeholder="Account Number"
                                                />
                                            </div>
                                            <div className="accountfield-first">
                                                <FieldText
                                                    type="text"
                                                    name="holder_name"
                                                    placeholder="Account Holder Name"
                                                />
                                            </div>
                                            <div className="accountfield-first">
                                                <FieldText
                                                    type="text"
                                                    name="branch"
                                                    placeholder="Branch Name"
                                                />
                                            </div>
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
                                    disabled={!formik.isValid || isLoading}
                                    hasSpinner={isLoading && submitClick}
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}
