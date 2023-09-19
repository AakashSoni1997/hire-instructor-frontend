import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "../../../style.scss";
import { useParams } from "react-router-dom";
import CountdownTimer from "../../../countDownTimer/countDownTimer";
import { socket, sendUserIDToBackend } from "../../../redux/constant/Socket";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { paymentZoomLink } from "../../../redux/actions/PaymentAction";
import SuccessCheckIcon from "./../SuccessCheckIcon"
const Ondemandclassconfirmation = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const zoomLinkSelector = useSelector((state) => state?.instructor?.zoom_link)

    const [zoomLink, setZoomLink] = useState()
    const [zoomLinkReceived, setZoomLinkReceived] = useState(false)
    const THREE_DAYS_IN_MS = 5 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    // useEffect(() => {
    //     removeSocketAllListeners()
    //     socketConnection()
    // }, [])

    useEffect(() => {
        sendUserIDToBackend()
        dispatch(paymentZoomLink(id))
    }, [dispatch])

    socket.on("student_booking_zoom_details", (accept) => {
        setZoomLink(accept.zoom_url)
        setZoomLinkReceived(true)
    });

    const copyLinkToClipboard = () => {
        navigator.clipboard.writeText(zoomLink)
        toast.success("Invite link copied successfully!", { theme: "colored" });
    }

    useEffect(() => {
        if (Object.keys(zoomLinkSelector).length > 0) {
            if (zoomLinkSelector.status == 200) {
                setZoomLink(zoomLinkSelector.data.zoom_url)
            }
        }
    }, [zoomLinkSelector])

    return (
        <>
            <div id="footer-bottom" className="instructorcompleteprofile">
                <Header />
                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p>
                        Home / Instructors / Rosy Mela /<span>Booking</span>
                    </p>
                </div>

                <div className="confirmation-section">
                    <span>
                        <SuccessCheckIcon />
                    </span>
                    {zoomLink ?
                        <>
                            <h2>Your Zoom Link is ready for class</h2>
                            <p>
                                <a href={zoomLink} target="_blank"> {zoomLink} </a>
                            </p>
                            <button onClick={copyLinkToClipboard} className="btn"> Copy Link </button>
                        </>
                        :
                        <>
                            <div className="comfirmation-pending-block">
                                <h2> Wait... </h2>
                                <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </h5>
                                <div className="waiting-timer-block">
                                    <CountdownTimer targetDate={dateTimeAfterThreeDays} hourShow={false} />
                                </div>
                            </div>
                        </>
                    }
                </div>
                <Footer />
            </div>
        </>
    );
};
export default Ondemandclassconfirmation;
