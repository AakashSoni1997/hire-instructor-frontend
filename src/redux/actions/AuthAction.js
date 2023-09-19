import axios from "axios";
import { toast } from "react-toastify";
import {
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_ERROR,
    AUTH_LOADING,
    SET_CURRENT_USER,
    LOGOUT_SUCCESS,
    STUDENT_REGISTER_ERROR,
    STUDENT_REGISTER_SUCCESS,
    OTP_VERIFICATION_SUCCESS,
    OTP_VERIFICATION_ERROR,
    FORGOT_EMAIL_SUCCESS,
    FORGOT_EMAIL_ERROR,
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_LOGIN_ERROR,
    INSTRUCTOR_REGISTER_SUCCESS,
    INSTRUCTOR_REGISTER_ERROR,
    STUDENT_SOCIAL_LOGIN_SUCCESSFULL,
    STUDENT_SOCIAL_LOGIN_ERROR,
    INSTRUCTOR_SOCIAL_LOGIN_SUCCESSFULL,
    INSTRUCTOR_SOCIAL_LOGIN_ERROR,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESEND_OTP_SUCCESS,
    RESEND_OTP_ERROR,
    IS_LOADING,
} from "./Type";
import store from "../store";
import "react-toastify/dist/ReactToastify.css";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { baseUrlPostGres } from "../../redux/constant";

toast.configure();

export const setCurrentUser = (userDetail) => {
    return store.dispatch({
        type: SET_CURRENT_USER,
        payload: userDetail,
    });
};

export const StudentLogin = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/login`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            const res = response.data.data;
            const payload = {
                token: res.access_token,
                user: res,
            };
            dispatch({ type: STUDENT_LOGIN_SUCCESS, payload: res });
            dispatch(setCurrentUser(res));
            localStorage.setItem("security_auth", JSON.stringify(payload));
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: STUDENT_LOGIN_ERROR,
                payload: errors,
            });
        });
};

export const StudentRegister = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/register`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: STUDENT_REGISTER_SUCCESS, payload: response.data });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: STUDENT_REGISTER_ERROR,
                payload: errors,
            });
        });
};

export const InstructorLogin = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/login`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            const res = response.data.data;
            const payload = {
                token: res.access_token,
                user: res,
            };
            dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS, payload: res });
            dispatch(setCurrentUser(res));
            localStorage.setItem("security_auth", JSON.stringify(payload));
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_LOGIN_ERROR,
                payload: errors,
            });
        });
};

export const InstructorRegister = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/instructor-register`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: INSTRUCTOR_REGISTER_SUCCESS, payload: response.data });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_REGISTER_ERROR,
                payload: errors,
            });
        });
};

export const StudentSocialLogin = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/social-register`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            const payload = {
                token: response.data.data.access_token,
                user: response.data.data,
            };
            dispatch({ type: STUDENT_SOCIAL_LOGIN_SUCCESSFULL, payload: payload });
            dispatch(setCurrentUser(payload.user));
            localStorage.setItem("security_auth", JSON.stringify(payload));
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: STUDENT_SOCIAL_LOGIN_ERROR,
                payload: errors,
            });
        });
};

export const InstuctorSocialLogin = (formData) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/instructor-social-register`, formData, {
            headers: apiHeader(true),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            const payload = {
                token: response.data.data.security_token,
                user: response.data.data,
            };
            dispatch({ type: INSTRUCTOR_SOCIAL_LOGIN_SUCCESSFULL, payload: payload });
            dispatch(setCurrentUser(payload.user));
            localStorage.setItem("security_auth", JSON.stringify(payload));
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_SOCIAL_LOGIN_ERROR,
                payload: errors,
            });
            // toast.error(errors.response?.data?.message, { theme: "colored" })
        });
};

export const LogoutAction = (msg) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .get(`${baseUrlPostGres()}/api/instructor-logout`, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response.data.success, { theme: "colored" });
            dispatch({ type: LOGOUT_SUCCESS, payload: response });
            dispatch(setCurrentUser({}));
            localStorage.removeItem("security_auth");
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
        });
    if (msg === "Unauthorized please login again!") {
        toast("Session expired, please login again.!");
    }
};

export const OtpVerification = (formdata) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/account/verify`, formdata, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: OTP_VERIFICATION_SUCCESS, payload: response });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({ type: OTP_VERIFICATION_ERROR, payload: errors });
        });
};

export const ResnedOtp = (body) => (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/resend-otp`, body, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: RESEND_OTP_SUCCESS, payload: response });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({ type: RESEND_OTP_ERROR, payload: errors });
        });
};

export const ForgotEmail = (formdata) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/forgot-password`, formdata, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: FORGOT_EMAIL_SUCCESS, payload: response });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({ type: FORGOT_EMAIL_ERROR, payload: errors });
        });
};

export const ResetPasswordAction = (formdata) => (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    axios
        .post(`${baseUrlPostGres()}/api/reset-password`, formdata, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({ type: RESET_PASSWORD_ERROR, payload: errors });
        });
};
