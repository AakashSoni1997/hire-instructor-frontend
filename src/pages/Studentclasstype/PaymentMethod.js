import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { CardCreate, CardList, ResetCardCreate } from "../../redux/actions/PaymentAction";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg";
import { FieldText } from "../../components/InputText/InputText";
import Button from "../../components/Buttons/Buttons";
const optionsYear = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
    { label: "2030", value: "2030" },
    { label: "2031", value: "2031" },
    { label: "2032", value: "2032" },
];

const PaymentMethod = ({ setState, state }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [submitClick, setSubmitClick] = useState(false)
    const cardList = useSelector((state) => state.card?.card_list?.data);
    const cardSuccessfulllyCreated = useSelector((state) => state.card?.create_card);
    const isLoading = useSelector((state) => state?.card.loading);

    useEffect(() => {
        dispatch(CardList());
    }, [dispatch, cardSuccessfulllyCreated, show]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const handleRadioInput = (value) => {
        setState({ ...state, card_id: value.id, last4: value.last4, pay_from: 1 });
    };

    const handleCreatecardsubmit = (value) => {
        dispatch(CardCreate(value));
        setSubmitClick(true)
    }

    useEffect(() => {
        if (Object.keys(cardSuccessfulllyCreated).length > 0 && submitClick) {
            if (cardSuccessfulllyCreated.status) {
                setSubmitClick(false)
                setShow(false)
                dispatch(ResetCardCreate())
            } else {
                setSubmitClick(false)
                dispatch(ResetCardCreate())
            }
        }
    }, [cardSuccessfulllyCreated, submitClick])

    return (
        <>
            <div className="personaldetails-section">
                <div className="select-subject-level-card">
                    <div className="row align-items-center">
                        <div className="col-md-9 col-sm-12">
                            <span className="amount-text2">Wallet Balance</span>
                            <h3 className="amount-price">$0</h3>
                        </div>

                        <div className="col-md-3 col-sm-12 text-end">
                            <div className="radio-box radio-box2">
                                <div className="check-box-create">
                                    <input
                                        type="checkbox"
                                        id="vehicle1"
                                        name="vehicle1"
                                        value="Bike"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="select-subject-level-card payment-box-main-content">
                    <div className="paymentmethod-box">
                        <span className="amount-text2 d-block">Select your payment method</span>
                        <div className="payment-three-card row">
                            {cardList?.length > 0 &&
                                cardList?.map((ele, index) =>
                                    <div className="col-md-4" key={index}>
                                        <div className="cardnumber-box">
                                            <div className="radio-box">
                                                <div className="check-box-create">
                                                    <label htmlFor={`card${index}`}>
                                                        <div>
                                                            {ele.brand === "MasterCard" ? (
                                                                <svg
                                                                    id="mastercard-svgrepo-com"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="70.86"
                                                                    height="46"
                                                                    viewBox="0 0 70.86 46"
                                                                >
                                                                    <path
                                                                        id="Path_659"
                                                                        data-name="Path 659"
                                                                        d="M3.634,0H67.226A3.657,3.657,0,0,1,70.86,3.68V42.32A3.657,3.657,0,0,1,67.226,46H3.634A3.657,3.657,0,0,1,0,42.32V3.68A3.657,3.657,0,0,1,3.634,0Z"
                                                                        fill="#16366f"
                                                                    />
                                                                    <path
                                                                        id="Path_660"
                                                                        data-name="Path 660"
                                                                        d="M123.158,86.989A16.579,16.579,0,1,1,106.578,70.5a16.534,16.534,0,0,1,16.579,16.489"
                                                                        transform="translate(-81.688 -63.989)"
                                                                        fill="#d9222a"
                                                                    />
                                                                    <path
                                                                        id="Path_661"
                                                                        data-name="Path 661"
                                                                        d="M351.229,70.5A16.568,16.568,0,0,0,340.1,74.764a16.794,16.794,0,0,0-1.674,1.745h3.349a16.717,16.717,0,0,1,1.264,1.747h-5.877A16.413,16.413,0,0,0,336.207,80h7.787a16.412,16.412,0,0,1,.7,1.746H335.5a16.183,16.183,0,0,0-.482,1.746h10.154a16.493,16.493,0,0,1-.481,8.729H335.5a16.25,16.25,0,0,0,.7,1.746h7.787a16.485,16.485,0,0,1-.956,1.747h-5.876a16.674,16.674,0,0,0,1.264,1.745h3.349a16.508,16.508,0,0,1-1.674,1.746A16.531,16.531,0,1,0,351.229,70.5"
                                                                        transform="translate(-305.26 -63.985)"
                                                                        fill="#ee9f2d"
                                                                    />
                                                                    <path
                                                                        id="Path_662"
                                                                        data-name="Path 662"
                                                                        d="M152.451,219.624a.524.524,0,1,1,.523.536A.53.53,0,0,1,152.451,219.624Zm.523.407a.407.407,0,0,0,0-.814h0a.4.4,0,0,0-.4.406h0a.4.4,0,0,0,.4.407Zm-.071-.172H152.8v-.47h.194a.206.206,0,0,1,.118.023.143.143,0,0,1,.058.118.129.129,0,0,1-.08.121l.085.208h-.119l-.07-.186H152.9v.186Zm0-.267h.059a.131.131,0,0,0,.065-.009.064.064,0,0,0,.027-.054.059.059,0,0,0-.026-.048.133.133,0,0,0-.068-.009H152.9ZM112.851,212.2a2.878,2.878,0,0,0-.393-.028c-1,0-1.5.35-1.5,1.041a.622.622,0,0,0,.631.7C112.3,213.907,112.82,213.209,112.851,212.2Zm1.28,3.047h-1.458l.034-.709a2.187,2.187,0,0,1-1.845.827,1.669,1.669,0,0,1-1.608-1.868c0-1.665,1.138-2.636,3.09-2.636a5.835,5.835,0,0,1,.717.053,1.712,1.712,0,0,0,.069-.443c0-.453-.307-.622-1.129-.622a5.718,5.718,0,0,0-1.863.308c.018-.114.244-1.538.244-1.538a6.878,6.878,0,0,1,2.107-.362c1.511,0,2.312.694,2.31,2.005a8.937,8.937,0,0,1-.143,1.355C114.5,212.6,114.176,214.727,114.131,215.245Zm-5.614,0h-1.76l1.008-6.465-2.251,6.465h-1.2l-.148-6.428-1.06,6.428H101.46l1.376-8.41h2.531l.154,4.707,1.544-4.707h2.815l-1.361,8.41m32.059-3.047a2.866,2.866,0,0,0-.392-.028c-1,0-1.5.35-1.5,1.041a.622.622,0,0,0,.631.7C140.029,213.907,140.546,213.209,140.576,212.2Zm1.281,3.047H140.4l.033-.709a2.187,2.187,0,0,1-1.844.827,1.668,1.668,0,0,1-1.608-1.868c0-1.665,1.137-2.636,3.09-2.636a5.823,5.823,0,0,1,.717.053,1.717,1.717,0,0,0,.069-.443c0-.453-.306-.622-1.129-.622a5.728,5.728,0,0,0-1.863.308c.019-.114.245-1.538.245-1.538a6.875,6.875,0,0,1,2.105-.362c1.512,0,2.312.694,2.311,2.005a8.934,8.934,0,0,1-.143,1.355C142.23,212.6,141.9,214.727,141.857,215.245Zm-19.9-.1a3.937,3.937,0,0,1-1.264.222c-.9,0-1.391-.529-1.391-1.5a16.085,16.085,0,0,1,.241-1.823c.1-.639.763-4.667.763-4.667h1.749l-.2,1.035H122.9l-.239,1.644h-1.06c-.2,1.3-.493,2.921-.5,3.136,0,.353.184.506.6.506a1.4,1.4,0,0,0,.475-.065l-.233,1.514m5.364-.055a5.85,5.85,0,0,1-1.8.277c-1.958,0-2.979-1.048-2.979-3.051,0-2.338,1.3-4.059,3.062-4.059a2.261,2.261,0,0,1,2.363,2.475,7.508,7.508,0,0,1-.216,1.682h-3.484c-.118.992.5,1.405,1.521,1.405a4.065,4.065,0,0,0,1.819-.431Zm-.983-4.055c.01-.143.186-1.221-.814-1.221-.557,0-.956.434-1.118,1.221Zm-11.146-.463a2,2,0,0,0,1.34,1.91c.713.343.823.444.823.755,0,.426-.314.619-1.011.619a4.852,4.852,0,0,1-1.577-.27s-.231,1.507-.242,1.579a7.946,7.946,0,0,0,1.832.2c1.857,0,2.715-.723,2.715-2.286a1.873,1.873,0,0,0-1.241-1.906c-.738-.346-.823-.424-.823-.743,0-.37.292-.558.861-.558a9.44,9.44,0,0,1,1.264.1l.251-1.586a11.673,11.673,0,0,0-1.549-.133c-1.969,0-2.65,1.052-2.644,2.315m20.689-2.135a3.3,3.3,0,0,1,1.573.454l.288-1.825a5.1,5.1,0,0,0-1.934-.711,3.484,3.484,0,0,0-2.874,1.584c-1.021-.346-1.441.353-1.956,1.05l-.457.109a3.528,3.528,0,0,0,.055-.688h-1.616c-.221,2.117-.612,4.26-.919,6.38l-.08.46h1.761c.294-1.953.455-3.2.553-4.049l.663-.377c.1-.377.409-.5,1.031-.489a7.83,7.83,0,0,0-.125,1.4c0,2.237,1.18,3.63,3.075,3.63a5.407,5.407,0,0,0,1.555-.245l.31-1.917a3.364,3.364,0,0,1-1.5.432c-1.023,0-1.642-.772-1.642-2.049,0-1.852.921-3.15,2.235-3.15"
                                                                        transform="translate(-92.089 -187.398)"
                                                                    />
                                                                    <path
                                                                        id="Path_663"
                                                                        data-name="Path 663"
                                                                        d="M114.281,214.606h-1.8l1.032-6.464-2.3,6.464h-1.227l-.152-6.427-1.084,6.427h-1.685l1.407-8.408h2.588l.073,5.206,1.746-5.206h2.8l-1.392,8.408"
                                                                        transform="translate(-97.176 -187.244)"
                                                                        fill="#fff"
                                                                    />
                                                                    <path
                                                                        id="Path_664"
                                                                        data-name="Path 664"
                                                                        d="M563.779,211.6l-.4,2.43a2.251,2.251,0,0,0-1.719-1.116,2.788,2.788,0,0,0-2.276,1.7,14.93,14.93,0,0,1-1.533-.421v.006a10.124,10.124,0,0,0,.08-1.029h-1.653c-.225,2.117-.625,4.26-.938,6.38l-.083.46h1.8q.365-2.369.566-3.93c.615-.556.923-1.041,1.544-1.008a5.862,5.862,0,0,0-.436,2.218c0,1.71.865,2.838,2.174,2.838a2.12,2.12,0,0,0,1.659-.755l-.084.636h1.7l1.371-8.409Zm-2.251,6.829c-.613,0-.922-.453-.922-1.348,0-1.344.579-2.3,1.4-2.3.618,0,.953.471.953,1.34C562.955,217.479,562.367,218.429,561.528,218.429Z"
                                                                        transform="translate(-505.155 -192.15)"
                                                                    />
                                                                    <path
                                                                        id="Path_665"
                                                                        data-name="Path 665"
                                                                        d="M197.043,209.495a3.019,3.019,0,0,0-.4-.028c-1.02,0-1.536.35-1.536,1.041a.629.629,0,0,0,.645.7C196.484,211.2,197.012,210.507,197.043,209.495Zm1.31,3.046h-1.491l.034-.708a2.261,2.261,0,0,1-1.886.827,1.682,1.682,0,0,1-1.644-1.868c0-1.665,1.163-2.636,3.16-2.636a6.057,6.057,0,0,1,.733.053,1.682,1.682,0,0,0,.07-.444c0-.453-.313-.622-1.154-.622a6.012,6.012,0,0,0-1.905.307c.019-.113.249-1.537.249-1.537a7.149,7.149,0,0,1,2.154-.363c1.546,0,2.365.694,2.363,2a8.813,8.813,0,0,1-.146,1.355c-.156.991-.491,3.115-.537,3.631Zm24.141-8.182-.295,1.826a3.439,3.439,0,0,0-1.608-.454c-1.344,0-2.286,1.3-2.286,3.15,0,1.276.633,2.049,1.679,2.049a3.492,3.492,0,0,0,1.529-.432l-.316,1.916a5.607,5.607,0,0,1-1.591.247c-1.937,0-3.145-1.393-3.145-3.63,0-3.006,1.668-5.107,4.053-5.107a6.242,6.242,0,0,1,1.978.437m2.9,5.136a3.013,3.013,0,0,0-.4-.028c-1.02,0-1.536.35-1.536,1.041a.629.629,0,0,0,.645.7C224.838,211.2,225.366,210.507,225.4,209.495Zm1.31,3.046h-1.492l.034-.708a2.261,2.261,0,0,1-1.886.827,1.682,1.682,0,0,1-1.644-1.868c0-1.665,1.163-2.636,3.16-2.636a6.06,6.06,0,0,1,.733.053,1.694,1.694,0,0,0,.07-.444c0-.453-.313-.622-1.154-.622a6.014,6.014,0,0,0-1.905.307c.019-.113.25-1.537.25-1.537a7.147,7.147,0,0,1,2.153-.363c1.546,0,2.365.694,2.363,2a8.683,8.683,0,0,1-.146,1.355c-.155.991-.492,3.115-.537,3.631Zm-20.355-.1a4.116,4.116,0,0,1-1.293.222,1.317,1.317,0,0,1-1.422-1.5,15.8,15.8,0,0,1,.247-1.823c.1-.64.78-4.667.78-4.667h1.789l-.209,1.036h.918l-.244,1.643H206c-.208,1.3-.5,2.92-.508,3.135,0,.354.189.506.616.506a1.458,1.458,0,0,0,.485-.064l-.238,1.514m5.485-.055a6.118,6.118,0,0,1-1.836.277,2.72,2.72,0,0,1-3.047-3.051c0-2.339,1.328-4.059,3.131-4.059a2.285,2.285,0,0,1,2.417,2.475,7.368,7.368,0,0,1-.22,1.682H208.72c-.121.992.514,1.406,1.555,1.406a4.223,4.223,0,0,0,1.86-.432Zm-1.006-4.056c.011-.142.19-1.221-.832-1.221-.569,0-.977.436-1.143,1.221Zm-11.4-.462a2,2,0,0,0,1.371,1.91c.729.342.842.444.842.755,0,.426-.322.619-1.033.619a5.072,5.072,0,0,1-1.613-.27s-.236,1.507-.247,1.579a8.347,8.347,0,0,0,1.872.2c1.9,0,2.776-.723,2.776-2.285a1.872,1.872,0,0,0-1.269-1.906c-.754-.347-.842-.423-.842-.743,0-.369.3-.56.881-.56a9.9,9.9,0,0,1,1.293.1l.256-1.587a12.187,12.187,0,0,0-1.584-.133c-2.014,0-2.71,1.051-2.7,2.315m36.8,4.676h-1.7l.085-.637a2.119,2.119,0,0,1-1.659.755c-1.309,0-2.173-1.128-2.173-2.838,0-2.275,1.341-4.192,2.929-4.192a2.03,2.03,0,0,1,1.718.932l.4-2.43H237.6Zm-2.655-1.58c.838,0,1.427-.95,1.427-2.3,0-.869-.335-1.34-.954-1.34-.816,0-1.4.953-1.4,2.3C232.655,210.508,232.965,210.961,233.578,210.961Zm-5.25-5.258c-.225,2.117-.626,4.261-.939,6.379l-.082.459h1.8c.644-4.182.8-5,1.809-4.9a6.722,6.722,0,0,1,.683-1.984c-.754-.157-1.175.269-1.726,1.078a6.177,6.177,0,0,0,.107-1.037h-1.653m-14.816,0c-.226,2.117-.626,4.261-.939,6.379l-.082.459h1.8c.643-4.182.8-5,1.807-4.9a6.767,6.767,0,0,1,.683-1.984c-.753-.157-1.174.269-1.725,1.078a6.266,6.266,0,0,0,.107-1.037h-1.653m23.512,6.3a.535.535,0,0,1,1.071,0h0a.535.535,0,1,1-1.071,0Zm.535.407a.406.406,0,0,0,.407-.406h0a.407.407,0,0,0-.406-.407h0a.407.407,0,1,0,0,.814Zm-.072-.173h-.11v-.47h.2a.217.217,0,0,1,.12.023.142.142,0,0,1,.06.118.129.129,0,0,1-.082.122l.087.207h-.122l-.072-.185h-.08v.185Zm0-.266h.06a.14.14,0,0,0,.067-.009.064.064,0,0,0,.027-.054.062.062,0,0,0-.026-.048.155.155,0,0,0-.07-.008h-.058v.12Z"
                                                                        transform="translate(-176.686 -185.178)"
                                                                        fill="#fff"
                                                                    />
                                                                </svg>
                                                            ) : ele.brand === "Visa" ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="72.917"
                                                                    height="46"
                                                                    viewBox="0 0 72.917 46"
                                                                >
                                                                    <g
                                                                        id="Group_4988"
                                                                        data-name="Group 4988"
                                                                        transform="translate(4282.166 -5614)"
                                                                    >
                                                                        <path
                                                                            id="Path_671"
                                                                            data-name="Path 671"
                                                                            d="M75.751,42.6c0-3.5-1.82-5.24-5.351-5.24H8.184A4.947,4.947,0,0,0,4.268,38.8,5.1,5.1,0,0,0,2.834,42.6V78.125a5.137,5.137,0,0,0,1.434,3.805,5.313,5.313,0,0,0,3.916,1.434H70.4c3.531,0,5.351-1.764,5.351-5.239ZM4.9,81.3C4.075,80.5,5.7,82.124,4.9,81.3Z"
                                                                            transform="translate(-4285 5576.635)"
                                                                            fill="#fff"
                                                                            fillRule="evenodd"
                                                                        />
                                                                        <path
                                                                            id="Path_667"
                                                                            data-name="Path 667"
                                                                            d="M75.751,42.6c0-3.5-1.82-5.24-5.351-5.24H8.184A4.947,4.947,0,0,0,4.268,38.8,5.1,5.1,0,0,0,2.834,42.6V78.125a5.137,5.137,0,0,0,1.434,3.805,5.313,5.313,0,0,0,3.916,1.434H70.4c3.531,0,5.351-1.764,5.351-5.239ZM70.4,38.192c2.923,0,4.413,1.489,4.413,4.412V78.125c0,2.95-1.49,4.412-4.413,4.412H8.184a4.257,4.257,0,0,1-4.523-4.412V42.6c0-2.923,1.462-4.412,4.523-4.412Z"
                                                                            transform="translate(-4285 5576.635)"
                                                                            fill="#315881"
                                                                            fillRule="evenodd"
                                                                        />
                                                                        <path
                                                                            id="Path_668"
                                                                            data-name="Path 668"
                                                                            d="M13.345,44.724A3.278,3.278,0,0,0,11,45.331a3.965,3.965,0,0,0-.524,2.372V55.4H77.436V47.7c0-2.013-.993-2.978-2.979-2.978Z"
                                                                            transform="translate(-4289.664 5572.287)"
                                                                            fill="#315881"
                                                                            fillRule="evenodd"
                                                                        />
                                                                        <path
                                                                            id="Path_669"
                                                                            data-name="Path 669"
                                                                            d="M10.477,128.059c0,2.04.965,3.088,2.868,3.088H74.457c1.985,0,2.979-1.048,2.979-3.088v-7.694H10.477Z"
                                                                            transform="translate(-4289.664 5526.126)"
                                                                            fill="#dfa43b"
                                                                            fillRule="evenodd"
                                                                        />
                                                                        <path
                                                                            id="Path_670"
                                                                            data-name="Path 670"
                                                                            d="M46.942,77.807a1.418,1.418,0,0,1-.193.827l-4.826,8.411-.3-10.259H33.9l2.592,1.241a2.117,2.117,0,0,1,1.131,1.848l.717,10.894h3.778l9.046-13.982H46.529A1.373,1.373,0,0,1,46.942,77.807ZM78.161,77.2l.3-.414H73.748c.165.165.221.248.221.3a5.3,5.3,0,0,1-.221.524l-6.867,12.52c-.165.221-.331.414-.524.635h3.888l-.193-.414a5.929,5.929,0,0,1,.607-1.958l.827-1.545h4c.166,1.3.276,2.372.331,3.172l-.331.744h4.826l-.717-1.048L78.161,77.2Zm-2.869,7.694H72.424l2.454-4.716ZM63.379,76.07a6.359,6.359,0,0,0-3.888,1.241,3.133,3.133,0,0,0-1.848,2.758,4.427,4.427,0,0,0,1.324,3.282L61.642,85.2c.965.69,1.434,1.3,1.434,1.848a1.679,1.679,0,0,1-.717,1.351,2.584,2.584,0,0,1-1.655.524c-.965,0-2.62-.689-4.909-1.958v2.565a10.154,10.154,0,0,0,5.212,1.628,6.036,6.036,0,0,0,4.11-1.434,3.618,3.618,0,0,0,.413-6.04l-2.565-1.848c-.854-.689-1.323-1.3-1.323-1.765,0-1.075.634-1.627,1.93-1.627a8.672,8.672,0,0,1,3.916,1.545l.525-2.675a9.189,9.189,0,0,0-4.634-1.241ZM53.12,90.769c-.055-.579-.166-1.1-.221-1.655l3.5-11.307.827-1.02H52.182c.055.248.11.579.166.827a4.3,4.3,0,0,1-.055.827l-3.5,11.2-.717,1.131H53.12Z"
                                                                            transform="translate(-4303.957 5553.157)"
                                                                            fill="#315881"
                                                                            fillRule="evenodd"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h3>Credit Card</h3>
                                                        </div>
                                                        <div>
                                                            <p>xxxx xxxx xxxx {ele.last4}</p>
                                                        </div>
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        id={`card${index}`}
                                                        name="card"
                                                        onClick={() => handleRadioInput(ele)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="col-md-4">
                                <div className="cardnumber-box">
                                    <button type="button" className="btn" onClick={handleShow}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                        >
                                            <rect
                                                id="Rectangle_1951"
                                                data-name="Rectangle 1951"
                                                width="40"
                                                height="40"
                                                rx="5"
                                                fill="#fed756"
                                            />
                                            <g
                                                id="Group_4989"
                                                data-name="Group 4989"
                                                transform="translate(8 8)"
                                            >
                                                <path
                                                    id="Path_672"
                                                    data-name="Path 672"
                                                    d="M0,0H24V24H0Z"
                                                    fill="none"
                                                />
                                                <line
                                                    id="Line_204"
                                                    data-name="Line 204"
                                                    y2="14"
                                                    transform="translate(12 5)"
                                                    fill="none"
                                                    stroke="#2d2d2d"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                                <line
                                                    id="Line_205"
                                                    data-name="Line 205"
                                                    x2="14"
                                                    transform="translate(5 12)"
                                                    fill="none"
                                                    stroke="#2d2d2d"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                className="center-modal class-modal problemsolving rejectbooking paymentmethod"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton><Modal.Title>Add Payment Details</Modal.Title></Modal.Header>
                <Modal.Body className="blogdetails-modal">
                    <Formik
                        initialValues={{
                            name: "",
                            number: "",
                            exp_month: "",
                            exp_year: "",
                            cvc: "",
                            is_future_save: false
                        }}
                        validationSchema={() =>
                            Yup.object().shape({
                                name: Yup.string().required('Name is required !'),
                                number: Yup.string().min(16, "Card number is invalid").max(19, "Card number is invalid").required('Card number is required !'),
                                exp_month: Yup.string().required('Month is required !'),
                                exp_year: Yup.string().required('Year is required !'),
                                cvc: Yup.string().required('CVV is required !')
                            })
                        }
                        onSubmit={handleCreatecardsubmit}
                    >
                        {formik => {
                            return (
                                <Form>
                                    <div className="classtype-section">
                                        <div className="payment-type">
                                            <div className="stripe">
                                                <div className="form-check">
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault1"
                                                    >
                                                        <img src="/images/credit-card2.png" alt="" />
                                                        Debit/Credit Card
                                                    </label>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="payment_type_select"
                                                        id="flexRadioDefault1"
                                                        value={1}
                                                        defaultChecked
                                                    />
                                                </div>
                                            </div>
                                            <div className="stripe">
                                                <div className="form-check">
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flexRadioDefault3"
                                                    >
                                                        <img src="/images/paypal2.png" alt="" />
                                                        PayPal
                                                    </label>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="payment_type_select"
                                                        value={2}
                                                        id="flexRadioDefault3"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-section card-section2">
                                            <div className="card-name">
                                                <FieldText
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name on Card"
                                                />
                                            </div>
                                            <div className="card-name">
                                                <FieldText
                                                    name="number"
                                                    type="text"
                                                    placeholder="Card Number"
                                                    maxLength="16"
                                                />
                                            </div>
                                        </div>
                                        <div className="year-date-cvv card-section2 mb-4 row">
                                            <div className="date-cvv col-md-4">
                                                <div className="App">
                                                    <Field as="select" name="exp_month" className='w-100'>
                                                        <option value=""> Select Month </option>
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value, index) => {
                                                            return (
                                                                <option value={value} key={index}> {value} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="exp_month" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="date-cvv col-md-4">
                                                <div className="App">
                                                    <Field as="select" name="exp_year" className='w-100'>
                                                        <option value=""> Select Year </option>
                                                        {optionsYear.map((value, index) => {
                                                            return (
                                                                <option value={value.value} key={index}> {value.label} </option>
                                                            )
                                                        })}
                                                    </Field>
                                                    <ErrorMessage name="exp_year" component={TextErrorMsg} />
                                                </div>
                                            </div>

                                            <div className="date-cvv col-md-4">
                                                <FieldText
                                                    name="cvc"
                                                    type="password"
                                                    placeholder="CVV"
                                                    maxLength="4"
                                                />
                                            </div>
                                        </div>

                                        <div className="checkbox-box">
                                            <div className="check-box-create">
                                                <Field name="is_future_save">
                                                    {({ form, field }) => {
                                                        return (
                                                            <React.Fragment>
                                                                <input
                                                                    name={field.name}
                                                                    type="checkbox"
                                                                    id={field.name}
                                                                    onChange={e => form.setFieldValue(field.name, e.target.checked)}
                                                                ></input>
                                                                <label htmlFor={field.name}>Save card for future use</label>
                                                            </React.Fragment>
                                                        )
                                                    }}
                                                </Field>
                                            </div>
                                        </div>
                                    </div>

                                    <Modal.Footer className="mb-0 mt-5">
                                        <div className="email-send">
                                            <div className="accept">
                                                <Button
                                                    BtnText="Cancel"
                                                    name="Cancel"
                                                    BtnColor="primary cancel"
                                                    BtnType="button"
                                                    onClick={handleClose}
                                                />
                                            </div>

                                            <div className="accept">
                                                <Button
                                                    BtnText="Save"
                                                    name="Save"
                                                    BtnColor="primary"
                                                    BtnType="submit"
                                                    disabled={!formik.isValid || isLoading}
                                                    hasSpinner={isLoading && submitClick}
                                                />
                                            </div>
                                        </div>
                                    </Modal.Footer>
                                </Form>
                            )
                        }}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default PaymentMethod;