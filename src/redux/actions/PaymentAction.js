import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CARD_CREATE_ERROR, CARD_CREATE_SUCCESS, CARD_LIST_ERROR, CARD_LIST_SUCCESS, CARD_REMOVE_ERROR, CARD_REMOVE_SUCCESS, APPLY_COUPON_CODE_SUCCESS, APPLY_COUPON_CODE_ERROR, INSTRUCTOR_PAYMENT_ERROR, INSTRUCTOR_PAYMENT_SUCCESS, IS_LOADING, ONDEMAND_PAYMENT_ZOOMLINK_SUCCESS, ONDEMAND_PAYMENT_ZOOMLINK_ERROR,
    INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_SUCCESS, INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_ERROR, INSTRUCTOR_PAYMENT_SUBSCRIPTION_SUCCESS, INSTRUCTOR_PAYMENT_SUBSCRIPTION_ERROR
} from './Type';
import 'react-toastify/dist/ReactToastify.css';
import { apiHeader } from '../../redux/actions/ApiHeader';
import { baseUrlPostGres } from '../../redux/constant';

toast.configure();

export const CardList = () => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .get(`${baseUrlPostGres()}/api/list-card-stripe`, {
            headers: apiHeader()
        })
        .then(response => {
            dispatch({
                type: CARD_LIST_SUCCESS,
                payload: response.data.data
            })
        })
        .catch(errors => {
            toast.error(errors?.message, { theme: "colored" })
            dispatch({
                type: CARD_LIST_ERROR,
                payload: errors
            })
        })
}

export const CardRemove = () => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/remove-card`, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response?.data?.message, { theme: "colored" });
            dispatch({
                type: CARD_REMOVE_SUCCESS,
                payload: response.data.data
            })
        })
        .catch(errors => {
            toast.error(errors?.message, { theme: "colored" })
            dispatch({
                type: CARD_REMOVE_ERROR,
                payload: errors
            })
        })
}

export const CardCreate = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/add-card-stripe`, body, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: CARD_CREATE_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors.response?.data?.message, { theme: "colored" })
            dispatch({
                type: CARD_CREATE_ERROR,
                payload: errors.response.data
            })
        })
}

export const ResetCardCreate = () => async (dispatch) => {
    dispatch({
        type: CARD_CREATE_SUCCESS,
        payload: {}
    })
}

export const paymentOnDemand = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/request-on-demand`, body, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_PAYMENT_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: INSTRUCTOR_PAYMENT_ERROR,
                payload: errors.response.data
            })
        })
}

export const paymentZoomLink = (id) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .get(`${baseUrlPostGres()}/api/zoom-link-crate/${id}`, {
            headers: apiHeader()
        })
        .then(response => {
            // toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: ONDEMAND_PAYMENT_ZOOMLINK_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: ONDEMAND_PAYMENT_ZOOMLINK_ERROR,
                payload: errors.response.data
            })
        })
}

export const CouponCodeApplyAction = (data) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/apply-coupons`, data, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: APPLY_COUPON_CODE_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: APPLY_COUPON_CODE_ERROR,
                payload: errors.response.data
            })
        })
}

export const paymentOnProblemSolvingAction = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/request-problem-solving`, body, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: INSTRUCTOR_PAYMENT_PROBLEM_SOLVING_ERROR,
                payload: errors.response.data
            })
        })
}

export const paymentOnSubscriptionAction = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING })
    await axios
        .post(`${baseUrlPostGres()}/api/request-subscription`, body, {
            headers: apiHeader()
        })
        .then(response => {
            toast.success(response.data?.message, { theme: "colored" });
            dispatch({
                type: INSTRUCTOR_PAYMENT_SUBSCRIPTION_SUCCESS,
                payload: response.data
            })
        })
        .catch(errors => {
            toast.error(errors?.response?.data?.message, { theme: "colored" })
            dispatch({
                type: INSTRUCTOR_PAYMENT_SUBSCRIPTION_ERROR,
                payload: errors.response.data
            })
        })
}