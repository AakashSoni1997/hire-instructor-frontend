import {
    IS_LOADING,
    INSTRUCTOR_PAYMENT_SUCCESS,
    INSTRUCTOR_PAYMENT_ERROR,
    INSTRUCTOR_LIST_SUCCESS,
    INSTRUCTOR_LIST_ERROR,
    INSTRUCTOR_LIST_DATA_SUCCESS,
    INSTRUCTOR_LIST_DATA_ERROR,
    INSTRUCTOR_PERSONAL_DETAIL_SUCCESS,
    INSTRUCTOR_PERSONAL_DETAIL_ERROR,
    GET_CLASS_LEVEL_INSTRUCTOR_SUCCESS,
    GET_CLASS_LEVEL_INSTRUCTOR_ERROR,
    GET_QUALIFICATION_LEVEL_INSTRUCTOR_SUCCESS,
    GET_QUALIFICATION_LEVEL_INSTRUCTOR_ERROR,
    GET_GRADE_INSTRUCTOR_SUCCESS,
    GET_GRADE_INSTRUCTOR_ERROR,
    GET_TAGS_INSTRUCTOR_SUCCESS,
    GET_TAGS_INSTRUCTOR_ERROR,
    TUTOR_SUBJECT_SUCCESS,
    TUTOR_SUBJECT_ERROR,
    TUTOR_LANGUAGE_SUCCESS,
    TUTOR_LANGUAGE_ERROR,
    INSTRUCTOR_DETAIL_ERROR,
    INSTRUCTOR_DETAIL_SUCCESS,
    INSTRUCTOR_SUBJECTS_LIST_SUCCESS,
    INSTRUCTOR_SUBJECTS_LIST_ERROR,
    INSTRUCTOR_LEVEL_LIST_SUCCESS,
    INSTRUCTOR_LEVEL_LIST_ERROR,
    BOOKING_REQUEST_LIST_ERROR,
    BOOKING_REQUEST_LIST_SUCCESS,
    BOOKING_REQUEST_ACCEPT_SUCCESS,
    BOOKING_REQUEST_ACCEPT_ERROR,
    ONDEMAND_COUPON_SUCCESS,
    ONDEMAND_COUPON_ERROR,
    ONDEMAND_PAYMENT_ZOOMLINK_SUCCESS,
    ONDEMAND_PAYMENT_ZOOMLINK_ERROR,
    APPLY_COUPON_CODE_SUCCESS,
    APPLY_COUPON_CODE_ERROR,
    INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_SUCCESS, INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_ERROR,
    INSTRUCTOR_PAYMENT_SUBSCRIPTION_SUCCESS, INSTRUCTOR_PAYMENT_SUBSCRIPTION_ERROR
} from "../actions/Type";

const initialState = {
    instructor_list: [],
    instructor_list_data: {},
    instructor_subject: [],
    instructor_level: {},
    instructor_payment: {},
    instructor_personal_details: {},
    instructor_class_level: [],
    instructor_qualifiaction: [],
    instructor_grades: [],
    instructor_tags: [],
    tutor_subject: [],
    tutor_language: [],
    instructor_detail: {},
    instructor_booking_request_list: [],
    instructor_booking_request_accept: {},
    loading: false,
    ondemand_coupon: {},
    zoom_link: {},
    apply_coupon_code: {},
    instructor_problem_solving: {},
    instructor_subscription_payment: {}
};

export const InstructorReducer = (
    state = initialState,
    { type, payload } = {}
) => {
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case INSTRUCTOR_PAYMENT_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                instructor_subscription_payment: payload,
                loading: false,
            };
        case INSTRUCTOR_PAYMENT_SUBSCRIPTION_ERROR:
            return {
                ...state,
                instructor_subscription_payment: payload,
                loading: false,
            };
        case INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_SUCCESS:
            return {
                ...state,
                instructor_problem_solving: payload,
                loading: false,
            };
        case INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_ERROR:
            return {
                ...state,
                instructor_problem_solving: payload,
                loading: false,
            };
        case APPLY_COUPON_CODE_SUCCESS:
            return {
                ...state,
                apply_coupon_code: payload,
                loading: false,
            };
        case APPLY_COUPON_CODE_ERROR:
            return {
                ...state,
                apply_coupon_code: payload,
                loading: false,
            };
        case INSTRUCTOR_PAYMENT_SUCCESS:
            return {
                ...state,
                instructor_payment: payload,
                loading: false,
            };
        case INSTRUCTOR_PAYMENT_ERROR:
            return {
                ...state,
                instructor_payment: payload,
                loading: false,
            };
        case INSTRUCTOR_SUBJECTS_LIST_SUCCESS:
            return {
                ...state,
                instructor_subject: payload,
                loading: false,
            };
        case INSTRUCTOR_SUBJECTS_LIST_ERROR:
            return {
                ...state,
                instructor_subject: payload,
                loading: false,
            };
        case INSTRUCTOR_LEVEL_LIST_SUCCESS:
            return {
                ...state,
                instructor_level: payload,
                loading: false,
            };
        case INSTRUCTOR_LEVEL_LIST_ERROR:
            return {
                ...state,
                instructor_level: payload,
                loading: false,
            };
        case INSTRUCTOR_LIST_SUCCESS:
            return {
                ...state,
                instructor_list: payload,
                loading: false,
            };
        case INSTRUCTOR_LIST_ERROR:
            return {
                ...state,
                instructor_list: payload,
                loading: false,
            };
        case INSTRUCTOR_LIST_DATA_SUCCESS:
            return {
                ...state,
                instructor_list_data: payload,
                loading: false,
            };
        case INSTRUCTOR_LIST_DATA_ERROR:
            return {
                ...state,
                instructor_list_data: payload,
                loading: false,
            };
        case INSTRUCTOR_PERSONAL_DETAIL_SUCCESS:
            return {
                ...state,
                instructor_personal_details: payload,
                loading: false,
            };
        case INSTRUCTOR_PERSONAL_DETAIL_ERROR:
            return {
                ...state,
                instructor_personal_details: payload,
                loading: false,
            };
        case GET_CLASS_LEVEL_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                instructor_class_level: payload,
                loading: false,
            };
        case GET_CLASS_LEVEL_INSTRUCTOR_ERROR:
            return {
                ...state,
                instructor_class_level: payload,
                loading: false,
            };
        case GET_QUALIFICATION_LEVEL_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                instructor_qualifiaction: payload,
                loading: false,
            };
        case GET_QUALIFICATION_LEVEL_INSTRUCTOR_ERROR:
            return {
                ...state,
                instructor_qualifiaction: payload,
                loading: false,
            };
        case GET_GRADE_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                instructor_grades: payload,
                loading: false,
            };
        case GET_GRADE_INSTRUCTOR_ERROR:
            return {
                ...state,
                instructor_grades: payload,
                loading: false,
            };
        case GET_TAGS_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                instructor_tags: payload,
                loading: false,
            };
        case GET_TAGS_INSTRUCTOR_ERROR:
            return {
                ...state,
                instructor_tags: payload,
                loading: false,
            };
        case TUTOR_SUBJECT_SUCCESS:
            return {
                ...state,
                tutor_subject: payload,
                loading: false,
            };
        case TUTOR_SUBJECT_ERROR:
            return {
                ...state,
                tutor_subject: payload,
                loading: false,
            };
        case TUTOR_LANGUAGE_SUCCESS:
            return {
                ...state,
                tutor_language: payload,
                loading: false,
            };
        case TUTOR_LANGUAGE_ERROR:
            return {
                ...state,
                tutor_language: payload,
                loading: false,
            };
        case INSTRUCTOR_DETAIL_SUCCESS:
            return {
                ...state,
                instructor_detail: payload,
                loading: false,
            };
        case INSTRUCTOR_DETAIL_ERROR:
            return {
                ...state,
                instructor_detail: payload,
                loading: false,
            };
        case BOOKING_REQUEST_LIST_SUCCESS:
            return {
                ...state,
                instructor_booking_request_list: payload,
                loading: false,
            };
        case BOOKING_REQUEST_LIST_ERROR:
            return {
                ...state,
                instructor_booking_request_list: payload,
                loading: false,
            };
        case BOOKING_REQUEST_ACCEPT_SUCCESS:
            return {
                ...state,
                instructor_booking_request_accept: payload,
                loading: false,
            };
        case BOOKING_REQUEST_ACCEPT_ERROR:
            return {
                ...state,
                instructor_booking_request_accept: payload,
                loading: false,
            };

        case ONDEMAND_COUPON_SUCCESS:
            return {
                ...state,
                ondemand_coupon: payload,
                loading: false,
            };
        case ONDEMAND_COUPON_ERROR:
            return {
                ...state,
                ondemand_coupon: payload,
                loading: false,
            };

        case ONDEMAND_PAYMENT_ZOOMLINK_SUCCESS:
            return {
                ...state,
                zoom_link: payload,
                loading: false,
            };
        case ONDEMAND_PAYMENT_ZOOMLINK_ERROR:
            return {
                ...state,
                zoom_link: payload,
                loading: false,
            };
        default:
            return state;
    }
};
