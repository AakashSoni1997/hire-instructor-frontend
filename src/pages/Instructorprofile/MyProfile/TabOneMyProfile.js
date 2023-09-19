import { Formik, Form, Field, ErrorMessage } from "formik";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { FieldText, InputText } from "../../../components/InputText/InputText";
import Numberinput from "../../../components/Numberinput/Numberinput";
import * as Yup from "yup";
import { Regex } from "../../../Utils/Regex";
import { useSelector } from "react-redux";
import TextErrorMsg from "../../../components/TextErrorMsg/TextErrorMsg";
import { useDispatch } from "react-redux";
import { GetCountryList } from "../../../redux/actions/HomePageActions";
import { ChooseFile } from "../../../components/ChooseFile/ChooseFile";

const initialValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  dob: "",
  language_name: "",
  country_id: "",
  descriptions: "",
  profile_image: "",
  proofId_image: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  phone_number: Yup.string()
    .min(13, "Number must be at most 10 characters")
    .max(13, "Number must be at most 10 characters")
    .matches(Regex.MOBILE_NUMBER_REGEX, "Phone number is not valid")
    .required("Phone number is required!"),
  dob: Yup.string().required("DOB is Required!"),
  language_name: Yup.string().required("Language is required!"),
  country_id: Yup.string().required("country is required!"),
  descriptions: Yup.string().required("Descriptions is required!"),
  profile_image: Yup.string().required("Profile Picture is required!"),
  proofId_image: Yup.string().required("proof of address is required!"),
});

export const TabOneMyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const countryList = useSelector((state) => state?.home?.get_country_list);
  const [languageName, setLanguageName] = useState([]);

  const handleMultiSelect = (data) => {
    const languagesArray = data?.map((elem) => {
      return elem.key;
    });
    setLanguageName([...languagesArray]);
  };

  useEffect(() => {
    dispatch(GetCountryList());
  }, [dispatch]);

  const handletabOneSubmit = (values) => {
    console.log(values, "values");
  };

  return (
    <div className="tab-content">
      <div className="camera-box">
        <img src="/images/camera-icon.png" alt="Logo" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handletabOneSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="myprofilebox2">
                <div className="myprofilebox1">
                  <label className="custom-field one">
                    <FieldText
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                      defaultValue={formik.values.first_name}
                    />
                  </label>
                </div>

                <div className="myprofilebox1">
                  <label className="custom-field one">
                    <FieldText
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      defaultValue={formik.values.last_name}
                    />
                  </label>
                </div>

                <div className="myprofilebox1">
                  <label className="custom-field one email-box">
                    <FieldText
                      name="email"
                      type="email"
                      placeholder="Email"
                      disabled={true}
                      defaultValue={user?.email}
                    />
                  </label>
                </div>

                <div className="myprofilebox1">
                  <Field name="phone_number">
                    {({ form, field }) => {
                      return (
                        <Numberinput
                          GetValue={(data) =>
                            form.setFieldValue(field.name, data.phone_number)
                          }
                          name={field.name}
                          defaultValue={formik.values.phone_number}
                        />
                      );
                    }}
                  </Field>
                  <ErrorMessage name="phone_number" component={TextErrorMsg} />
                </div>

                <div className="myprofilebox1 date-picker-sec">
                  <div className="form-group floating-label">
                    <FieldText name="dob" type="date" placeholder="DOB" />
                  </div>
                </div>

                <div className="myprofilebox1">
                  <Field name="language_name">
                    {({ form, field }) => {
                      return (
                        <Multiselect
                          disablePreSelectedValues
                          name={field.name}
                          displayValue="key"
                          onRemove={function noRefCheck() {}}
                          onSelect={(data) => {
                            handleMultiSelect(data);
                            form.setFieldValue(
                              field.name,
                              JSON.stringify(data)
                            );
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
                      );
                    }}
                  </Field>
                  <ErrorMessage name="language_name" component={TextErrorMsg} />
                </div>

                <div className="myprofilebox1 dropdown-select">
                  <div className="App">
                    <Field
                      as="select"
                      name="country_id"
                      className="select-control w-100"
                    >
                      <option value=""> Select Country </option>
                      {countryList.map((value, index) => {
                        return (
                          <option value={value.id} key={index}>
                            {value.name}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage name="country_id" component={TextErrorMsg} />
                  </div>
                </div>

                <div className="myprofilebox1 profile-textarea">
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
                              onChange={(e) =>
                                form.setFieldValue(field.name, e.target.value)
                              }
                            ></textarea>
                            <label htmlFor="textarea">About you</label>
                          </>
                        );
                      }}
                    </Field>
                    <ErrorMessage
                      name="descriptions"
                      component={TextErrorMsg}
                    />
                  </div>
                </div>

                <div className="myprofilebox1">
                  <div className="drag-image-video">
                    <Field name="profile_image">
                      {({ form, field }) => {
                        return (
                          <ChooseFile
                            name={field.name}
                            label="Profile Picture"
                            handleFileChoose={(e) =>
                              form.setFieldValue(field.name, e.profile_image)
                            }
                            error="file should be .jpg .png .jpeg and Size < 2MB"
                            accept={["jpg", "jpeg", "png"]}
                            Size={2048}
                          />
                        );
                      }}
                    </Field>
                  </div>
                </div>

                <div className="myprofilebox1">
                  <div className="drag-image-video">
                    <Field name="proofId_image">
                      {({ form, field }) => {
                        return (
                          <ChooseFile
                            label="Proof of ID"
                            name={field.name}
                            handleFileChoose={(e) =>
                              form.setFieldValue(field.name, e.proofId_image)
                            }
                            error="file should be .jpg .png .jpeg and Size less than 2MB"
                            accept={["jpg", "jped", "png"]}
                            Size={2048}
                          />
                        );
                      }}
                    </Field>  
                    <ErrorMessage
                      name="proofId_image"
                      component={TextErrorMsg}
                    />
                  </div>
                </div>
              </div>
              <div className="save-button">
                <button type="submit" className="btn">
                  Save Changes
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
