import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChooseFile } from "../../components/ChooseFile/ChooseFile";
import { FieldText } from "../../components/InputText/InputText";
import {
  GetInstructorGrades,
  GetInstructorQualificationLevel,
} from "../../redux/actions/instructorAction";
import Button from "./../../components/Buttons/Buttons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";
import { useNavigate, useParams } from "react-router-dom";
import { InstructorCompleteProfileStepTwo } from "../../redux/actions/CompleteProfileAction";
import moment from "moment";

export const StepTwoCompleteProfile = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [specialization, setSpecialization] = useState([
    { subject_name: "", grade_id: "" },
  ]);
  const [submitClick, setSubmitClick] = useState(false);

  useEffect(() => {
    setActiveStep(id);
  }, [id]);

  const isLoading = useSelector((state) => state.profile.loading);
  const completeProfileSelector = useSelector(
    (state) => state.profile.qualifications
  );
  const instructorLevel = useSelector(
    (state) => state?.instructor?.instructor_qualifiaction
  );
  const gradeLevel = useSelector(
    (state) => state?.instructor?.instructor_grades
  );

  useEffect(() => {
    dispatch(GetInstructorQualificationLevel());
    dispatch(GetInstructorGrades());
  }, [dispatch]);

  const handleAddMoreSubjects = () => {
    setSpecialization((s) => {
      return [...s, { subject_name: "", grade_id: "" }];
    });
  };
  const handleSpecializationDelete = (id) => {
    setSpecialization((oldValues) => {
      return oldValues.filter((_, i) => i !== id);
    });
  };

  const handleOnChange = (e) => {
    const index = e.target.id;
    if (e.target.name === "subject_name" || e.target.name === "grade_id") {
      setSpecialization((s) => {
        const newArr = s.slice();
        newArr[index][e.target.name] = e.target.value;
        return newArr;
      });
    }
  };

  const handlePrevious = () => {
    navigate("/completeprofile/personalDetails");
    setActiveStep("personalDetails");
  };

  const StepTwoValidationSchema = Yup.object().shape({
    ins_level_id: Yup.string().required("Education level is required!"),
    school_name: Yup.string().required("School/University name is required!"),
    percentage: Yup.string().required("Grade is required!"),
    full_subject_name: Yup.string().required("Subject is required!"),
    clg_start_year: Yup.string().required("Year started is required!"),
    clg_end_year: Yup.string().required("Year completed is required!"),
    certificate_image: Yup.string().required("Certificate is required!"),
  });

  const handleStepTwoSubmit = (value) => {
    let formData = new FormData();
    formData.append("ins_level_id", value.ins_level_id);
    formData.append("school_name", value.school_name);
    formData.append("percentage", value.percentage);
    formData.append("subject_name", value.full_subject_name);
    formData.append(
      "clg_start_year",
      moment(value.clg_start_year).format("YYYY")
    );
    formData.append("clg_end_year", moment(value.clg_end_year).format("YYYY"));
    formData.append("certificate_image", value.certificate_image);
    formData.append("specialization", JSON.stringify(specialization));
    dispatch(InstructorCompleteProfileStepTwo(formData));
    setSubmitClick(true);
  };

  useEffect(() => {
    if (Object.keys(completeProfileSelector).length > 0 && submitClick) {
      if (completeProfileSelector.status) {
        navigate("/completeprofile/teachingDetails");
        setActiveStep("teachingDetails");
      } else {
        setSubmitClick(false);
      }
    }
  }, [completeProfileSelector, submitClick]);

  return (
    <div
      className="personaldetails-main-section"
      style={{ display: id === "qualifications" ? "block" : "none" }}
    >
      <h2>Qualifications</h2>
      <Formik
        initialValues={{
          ins_level_id: "",
          school_name: "",
          percentage: "",
          full_subject_name: "",
          clg_start_year: "",
          clg_end_year: "",
          certificate_image: "",
        }}
        validationSchema={StepTwoValidationSchema}
        onSubmit={handleStepTwoSubmit}
      >
        {(formik) => {
          return (
            <Form onChange={handleOnChange}>
              <div className="personaldetails-section">
                <div className="personal-details-fields complete-profile2">
                  <div className="accountfieldmain">
                    <div className="accountfield">
                      <div className="accountfield-first dropdown-select">
                        <div className="App">
                          <Field
                            as="select"
                            name="ins_level_id"
                            className="select-control w-100"
                          >
                            <option value=""> Select Education Level </option>
                            {instructorLevel.map((value, index) => {
                              return (
                                <option value={value.id} key={index}>
                                  
                                  {value.inst_levels_name}
                                </option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="ins_level_id"
                            component={TextErrorMsg}
                          />
                        </div>
                      </div>

                      <div className="accountfield-first">
                        <FieldText
                          name="school_name"
                          type="text"
                          placeholder="School/University Name"
                        />
                      </div>

                      <div className="accountfield-first">
                        <FieldText
                          name="percentage"
                          type="text"
                          placeholder="Grade"
                        />
                      </div>

                      <div className="accountfield-first">
                        <FieldText
                          name="full_subject_name"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>

                      <div className="accountfield-first date-picker-sec">
                        <FieldText
                          name="clg_start_year"
                          type="date"
                          placeholder="Year Started"
                        />
                      </div>

                      <div className="accountfield-first date-picker-sec">
                        <FieldText
                          name="clg_end_year"
                          type="date"
                          placeholder="Year Completed"
                        />
                      </div>

                      <div className="accountfield-first text-area-box">
                        <div className="drag-image-video">
                          <Field name="certificate_image">
                            {({ form, field }) => {
                              return (
                                <ChooseFile
                                  name={field.name}
                                  label="Certificate"
                                  handleFileChoose={(e) =>
                                    form.setFieldValue(
                                      field.name,
                                      e.certificate_image
                                    )
                                  }
                                  error="file should be .jpg .png .jpeg and Size < 2MB"
                                  accept={["jpg", "jpeg", "png"]}
                                  Size={2048}
                                />
                              );
                            }}
                          </Field>
                          <ErrorMessage
                            name="certificate_image"
                            component={TextErrorMsg}
                          />
                        </div>
                      </div>

                      <div className="accountfield addsubjects-section">
                        <h3>Specialization</h3>
                        <div className="addsubjects">
                          <button
                            className="btn becomaninstructor"
                            onClick={handleAddMoreSubjects}
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.5"
                              height="17.5"
                              viewBox="0 0 17.5 17.5"
                            >
                              <circle
                                id="Ellipse_101"
                                data-name="Ellipse 101"
                                cx="8"
                                cy="8"
                                r="8"
                                transform="translate(0.75 0.75)"
                                fill="none"
                                stroke="#005eb5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <line
                                id="Line_176"
                                data-name="Line 176"
                                x2="6"
                                transform="translate(5.75 8.75)"
                                fill="none"
                                stroke="#005eb5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                              <line
                                id="Line_177"
                                data-name="Line 177"
                                y2="6"
                                transform="translate(8.75 5.75)"
                                fill="none"
                                stroke="#005eb5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                            Add More Subjects
                          </button>
                        </div>
                      </div>
                      {specialization.map((value, index) => (
                        <React.Fragment key={index}>
                          <div className="accountfield-first">
                            <FieldText
                              type="text"
                              name="subject_name"
                              placeholder="Specialization Subject"
                              id={index}
                              value={value.subject_name}
                            />
                          </div>

                          <div className="accountfield-first dropdown-select">
                            <div className="App">
                              <Field
                                as="select"
                                name="grade_id"
                                className="select-control w-100"
                                id={index}
                                value={value.grade_id}
                              >
                                <option value=""> Select grade </option>
                                {gradeLevel.map((value, index) => {
                                  return (
                                    <option value={value.id} key={index}>
                                      {value.grades_name}
                                    </option>
                                  );
                                })}
                              </Field>
                            </div>
                          </div>
                          <div className="accountfield-first cros-button-sub">
                            <button
                              onClick={() => handleSpecializationDelete(index)}
                              value={index}
                              type="button"
                              className={
                                index < 1
                                  ? `btn becomaninstructor`
                                  : `active btn becomaninstructor`
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.687"
                                height="26.597"
                                viewBox="0 0 20.687 26.597"
                              >
                                <path
                                  id="Icon_material-delete-forever"
                                  data-name="Icon material-delete-forever"
                                  d="M8.978,28.142A2.964,2.964,0,0,0,11.933,31.1H23.754a2.964,2.964,0,0,0,2.955-2.955V10.41H8.978Zm3.635-10.521L14.7,15.538l3.147,3.133,3.133-3.133,2.083,2.083-3.133,3.133,3.133,3.133L20.976,25.97l-3.133-3.133L14.711,25.97l-2.083-2.083,3.133-3.133Zm10.4-11.644L21.537,4.5H14.149L12.672,5.978H7.5V8.933H28.187V5.978Z"
                                  transform="translate(-7.5 -4.5)"
                                  fill="#fff"
                                />
                              </svg>
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
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
          );
        }}
      </Formik>
    </div>
  );
};
