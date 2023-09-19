import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import "./Instructorprofile.scss";
import { FieldText } from "../../components/InputText/InputText";
import { ChooseFile } from "../../components/ChooseFile/ChooseFile";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";
import * as Yup from "yup";
import { GetCategory, GetCourses } from "../../redux/actions/HomePageActions";
import {
  GetInstructorClassLevel,
  GetInstructorQualificationLevel,
} from "../../redux/actions/instructorAction";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import { Alert } from "bootstrap";
import { AddGroupClass } from "../../redux/actions/GroupClassActions";

const options2 = [
  { value: "Category A", label: "Category A" },
  { value: "Category B", label: "Category B" },
  { value: "Category C", label: "Category C" },
  { value: "Category D", label: "Category D" },
];

const initialValues = {
  class_name: "",
  instructor_courseid: "",
  price: "",
  level_id: "",
  number_of_class: "",
  duration: "",
  total_seat: "",
  full_description: "",
  description: "",
  picture: "",
  topic_class: [{ topic_class: "", time: new Date() }],
};

const validationSchema = Yup.object().shape({
  class_name: Yup.string().required("class name required !"),
  instructor_courseid: Yup.string().required("select course required !"),
  price: Yup.string().required("price required !"),
  level_id: Yup.string().required("subject level required !"),
  number_of_class: Yup.string().required("number of classes required !"),
  duration: Yup.string().required("duration required !"),
  total_seat: Yup.string().required("Total seats required !"),
  full_description: Yup.string().required("description required !"),
  description: Yup.string().required("description required !"),
  picture: Yup.string().required("picture required !"),
  topic_class: Yup.array().of(
    Yup.object().shape({
      topic_class: Yup.string().required("Topic name is required!"),
      time: Yup.string().required("Topic name is required!"),
    })
  ),
});

const Addgroupclass = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.home?.get_category);
  const classLevel = useSelector(
    (state) => state?.instructor?.instructor_class_level
  );
  useEffect(() => {
    dispatch(GetCategory());
    dispatch(GetInstructorClassLevel());
  }, [dispatch]);

  const handleAddGroupClassSubmit = (values, { resetForm }) => {
    console.log(values, "values");
    let formData = new FormData();
    formData.append("class_name", values.class_name);
    formData.append("instructor_courseid", values.instructor_courseid);
    formData.append("price", values.price);
    formData.append("level_id", values.level_id);
    formData.append("number_of_class", values.number_of_class);
    formData.append("duration", values.duration);
    formData.append("total_seat", values.total_seat);
    formData.append("full_description", values.full_description);
    formData.append("description", values.description);
    formData.append("picture", values.picture);
    formData.append("topic_class", JSON.stringify(values.topic_class));
    dispatch(AddGroupClass(formData));
    resetForm();
  };

  return (
    <>
      <div id="footer-bottom" className="instructor-profile addnewblog-page">
        <Header />
        <div className="myprofile-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-12 col-lg-4 col-xl-4">
                <Instructorsidebar />
              </div>

              <div className="col-md-12 col-lg-8 col-xl-8">
                <div className="profile-top-heading">
                  <h2>Add Group Class</h2>
                </div>
                <div className="my-profile-details">
                  <div className="manages-section-main">
                    <div className="tab-section-profile">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleAddGroupClassSubmit}
                      >
                        {(formik) => (
                          <Form>
                            <div className="bolg-setion">
                              <div className="blog-title">
                                <FieldText
                                  name="class_name"
                                  type="text"
                                  placeholder="Class Name"
                                  defaultValue={formik.values.class_name}
                                />
                              </div>
                              <div className="dropdown-select">
                                <div className="App">
                                  <Field
                                    as="select"
                                    name="instructor_courseid"
                                    className="select-control w-100"
                                  >
                                    <option value="">Select Course</option>
                                    {categoryList.map((value, index) => {
                                      return (
                                        <option value={value.id} key={index}>
                                          {value.category_name}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="instructor_courseid"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>

                              <div className="blog-title">
                                <FieldText
                                  name="price"
                                  type="number"
                                  placeholder="Enter Price"
                                  defaultValue={formik.values.price}
                                />
                              </div>
                              <div className="dropdown-select">
                                <div className="App">
                                  <Field
                                    as="select"
                                    name="level_id"
                                    className="select-control w-100"
                                  >
                                    <option value="">Select Level</option>
                                    {classLevel.map((value, index) => (
                                      <option key={value.id} value={value.id}>
                                        {value.class_name}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage
                                    name="level_id"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>

                              <div className="dropdown-select">
                                <div className="App">
                                  <Field
                                    as="select"
                                    name="number_of_class"
                                    className="select-control w-100"
                                  >
                                    <option value="">Number of Classes</option>
                                    {[
                                      "1",
                                      "2",
                                      "3",
                                      "4",
                                      "5",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "10+",
                                      "20+",
                                      "30+",
                                    ].map((value, index) => {
                                      return (
                                        <option value={value} key={index}>
                                          {value}
                                        </option>
                                      );
                                    })}
                                  </Field>
                                  <ErrorMessage
                                    name="number_of_class"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>
                              <div className="dropdown-select">
                                <div className="App">
                                  <Field
                                    as="select"
                                    name="duration"
                                    className="select-control w-100"
                                  >
                                    <option value="">Select Duration</option>
                                    {[
                                      "10min",
                                      "20min",
                                      "30min",
                                      "40min",
                                      "50min",
                                      "1hour",
                                    ].map((value, index) => (
                                      <option key={value} value={value}>
                                        {value}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage
                                    name="duration"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>
                              <div className="dropdown-select">
                                <div className="App">
                                  <Field
                                    as="select"
                                    name="total_seat"
                                    className="select-control w-100"
                                  >
                                    <option value="">Select Total Seats</option>
                                    {[
                                      1, 2, 5, 10, 15, 20, 25, 30, 40, 50, 60,
                                      70, 80, 90, 100,
                                    ].map((value, index) => (
                                      <option key={value} value={value}>
                                        {value}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage
                                    name="total_seat"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>

                              <div className="descriptio">
                                <div className="form-group floating-label">
                                  <Field name="full_description">
                                    {({ form, field }) => {
                                      return (
                                        <>
                                          <textarea
                                            id="textarea"
                                            className="form-control"
                                            rows="3"
                                            name={field.name}
                                            onChange={(e) =>
                                              form.setFieldValue(
                                                field.name,
                                                e.target.value
                                              )
                                            }
                                          ></textarea>
                                          <label htmlFor="textarea">
                                            About you
                                          </label>
                                        </>
                                      );
                                    }}
                                  </Field>
                                  <ErrorMessage
                                    name="full_description"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>

                              <div className="descriptio">
                                <h3>Classes in this course</h3>
                              </div>
                              <FieldArray
                                name="topic_class"
                                render={({ insert, remove, push }) => {
                                  return (
                                    <div>
                                      <div className="row">
                                        <div className="addsubjects">
                                          <button
                                            className="btn becomaninstructor"
                                            onClick={() =>
                                              push({
                                                topic_class: "",
                                                time: "",
                                              })
                                            }
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
                                            Add More Topics
                                          </button>
                                        </div>
                                      </div>
                                      {formik.values.topic_class.length > 0 &&
                                        formik.values.topic_class.map(
                                          (topic, index) => (
                                            <div className="row" key={index}>
                                              <div className="col-lg-5">
                                                <Field
                                                  name={`topic_class.${index}.topic_class`}
                                                  placeholder="add more topic"
                                                  type="text"
                                                />
                                                {
                                                  <div className="validation-text">
                                                    {formik.errors
                                                      ?.topic_class?.[index]
                                                      ?.topic_class &&
                                                      formik.errors.topic_class[
                                                        index
                                                      ].topic_class}
                                                  </div>
                                                }
                                              </div>
                                              <div className="col-lg-5">
                                                <Field
                                                  name={`topic_class.${index}.time`}
                                                >
                                                  {({ form, field, meta }) => (
                                                    <DateTimePicker
                                                      value={
                                                        form.values.topic_class[
                                                          index
                                                        ].time
                                                      }
                                                      onChange={(value) =>
                                                        form.setFieldValue(
                                                          field.name,
                                                          value
                                                        )
                                                      }
                                                    />
                                                  )}
                                                </Field>
                                                {
                                                  <div className="validation-text">
                                                    {formik.errors
                                                      ?.topic_class?.[index]
                                                      ?.time &&
                                                      formik.errors.topic_class[
                                                        index
                                                      ].time}
                                                  </div>
                                                }
                                              </div>
                                              <div className="accountfield-first cros-button-sub col-lg-2">
                                                <button
                                                  onClick={() => remove(index)}
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
                                            </div>
                                          )
                                        )}
                                    </div>
                                  );
                                }}
                              />
                              {/* <div className="blog-title">
                                <FieldText
                                  name="blog_title"
                                  type="text"
                                  placeholder="Class Name"
                                />
                              </div>
                              <div className="blog-title">
                              <div className="accountfield-first date-picker-sec">
                              <Field name="time">
                                {({form,field,meta})=>(
                                  <DateTimePicker  value={form.values.topic_class[0].time} onChange={(value)=>form.setFieldValue(field.name,value)}    />
                                )}
                              </Field>
                              </div>
                              </div> */}

                              <div className="descriptio">
                                <h3>What student will learn</h3>
                              </div>

                              <div className="descriptio">
                                <div className="form-group floating-label">
                                  <Field
                                    as="textarea"
                                    id="w3review"
                                    rows="5"
                                    placeholder="Message"
                                    name="description"
                                  ></Field>
                                  <ErrorMessage name="description">
                                    {(error) => (
                                      <span className="validation-text">
                                        {error}
                                      </span>
                                    )}
                                  </ErrorMessage>
                                </div>
                              </div>

                              <div>
                                <div className="drag-image-video">
                                  <Field name="picture">
                                    {({ form, field }) => {
                                      return (
                                        <ChooseFile
                                          name={field.name}
                                          label="Profile Picture"
                                          handleFileChoose={(e) =>
                                            form.setFieldValue(
                                              field.name,
                                              e.picture
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
                                    name="picture"
                                    component={TextErrorMsg}
                                  />
                                </div>
                              </div>
                              <div className="post-button-blog">
                                <button className="btn cancel">Back</button>
                                <button
                                  type="submit"
                                  className="btn post"
                                  disabled={!formik.isValid}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Addgroupclass;
