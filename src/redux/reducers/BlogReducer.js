import {
    BLOG_ADD_INSTRUCTOR_ERROR,
    BLOG_ADD_INSTRUCTOR_SUCCESS,
    BLOG_ADD_STUDENT_ERROR,
    BLOG_ADD_STUDENT_SUCCESS,
    IS_LOADING,
    BLOG_LIKE_SUCCESS, BLOG_LIKE_ERROR
} from "../actions/Type";

const initialState = {
    blog_add_student_success: {},
    blog_add_student_error: {},
    blog_add_instructor_success: {},
    blog_add_instructor_error: {},
    blog_like: {}
};

export const BlogReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case BLOG_ADD_STUDENT_SUCCESS:
            return {
                ...state,
                blog_add_student_success: payload,
            };
        case BLOG_ADD_STUDENT_ERROR:
            return {
                ...state,
                blog_add_student_error: payload,
            };
        case BLOG_ADD_INSTRUCTOR_SUCCESS:
            return {
                ...state,
                blog_add_instructor_success: payload,
            };
        case BLOG_ADD_INSTRUCTOR_ERROR:
            return {
                ...state,
                blog_add_instructor_error: payload,
            };
        case BLOG_LIKE_SUCCESS:
            return {
                ...state,
                blog_like: payload,
                loading: false,
            };
        case BLOG_LIKE_ERROR:
            return {
                ...state,
                blog_like: payload,
                loading: false,
            }
        default:
            return state;
    }
};
