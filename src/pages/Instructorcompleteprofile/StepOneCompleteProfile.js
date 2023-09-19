import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseFile } from "../../components/ChooseFile/ChooseFile";
import { FieldText } from "../../components/InputText/InputText";
import Numberinput from "../../components/Numberinput/Numberinput";
import { GetCountryList } from "../../redux/actions/HomePageActions";
import Button from "./../../components/Buttons/Buttons";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";
import moment from "moment/moment";
import { InstructorCompleteProfileStepOne } from "../../redux/actions/CompleteProfileAction";

export const StepOneCompleteProfile = ({ setActiveStep }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams()
    const [languageName, setLanguageName] = useState([])
    const [submitClick, setSubmitClick] = useState(false)

    useEffect(() => {
        setActiveStep(id)
    }, [id])

    const isLoading = useSelector((state) => state.profile.loading);
    const completeProfileSelector = useSelector((state) => state.profile.personal_detail);
    const user = useSelector((state) => state.auth.user);
    const countryList = useSelector((state) => state?.home?.get_country_list);
    const handleMultiSelect = (data) => {
        const languagesArray = data?.map((elem) => {
            return elem.key;
        });
        setLanguageName([...languagesArray]);
    };

    useEffect(() => {
        dispatch(GetCountryList());
    }, [dispatch]);

    const StepOneValidationSchema = Yup.object().shape({
        // first_name: Yup.string().required('First name is required!'),
        // last_name: Yup.string().required('Last name is required!'),
        // email: Yup.string().email('Invalid email').required('Email is required!'),
        // phone_number: Yup.string().min(13, "Number must be at most 10 characters").max(13, "Number must be at most 10 characters").matches(Regex.MOBILE_NUMBER_REGEX, 'Phone number is not valid').required('Phone number is required!'),
        dob: Yup.string().required('DOB is Required!'),
        country_id: Yup.string().required('country is required!'),
        language_name: Yup.string().required('Language is required!'),
        descriptions: Yup.string().required('Descriptions is required!'),
        profile_image: Yup.string().required('Profile Picture is required!'),
        profile_video: Yup.string().required('Profile Video is required!'),
        proofId_image: Yup.string().required('Proof of ID is required!'),
        proofaddress_image: Yup.string().required('Proof of Address is required!'),
    })

    const handleStepOneSubmit = (value) => {
        let formData = new FormData();
        formData.append("first_name", value?.first_name ? value?.first_name : user?.first_name);
        formData.append("last_name", value?.last_name ? value?.last_name : user?.last_name);
        formData.append("email", value?.email ? value?.email : user?.email);
        formData.append("phone_number", value?.phone_number ? value?.phone_number : user?.phone_number);
        formData.append("dob", moment(value.dob).format("DD/MM/YY"));
        formData.append("language_name", JSON.stringify(languageName));
        formData.append("country_id", value.country_id);
        formData.append("descriptions", value.descriptions);
        formData.append("profile_image", value.profile_image);
        formData.append("profile_video", value.profile_video);
        formData.append("proofId_image", value.proofId_image);
        formData.append("proofaddress_image", value.proofaddress_image);
        formData.append("social_type", 0);
        dispatch(InstructorCompleteProfileStepOne(formData));
        setSubmitClick(true)
    }

    useEffect(() => {
        if (Object.keys(completeProfileSelector).length > 0 && submitClick) {
            if (completeProfileSelector.status) {
                navigate("/completeprofile/qualifications");
                setActiveStep('qualifications');
            } else {
                setSubmitClick(false)
            }
        }
    }, [completeProfileSelector, submitClick])

    return (
        <div className="personaldetails-main-section" style={{ display: id === 'personalDetails' ? 'block' : 'none' }}>
            <h2>Personal Details</h2>
            <Formik
                initialValues={{
                    first_name: user?.first_name,
                    last_name: user?.last_name,
                    email: user?.email,
                    phone_number: user?.phone_number,
                    dob: moment(user?.dob, "DD/MM/YYYY").format("YYYY-MM-DD"),
                    country_id: user?.country_id,
                    language_name: "",
                    descriptions: "",
                    profile_image: "",
                    profile_video: "",
                    proofId_image: "",
                    proofaddress_image: ""
                }}
                enableReinitialize={true}
                validationSchema={StepOneValidationSchema}
                onSubmit={handleStepOneSubmit}
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
                                                    name="first_name"
                                                    type="text"
                                                    placeholder="First Name"
                                                    defaultValue={formik.values.first_name}
                                                    disabled={true}
                                                />
                                            </div>
                                            <div className="accountfield-first">
                                                <FieldText
                                                    name="last_name"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    defaultValue={formik.values.last_name}
                                                    disabled={true}
                                                />
                                            </div>
                                            <div className="accountfield-first email-defult-value">
                                                <FieldText
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    disabled={true}
                                                    defaultValue={formik.values.email}
                                                />
                                            </div>

                                            <div className="accountfield-first contact-section dropdown-select d-block">
                                                <Field name="phone_number">
                                                    {({ form, field }) => {
                                                        return (
                                                            <Numberinput
                                                                GetValue={(data) => form.setFieldValue(field.name, data.phone_number)}
                                                                name={field.name}
                                                                defaultValue={formik.values.phone_number}
                                                                disabled={true}
                                                            />
                                                        )
                                                    }}
                                                </Field>
                                                <ErrorMessage name="phone_number" component={TextErrorMsg} />
                                            </div>

                                            <div className="accountfield-first date-picker-sec">
                                                <div className="form-group floating-label">
                                                    <FieldText
                                                        name="dob"
                                                        type="date"
                                                        placeholder="DOB"
                                                        defaultValue={formik.values.dob}
                                                    />
                                                </div>
                                            </div>

                                            <div className="accountfield-first">
                                                <Field name="language_name">
                                                    {({ form, field }) => {
                                                        return (
                                                            <Multiselect
                                                                disablePreSelectedValues
                                                                name={field.name}
                                                                displayValue="key"
                                                                onRemove={function noRefCheck() { }}
                                                                onSelect={(data) => {
                                                                    handleMultiSelect(data)
                                                                    form.setFieldValue(field.name, JSON.stringify(data))
                                                                }}
                                                                placeholder="Language"
                                                                closeIcon="close"
                                                                avoidHighlightFirstOption
                                                                options={[
                                                                    {
                                                                        cat: "Group 1",
                                                                        key: "English",
                                                                    },
                                                                    {
                                                                        cat: "Group 2",
                                                                        key: "Spanish",
                                                                    },
                                                                    {
                                                                        cat: "Group 3",
                                                                        key: "Physics",
                                                                    },
                                                                    {
                                                                        cat: "Group 4",
                                                                        key: "Hindi",
                                                                    },
                                                                ]}
                                                            />
                                                        )
                                                    }}
                                                </Field>
                                                <ErrorMessage name="language_name" component={TextErrorMsg} />
                                            </div>

                                            <div className="accountfield-first dropdown-select">
                                                <div className="App">
                                                    <Field as="select" name="country_id" className='select-control w-100'>
                                                        <option value=""> Select Country </option>
                                                        {countryList.map((value, index) => {
                                                            return (
                                                                <option value={value.id} key={index}> {value.name} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="country_id" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="accountfield-first text-area-box">
                                                <div className="form-group floating-label">
                                                    <Field name="descriptions">
                                                        {({ form, field }) => {
                                                            return (
                                                                <>
                                                                    <textarea
                                                                        id="textarea"
                                                                        className="form-control"
                                                                        rows="3"
                                                                        name={field.name}
                                                                        onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                                                                    ></textarea>
                                                                    <label htmlFor="textarea">About you</label>
                                                                </>
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="descriptions" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="accountfield-first">
                                                <div className="drag-image-video">
                                                    <Field name="profile_image">
                                                        {({ form, field }) => {
                                                            return (
                                                                <ChooseFile
                                                                    name={field.name}
                                                                    label="Profile Picture"
                                                                    handleFileChoose={(e) => form.setFieldValue(field.name, e.profile_image)}
                                                                    error="file should be .jpg .png .jpeg and Size < 2MB"
                                                                    accept={["jpg", "jpeg", "png"]}
                                                                    Size={2048}
                                                                />
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="profile_image" component={TextErrorMsg} />
                                                </div>
                                            </div>
                                            <div className="accountfield-first">
                                                <div className="drag-image-video">
                                                    <Field name="profile_video">
                                                        {({ form, field }) => {
                                                            return (
                                                                <ChooseFile
                                                                    label="Profile Video"
                                                                    name={field.name}
                                                                    handleFileChoose={(e) => form.setFieldValue(field.name, e.profile_video)}
                                                                    error="file should be .mp4 .mkv .webp and Size < 3MB"
                                                                    accept={["mp4", "webp", "mkv"]}
                                                                    Size={5120}
                                                                />
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="profile_video" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="accountfield-first">
                                                <div className="drag-image-video">
                                                    <Field name="proofId_image">
                                                        {({ form, field }) => {
                                                            return (
                                                                <ChooseFile
                                                                    label="Proof of ID"
                                                                    name={field.name}
                                                                    handleFileChoose={(e) => form.setFieldValue(field.name, e.proofId_image)}
                                                                    error="file should be .jpg .png .jpeg and Size less than 2MB"
                                                                    accept={["jpg", "jped", "png"]}
                                                                    Size={2048}
                                                                />
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="proofId_image" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="accountfield-first">
                                                <div className="drag-image-video">
                                                    <Field name="proofaddress_image">
                                                        {({ form, field }) => {
                                                            return (
                                                                <ChooseFile
                                                                    label="Proof of Address"
                                                                    name={field.name}
                                                                    handleFileChoose={(e) => form.setFieldValue(field.name, e.proofaddress_image)}
                                                                    error="file should be .jpg .png .jpeg and Size less than 2MB"
                                                                    accept={["jpg", "jped", "png"]}
                                                                    Size={2048}
                                                                />
                                                            )
                                                        }}
                                                    </Field>
                                                    <ErrorMessage name="proofaddress_image" component={TextErrorMsg} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
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
};
