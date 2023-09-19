import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorMsg from "../../../components/TextErrorMsg/TextErrorMsg";
import Button from "../../../components/Buttons/Buttons";

const StepOneSubscription = ({ amount, setActiveStep }) => {
    const { id, name } = useParams();
    const navigate = useNavigate()
    const [sideBarDetails, setSideBarDetails] = useState()

    useEffect(() => {
        setActiveStep(name)
    }, [name])

    const handleOnChange = (event) => {
        setSideBarDetails(event.target.value)
    }

    const handleStepOneSubmit = (value) => {
        navigate(`/subscription/payment-method/${id}`, { state: { ...value, "subscription": sideBarDetails } });
        setActiveStep('payment-method');
    }

    return (
        <>
            <div className="personaldetails-main-section on-demand-class-type" style={{ display: name === 'selectplan' ? 'block' : 'none' }}>
                <h2>Select Plan</h2>
                <div className="on-demand-class-content">
                    <Formik
                        initialValues={{
                            select_plan: ""
                        }}
                        validationSchema={() =>
                            Yup.object().shape({
                                select_plan: Yup.string().required("Select Plan is Required!")
                            })
                        }
                        onSubmit={handleStepOneSubmit}
                    >
                        {formik => {
                            return (
                                <Form onChange={handleOnChange}>
                                    <div className="row g-5">
                                        <div className="col-md-8 col-sm-12">
                                            <div className="personaldetails-section">
                                                <div className="select-subject-level-card payment-box-main-content selectplan">
                                                    <div className="paymentmethod-box">
                                                        <div className="payment-three-card row">
                                                            <div className="col-md-6">
                                                                <div className="cardnumber-box">
                                                                    <div className="radio-box selectdatetime-section">
                                                                        <div className="check-box-create">
                                                                            <Field name="select_plan">
                                                                                {({ form, field }) => {
                                                                                    return (
                                                                                        <>
                                                                                            <input
                                                                                                type="radio"
                                                                                                id="card1"
                                                                                                name={field.name}
                                                                                                //1 is Monthly Subscription
                                                                                                value="1"
                                                                                                onChange={e => form.setFieldValue(field.name, e.target.checked)}
                                                                                            />
                                                                                            <label htmlFor="card1">
                                                                                                <h3>Monthly Subscription</h3>
                                                                                                <p> Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                                                                                                <span>$500</span>
                                                                                            </label>
                                                                                        </>
                                                                                    )
                                                                                }}
                                                                            </Field>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="cardnumber-box">
                                                                    <div className="radio-box selectdatetime-section">
                                                                        <div className="check-box-create">
                                                                            <Field name="select_plan">
                                                                                {({ form, field }) => {
                                                                                    return (
                                                                                        <>
                                                                                            <input
                                                                                                type="radio"
                                                                                                id="card2"
                                                                                                name={field.name}
                                                                                                //1 is Yearly Subscription
                                                                                                value="2"
                                                                                                onChange={e => form.setFieldValue(field.name, e.target.checked)}
                                                                                            />
                                                                                            <label htmlFor="card2">
                                                                                                <h3>Yearly Subscription</h3>
                                                                                                <p> Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                                                                                                <span>$5000</span>
                                                                                            </label>
                                                                                        </>
                                                                                    )
                                                                                }}
                                                                            </Field>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ErrorMessage name="select_plan" component={TextErrorMsg} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center pt-5">
                                                <Button
                                                    BtnText="Next"
                                                    name="next"
                                                    BtnColor="primary"
                                                    BtnType="submit"
                                                    disabled={!formik.isValid}
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
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default StepOneSubscription;