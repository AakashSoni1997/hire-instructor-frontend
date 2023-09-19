import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style.scss";
import axios from "axios";
import { baseUrlPostGres } from "../../redux/constant";
import { toast, ToastContainer } from "react-toastify";

const TermsConditions = () => {
  const [slug, setSlug] = useState("privacy-policy");
  const [cmsData, setCmsData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrlPostGres()}/api/cms_pages/${slug}`)
      .then((res) => setCmsData(res.data))
      .catch((err) => toast(err.response?.data?.message));
  }, [slug]);

  return (
    <>
    <ToastContainer />
      <div id="footer-bottom" className="Instructordetail">
        <Header />
        <div className="instru-bg-image">
          <h1>Privacy Policy</h1>
          <p>
            Home /<span> Privacy Policy</span>
          </p>
        </div>
        <div className="termsconditions">
          <div className="container">
          <div
              className="container"
                dangerouslySetInnerHTML={{
                  __html: cmsData?.message?.description,
                }}
            ></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;
