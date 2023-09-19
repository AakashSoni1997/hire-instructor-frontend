import React, { useEffect } from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Accordion } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FaqCardSection } from "../../components/faqCardSection/FaqCardSection";
import { GetFaqs } from "../../redux/actions/HomePageActions";



const FAQs = () => {
  const dispatch=useDispatch();
  const faq=useSelector((state)=>state.home?.get_faqs);

  useEffect(()=>{
    dispatch(GetFaqs())
  },[dispatch])


    return (
        <>
        <Header />
                <div className="instructor-profile">
                <div className="instru-bg-image">
                    <h1>FAQs</h1>
                    <p>Home / <span>FAQs</span></p>
                </div>
                </div>

            <section className="questions-section">
                    <div className="container">
                        <div className="row">
                            <Accordion defaultActiveKey="0" className="row">
                            {faq && faq?.map((ele, index) => <FaqCardSection key={ele.id} ele={ele} />)}
                                {/* <div className="col-lg-6">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Pellentesque non pretium?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> Ipsum dolor sit amet?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Sed venetis fels?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header> Volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Fue volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Pellentesque non pretium?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header> Ipsum dolor sit amet?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header>Volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header>Sed venetis fels?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="12">
                                        <Accordion.Header> Volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header>Fue volutpat tortor quis lobortis dapibus?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="14">
                                        <Accordion.Header>Pellentesque non pretium?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className="col-lg-6">
                                    <Accordion.Item eventKey="15">
                                        <Accordion.Header>Pellentesque non pretium?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis
                                            fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium nulla, sed venetis fels. Fue volutpat tortor quis lobortis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing lit. Pellentesque non pretium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div> */}
                            </Accordion>
                        </div>
                    </div>

                </section>

            <Footer />
        </>
    );
}

export default FAQs
