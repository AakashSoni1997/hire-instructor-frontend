import axios from "axios";
import { toast } from "react-toastify";
import {
  CONTACT_US_ERROR,
  CONTACT_US_SUCCESS,
  GET_BANNER_ERROR,
  GET_BANNER_SUCCESS,
  GET_BLOGS_CATEGORY_ERROR,
  GET_BLOGS_CATEGORY_SUCCESS,
  GET_BLOGS_ERROR,
  GET_BLOGS_SUCCESS,
  GET_BLOG_DETAIL_ERROR,
  GET_BLOG_DETAIL_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  GET_COUNTRY_LIST_ERROR,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
  GET_FAQ_ERROR,
  GET_FAQ_SUCCESS,
  GET_TESTIMONIALSS_ERROR,
  GET_TESTIMONIALSS_SUCCESS,
  IS_LOADING,
  POST_CITIES_LIST_ERROR,
  POST_CITIES_LIST_SUCCESS,
  POST_STATES_LIST_ERROR,
  POST_STATES_LIST_SUCCESS,
} from "./Type";
import "react-toastify/dist/ReactToastify.css";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { baseUrlPostGres } from "../../redux/constant";

toast.configure();

export const GetCourses = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/get_courses`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GET_COURSES_ERROR,
        payload: errors,
      });
    });
};

export const GetBlogs = (body) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/list-blogs`,body, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.data.message, { theme: "colored" });
      dispatch({
        type: GET_BLOGS_ERROR,
        payload: errors,
      });
    });
};

export const GetBlogDetails = (id) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/blog_details/${id}`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_BLOG_DETAIL_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.data.message, { theme: "colored" });
      dispatch({
        type: GET_BLOG_DETAIL_ERROR,
        payload: errors,
      });
    });
};

export const GetBlogsCategory = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/blog-category-list`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_BLOGS_CATEGORY_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.data.message, { theme: "colored" });
      dispatch({
        type: GET_BLOGS_CATEGORY_ERROR,
        payload: errors,
      });
    });
};

export const GetFaqs = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/get_faq`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_FAQ_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GET_FAQ_ERROR,
        payload: errors,
      });
    });
};

export const GetBanner = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/get_banner`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_BANNER_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GET_BANNER_ERROR,
        payload: errors,
      });
    });
};

export const GetCategory = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/category_list`, {
      "category_name":"",
      "sorting":""
  },{
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GET_CATEGORY_ERROR,
        payload: errors,
      });
    });
};

export const GetTestimonials = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/testimonial_list`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_TESTIMONIALSS_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: GET_TESTIMONIALSS_ERROR,
        payload: errors,
      });
    });
};

export const GetCountryList = () => async (dispatch) => {
  // dispatch({ type: IS_LOADING });
  await axios
    .get(`${baseUrlPostGres()}/api/countries`, {
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: GET_COUNTRY_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response?.data?.message, { theme: "colored" });
      dispatch({
        type: GET_COUNTRY_LIST_ERROR,
        payload: [errors],
      });
    });
};

export const StatesList = (formdata) => async (dispatch) => {
  // dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/states`, formdata,{
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: POST_STATES_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: POST_STATES_LIST_ERROR,
        payload: [errors],
      });
    });
};

export const CitiesList = (formdata) => async (dispatch) => {
  // dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/cities`, formdata,{
      headers: apiHeader(true),
    })
    .then((response) => {
      dispatch({
        type: POST_CITIES_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: POST_CITIES_LIST_ERROR,
        payload: [errors],
      });
    });
};

export const ContactUs = (body) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  await axios
    .post(`${baseUrlPostGres()}/api/contact-us`, body,{
      headers: apiHeader(true),
    })
    .then((response) => {
      toast.success(response.data.message, { theme: "colored" });
      dispatch({
        type: CONTACT_US_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      toast.error(errors.response.data.message, { theme: "colored" });
      dispatch({
        type: CONTACT_US_ERROR,
        payload: [errors],
      });
    });
};


