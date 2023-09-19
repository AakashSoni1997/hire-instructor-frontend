import {
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_ERROR,
    AUTH_LOADING,
    SET_CURRENT_USER,
    STUDENT_SOCIAL_LOGIN_SUCCESSFULL,
    STUDENT_SOCIAL_LOGIN_ERROR,
    STUDENT_REGISTER_SUCCESS,
    STUDENT_REGISTER_ERROR,
    OTP_VERIFICATION_SUCCESS,
    OTP_VERIFICATION_ERROR,
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_LOGIN_ERROR,
    INSTRUCTOR_REGISTER_SUCCESS,
    INSTRUCTOR_REGISTER_ERROR,
    INSTRUCTOR_SOCIAL_LOGIN_SUCCESSFULL,
    INSTRUCTOR_SOCIAL_LOGIN_ERROR,
    FORGOT_EMAIL_SUCCESS,
    FORGOT_EMAIL_ERROR,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESEND_OTP_SUCCESS,
    RESEND_OTP_ERROR
} from "../actions/Type.js";

const initialState = {
    isAuthenticated: false,
    user_register: {},
    user: {},
    error: {},
    otp_verification: {},
    loading: false,
    resend_otp_success:{},
    resend_otp_error:{},
    forgot_pass: {},
    reset_pass: {}
};

const isEmpty = require("is-empty");

const authReducers = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                error: {},
                loading: false,
            };
        case STUDENT_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                error: {},
                loading: false,
            };
        case STUDENT_LOGIN_ERROR:
            return {
                ...state,
                user: {},
                error: payload,
                loading: false,
            };
        case STUDENT_REGISTER_SUCCESS:
            return {
                ...state,
                user_register: payload,
                error: {},
                loading: false,
            };
        case STUDENT_REGISTER_ERROR:
            return {
                ...state,
                user_register: {},
                error: payload,
                loading: false,
            };
        case INSTRUCTOR_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                error: {},
                loading: false,
            };
        case INSTRUCTOR_LOGIN_ERROR:
            return {
                ...state,
                user: {},
                error: payload,
                loading: false,
            };
        case INSTRUCTOR_REGISTER_SUCCESS:
            return {
                ...state,
                user_register: payload,
                error: {},
                loading: false,
            };
        case INSTRUCTOR_REGISTER_ERROR:
            return {
                ...state,
                user_register: {},
                error: payload,
                loading: false,
            };
        case STUDENT_SOCIAL_LOGIN_SUCCESSFULL:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                error: {},
                loading: false,
            };
        case STUDENT_SOCIAL_LOGIN_ERROR:
            return {
                ...state,
                user: {},
                error: payload,
                loading: false,
            };
        case INSTRUCTOR_SOCIAL_LOGIN_SUCCESSFULL:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                error: {},
                loading: false,
            };
        case INSTRUCTOR_SOCIAL_LOGIN_ERROR:
            return {
                ...state,
                user: {},
                error: payload,
                loading: false,
            };
        case OTP_VERIFICATION_SUCCESS:
            return {
                ...state,
                otp_verification: payload,
                loading: false,
            };
        case OTP_VERIFICATION_ERROR:
            return {
                ...state,
                otp_verification: {},
                error: payload,
                loading: false,
            };
            case RESEND_OTP_SUCCESS:
                return {
                    ...state,
                    resend_otp_success: payload,
                    loading: false,
                };
            case RESEND_OTP_ERROR:
                return {
                    ...state,
                    resend_otp_error: {},
                    error: payload,
                    loading: false,
                };
        case FORGOT_EMAIL_SUCCESS:
            return {
                ...state,
                forgot_pass: payload,
                loading: false,
            };
        case FORGOT_EMAIL_ERROR:
            return {
                ...state,
                forgot_pass: {},
                error: payload,
                loading: false,
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                reset_pass: payload,
                loading: false,
            };
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                reset_pass: {},
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default authReducers;