import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    IS_PROFILE_LOADING,
    SUCCESS_COMPLETE_PROFILE_PERSONAL_DETAILS,
    ERROR_COMPLETE_PROFILE_PERSONAL_DETAILS,
    SUCCESS_COMPLETE_PROFILE_QUALIFICATIONS,
    ERROR_COMPLETE_PROFILE_QUALIFICATIONS,
    SUCCESS_COMPLETE_PROFILE_TEACHING_DETAILS,
    ERROR_COMPLETE_PROFILE_TEACHING_DETAILS,
    SUCCESS_COMPLETE_PROFILE_AVAILABILITY,
    ERROR_COMPLETE_PROFILE_AVAILABILITY,
    SUCCESS_COMPLETE_PROFILE_BANK_DETAILS,
    ERROR_COMPLETE_PROFILE_BANK_DETAILS
} from "./Type";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { baseUrlPostGres } from "../../redux/constant";

toast.configure();

export const InstructorCompleteProfileStepOne = (formData) => async (dispatch) => {
    dispatch({ type: IS_PROFILE_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/complete-profile-stepone`, formData, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: SUCCESS_COMPLETE_PROFILE_PERSONAL_DETAILS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ERROR_COMPLETE_PROFILE_PERSONAL_DETAILS,
                payload: errors.response.data,
            });
        });
};

export const InstructorCompleteProfileStepTwo = (formData) => async (dispatch) => {
    dispatch({ type: IS_PROFILE_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/complete-profile-steptwo`, formData, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: SUCCESS_COMPLETE_PROFILE_QUALIFICATIONS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ERROR_COMPLETE_PROFILE_QUALIFICATIONS,
                payload: errors.response.data,
            });
        });
};

export const InstructorCompleteProfileStepThree = (formData) => async (dispatch) => {
    dispatch({ type: IS_PROFILE_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/complete-profile-stepthree`, formData, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: SUCCESS_COMPLETE_PROFILE_TEACHING_DETAILS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ERROR_COMPLETE_PROFILE_TEACHING_DETAILS,
                payload: errors.response.data,
            });
        });
};

export const InstructorCompleteProfileStepFour = (data) => async (dispatch) => {
    dispatch({ type: IS_PROFILE_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/complete-profile-stepfour`, data, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: SUCCESS_COMPLETE_PROFILE_AVAILABILITY,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ERROR_COMPLETE_PROFILE_AVAILABILITY,
                payload: errors.response.data,
            });
        });
};

export const InstructorCompleteProfileStepFive = (data) => async (dispatch) => {
    dispatch({ type: IS_PROFILE_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/complete-profile-stepfive`, data, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: SUCCESS_COMPLETE_PROFILE_BANK_DETAILS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ERROR_COMPLETE_PROFILE_BANK_DETAILS,
                payload: errors.response.data,
            });
        });
};