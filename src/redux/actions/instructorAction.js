import axios from "axios";
import { toast } from "react-toastify";
import {
    BOOKING_REQUEST_ACCEPT_ERROR,
    BOOKING_REQUEST_ACCEPT_SUCCESS,
    BOOKING_REQUEST_LIST_SUCCESS,
    GET_CLASS_LEVEL_INSTRUCTOR_ERROR,
    GET_CLASS_LEVEL_INSTRUCTOR_SUCCESS,
    GET_GRADE_INSTRUCTOR_ERROR,
    GET_GRADE_INSTRUCTOR_SUCCESS,
    GET_QUALIFICATION_LEVEL_INSTRUCTOR_ERROR,
    GET_QUALIFICATION_LEVEL_INSTRUCTOR_SUCCESS,
    GET_TAGS_INSTRUCTOR_ERROR,
    GET_TAGS_INSTRUCTOR_SUCCESS,
    INSTRUCTOR_DETAIL_ERROR,
    INSTRUCTOR_DETAIL_SUCCESS,
    INSTRUCTOR_LEVEL_LIST_ERROR,
    INSTRUCTOR_LEVEL_LIST_SUCCESS,
    INSTRUCTOR_LIST_DATA_ERROR,
    INSTRUCTOR_LIST_DATA_SUCCESS,
    INSTRUCTOR_LIST_ERROR,
    INSTRUCTOR_LIST_SUCCESS,
    INSTRUCTOR_SUBJECTS_LIST_ERROR,
    INSTRUCTOR_SUBJECTS_LIST_SUCCESS,
    IS_LOADING,
    TUTOR_LANGUAGE_ERROR,
    TUTOR_LANGUAGE_SUCCESS,
    TUTOR_SUBJECT_ERROR,
    TUTOR_SUBJECT_SUCCESS,
    ONDEMAND_COUPON_SUCCESS,
    ONDEMAND_COUPON_ERROR
} from "./Type";
import "react-toastify/dist/ReactToastify.css";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { baseUrlPostGres } from "../../redux/constant";

toast.configure();

export const GetInstructorSubjectsList = (id) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/instructor-subject-list/${id}`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: INSTRUCTOR_SUBJECTS_LIST_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: INSTRUCTOR_SUBJECTS_LIST_ERROR,
                payload: errors,
            });
        });
};

export const GetInstructorLevelList = (id) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/instructor-level-list/${id}`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: INSTRUCTOR_LEVEL_LIST_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: INSTRUCTOR_LEVEL_LIST_ERROR,
                payload: errors,
            });
        });
};

export const GetInstructorList = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(
            `${baseUrlPostGres()}/api/instructor_list`,
            body,
            {
                headers: apiHeader(true),
            }
        )
        .then((response) => {
            dispatch({
                type: INSTRUCTOR_LIST_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: INSTRUCTOR_LIST_ERROR,
                payload: errors,
            });
        });
};
export const GetInstructorData = (id) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(
            `${baseUrlPostGres()}/api/instructor_data/${id}`,
            {},
            {
                headers: apiHeader(),
            }
        )
        .then((response) => {
            dispatch({
                type: INSTRUCTOR_LIST_DATA_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: INSTRUCTOR_LIST_DATA_ERROR,
                payload: errors,
            });
        });
};

export const GetInstructorClassLevel = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/class_level`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: GET_CLASS_LEVEL_INSTRUCTOR_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: GET_CLASS_LEVEL_INSTRUCTOR_ERROR,
                payload: errors,
            });
        });
};


export const GetInstructorQualificationLevel = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/qualification_level`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: GET_QUALIFICATION_LEVEL_INSTRUCTOR_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: GET_QUALIFICATION_LEVEL_INSTRUCTOR_ERROR,
                payload: errors,
            });
        });
};
export const GetInstructorGrades = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/grade-list`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: GET_GRADE_INSTRUCTOR_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: GET_GRADE_INSTRUCTOR_ERROR,
                payload: errors,
            });
        });
};
export const GetInstructorTags = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/tags-list`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: GET_TAGS_INSTRUCTOR_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: GET_TAGS_INSTRUCTOR_ERROR,
                payload: errors,
            });
        });
};

export const GetTutorSubjects = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/tutor_subject`, {
            headers: apiHeader(true),
        })
        .then((response) => {
            dispatch({
                type: TUTOR_SUBJECT_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: TUTOR_SUBJECT_ERROR,
                payload: errors,
            });
        });
};

export const GetTutorLanguage = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/tutor_language`, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: TUTOR_LANGUAGE_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: TUTOR_LANGUAGE_ERROR,
                payload: errors,
            });
        });
};

export const PostInstructorDetail = (formdata) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/instructor_detail`, formdata, {
            headers: apiHeader(true),
        })
        .then((response) => {
            dispatch({
                type: INSTRUCTOR_DETAIL_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: INSTRUCTOR_DETAIL_ERROR,
                payload: errors,
            });
        });
};

export const OnDemandClassCouponAction = (id) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/subjectclass_coupon_list/${id}`, {
            headers: apiHeader(true),
        })
        .then((response) => {
            dispatch({
                type: ONDEMAND_COUPON_SUCCESS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            dispatch({
                type: ONDEMAND_COUPON_ERROR,
                payload: errors,
            });
        });
};


export const InstructorBookingRequestList = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/booking-request-list`, body, {
            headers: apiHeader(),
        })
        .then((response) => {
            dispatch({
                type: BOOKING_REQUEST_LIST_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" });
        });
};


export const InstructorBookingRequestAccept = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/booking-request-accept`, body, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: BOOKING_REQUEST_ACCEPT_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            toast.error(errors.message, { theme: "colored" });
            dispatch({
                type: BOOKING_REQUEST_ACCEPT_ERROR,
                payload: errors,
            });
        });
};