import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import "./Instructorprofile.scss";
import { InstructorAddBlog } from "../../redux/actions/BlogActions";
import { useDispatch, useSelector } from "react-redux";
import {
  FieldText,
  InputText,
  SelectBox,
} from "../../components/InputText/InputText";
import { ChooseFile } from "../../components/ChooseFile/ChooseFile";
import { Regex } from "../../Utils/Regex";
import { GetBlogsCategory } from "../../redux/actions/HomePageActions";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";

const options2 = [
  { value: "Category A", label: "Category A" },
  { value: "Category B", label: "Category B" },
  { value: "Category C", label: "Category C" },
  { value: "Category D", label: "Category D" },
];

const initialValues = {
  blog_category_id: "",
  blog_title: "",
  blog_description: "",
  blog_image: "",
};

const validationSchema = Yup.object().shape({
  blog_category_id: Yup.string().required("category is required!"),
  blog_title: Yup.string().required("title is required!"),
  blog_description: Yup.string().required("description is required!"),
  blog_image: Yup.string().required("Required!"),
});

const Addnewblog = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const blogsCategory = useSelector((state) => state.home?.get_blogs_category);

  useEffect(() => {
    dispatch(GetBlogsCategory());
  }, [dispatch]);
  const handleBlogPostInstructor = (values,{resetForm}) => {
    let formData = new FormData();

    formData.append("blog_category_id", values.blog_category_id);
    formData.append("blog_title", values.blog_title);
    formData.append("blog_description", values.blog_description);
    formData.append("blog_image", values.blog_image);
    dispatch(InstructorAddBlog(formData));
    resetForm();
  };
  return (
    <>
      <div id="footer-bottom" className="instructor-profile addnewblog-page">
        <Header />
        <div className="instru-bg-image">
          <h1>Add New Blog</h1>
          <p>
            Home / My Blog / <span>Add New Blog</span>
          </p>
        </div>

        <div className="myprofile-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-12 col-lg-5 col-xl-4">
                <Instructorsidebar />
              </div>

              <div className="col-md-12 col-lg-7 col-xl-8">
                <div className="profile-top-heading">
                  <h2>Add New Blog</h2>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleBlogPostInstructor}
                >
                  {(formik) => {
                    return (
                      <Form>
                        {console.log(formik.errors, "errrors")}
                        <div className="my-profile-details">
                          <div className="manages-section-main">
                            <div className="tab-section-profile">
                              <div className="bolg-setion">
                                <div className="blog-title">
                                  <FieldText
                                    name="blog_title"
                                    type="text"
                                    placeholder="Blog Title"
                                    defaultValue={formik.values.blog_title}
                                  />
                                </div>
                                <div className="dropdown-select">
                                  <div className="App">
                                    <Field
                                      as="select"
                                      name="blog_category_id"
                                      className="select-control w-100"
                                    >
                                      <option value="">Select Category</option>
                                      {blogsCategory.map((value, index) => {
                                        return (
                                          <option value={value.id} key={index}>
                                            {value.blog_category}
                                          </option>
                                        );
                                      })}
                                    </Field>
                                    <ErrorMessage
                                      name="blog_category_id"
                                      component={TextErrorMsg}
                                    />
                                  </div>
                                </div>
                                <div className="descriptio">
                                  <div className="form-group floating-label">
                                    <Field name="blog_description">
                                      {({ form, field }) => {
                                        return (
                                          <>
                                            <textarea
                                             value={
                                              formik.values.blog_description
                                            }
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
                                      name="blog_description"
                                      component={TextErrorMsg}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="drag-image-video">
                                    <Field name="blog_image">
                                      {({ form, field }) => {
                                        return (
                                          <ChooseFile
                                            name={field.name}
                                            label="Picture"
                                            handleFileChoose={(e) =>
                                              form.setFieldValue(
                                                field.name,
                                                e.blog_image
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
                                <div className="post-button-blog">
                                  <button className="btn cancel">Cancel</button>
                                  <button
                                    type="submit"
                                    className="btn post"
                                    disabled={!formik.isValid || formik.isSubmitting}
                                  >
                                    Post
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Addnewblog;
