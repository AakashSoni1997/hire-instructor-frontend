import axios from "axios";
import { toast } from "react-toastify";
import { baseUrlPostGres } from "../constant";
import { apiHeader } from "./ApiHeader";
import { BLOG_ADD_STUDENT_ERROR, BLOG_ADD_STUDENT_SUCCESS, IS_LOADING, BLOG_LIKE_SUCCESS, BLOG_LIKE_ERROR } from "./Type";

export const StudentAddBlog = (formdata) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/blog-add`, formdata, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_ADD_STUDENT_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_ADD_STUDENT_ERROR,
                payload: errors,
            });
        });
};

export const InstructorAddBlog = (formdata) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .post(`${baseUrlPostGres()}/api/add-blog`, formdata, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_ADD_STUDENT_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_ADD_STUDENT_ERROR,
                payload: errors,
            });
        });
};

export const BlogLikeAction = (name, id) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    await axios
        .get(`${baseUrlPostGres()}/api/${name}/${id}`, {
            headers: apiHeader(),
        })
        .then((response) => {
            toast.success(response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_LIKE_SUCCESS,
                payload: response.data,
            });
        })
        .catch((errors) => {
            toast.error(errors.response.data.message, { theme: "colored" });
            dispatch({
                type: BLOG_LIKE_ERROR,
                payload: errors.response.data,
            });
        });
};

export const ResetBlogLikeAction = () => async (dispatch) => {
    dispatch({
        type: BLOG_LIKE_SUCCESS,
        payload: {},
    });
}
