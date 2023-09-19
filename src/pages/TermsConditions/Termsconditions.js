import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style.scss";
import axios from "axios";
import { baseUrlPostGres } from "../../redux/constant";
import { toast, ToastContainer } from "react-toastify";

const TermsConditions = () => {
    const [cmsData, setCmsData] = useState({});
    useEffect(() => {
        axios
            .get(`${baseUrlPostGres()}/api/cms_pages/terms-condition`)
            .then((res) => setCmsData(res.data))
            .catch((err) => toast(err.response?.data?.message));
    }, []);

    return (
        <><ToastContainer />
            <div id="footer-bottom" className="Instructordetail">
                <Header />
                <div className="instru-bg-image">
                    <h1>Terms & Conditions</h1>
                    <p>
                        Home /<span> Terms & Conditions</span>
                    </p>
                </div>

                <div className="termsconditions">
                    <div className="container" dangerouslySetInnerHTML={{ __html: cmsData?.message?.description }}>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default TermsConditions;

