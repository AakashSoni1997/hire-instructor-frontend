import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Accordion } from "react-bootstrap";
import CustomerSlider from "../../pages/CustomerSlider/CustomerSlider";
import { Link, useNavigate } from "react-router-dom";
import "./Home.scss";
import { baseUrlPostGres } from "../../redux/constant";
import moment from "moment";
import { FaqCardSection } from "../../components/faqCardSection/FaqCardSection";
import { GetBanner, GetBlogs, GetCategory, GetFaqs } from "../../redux/actions/HomePageActions";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState("")

    // const courses = useSelector((state) => state.home?.get_course)
    const blogs = useSelector((state) => state.home?.get_blogs)
    const faq = useSelector((state) => state.home?.get_faqs)
    const banner = useSelector((state) => state.home?.get_banner)
    const category = useSelector((state) => state.home?.get_category)

    useEffect(() => {
        dispatch(GetBlogs({page_no:"1"}));
        dispatch(GetFaqs());
        dispatch(GetBanner());
        dispatch(GetCategory());
    }, [dispatch]);

    const handleSearchSubmit = () => {
        setSearch(search);
        navigate(`/instructors/${search}`);
    };

    const handleClickScroll = () => {
        const element = document.getElementById("whychoose-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClick = () => {
        navigate("/groupclasses");
    };

    return (
        <>
            <div id="footer-bottom">
                <Header />

                <div className="home-page">
                    <section className="top-section">
                        <div className="bg-colour-section">
                            <div
                                className="bg-image-section"
                                style={{
                                    backgroundImage: `url(${baseUrlPostGres()}${banner[0]?.image})`,
                                }}
                            >
                                <div className="container">
                                    <div className="">
                                        <div className="">
                                            <div className="content-section-top">
                                                <h1>{banner[0]?.name}</h1>
                                                <p>{banner[0]?.description}</p>
                                                <hr />
                                                <div className="search-button-section">
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Search by Courses or Specialty"
                                                        onChange={({ target: { value } }) => setSearch(value)}
                                                        value={search}
                                                    ></input>
                                                    <button
                                                        className="btn"
                                                        type="button"
                                                        onClick={handleSearchSubmit}
                                                    >
                                                        Explore Tutors
                                                    </button>
                                                </div>
                                                {/* <div className="aboutcourses">
                                                    <Link className='btn becomaninstructor' to="/"> About the Courses</Link>
                                                </div> */}
                                                <div className="scroll-down">
                                                    <h2>Scroll down</h2>
                                                    <h3>to get started</h3>
                                                    <img
                                                        onClick={handleClickScroll}
                                                        src="/images/toggle.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="whychoose-section" id="whychoose-section">
                        <div className="sky-dot"></div>
                        <div className="yellow-dot"></div>
                        <div className="yellow-image"></div>
                        <div className="container main-content-choose-section">
                            <div className="content-small">
                                <h1>
                                    Why Choose <span>Us?</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    vestibulum egestas.
                                </p>
                                <hr />
                            </div>
                            <div className="row card-section">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="box1">
                                        <img src="/images/card1.png" alt="" />
                                        <h2>No Hidden Charges</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="box1">
                                        <img src="/images/card2.png" alt="" />
                                        <h2>Learn With Experts</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="box1">
                                        <img src="/images/card3.png" alt="" />
                                        <h2>Experienced Instructors</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="box1">
                                        <img src="/images/card4.png" alt="" />
                                        <h2>Easy Access</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipi scing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="counter-sec">
                                        <img src="/images/counter-image2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="four-card">
                                        <h1>
                                            Our Exclusive <span>Courses</span>
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            vestibulum egestas.
                                        </p>
                                        <hr />
                                        <div className="row g-5" >
                                            {category &&
                                                category?.map(
                                                    (ele, index) =>
                                                        index < 4 && (
                                                            <div
                                                                key={index}
                                                                className="col-lg-6 col-md-6 col-12"
                                                                onClick={handleClick}
                                                            >
                                                                <div className="course-box">
                                                                    <div className="course-box-card">
                                                                        <div
                                                                            className={
                                                                                index === 0
                                                                                    ? `course-icon`
                                                                                    : index === 1
                                                                                        ? `course-icon course-boxB`
                                                                                        : index === 2
                                                                                            ? `course-icon course-boxC`
                                                                                            : index === 3
                                                                                                ? `course-icon course-boxD`
                                                                                                : ""
                                                                            }
                                                                        >
                                                                            <img
                                                                                src={`${baseUrlPostGres()}${ele.category_image}`}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <h3>{ele.category_name}</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                )}
                                            <div className="view-courses">
                                                <Link className="btn becomaninstructor" to="/courses">
                                                    View all Courses
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="yellow-circle"></div>
                            <div className="sky-circle"></div>
                        </div>
                    </section>

                    <section className="book-section">
                        <div className="container">
                            <div className="book-contect">
                                <h1>
                                    How to Book a <span>Class?</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    vestibulum egestas.
                                </p>
                                <hr />
                            </div>
                            <div className="counter-section-main">
                                <div className="counter-box1">
                                    <div className="three-box">
                                        <div className="rounded-box">
                                            <h1>01</h1>
                                        </div>
                                        <div className="rounded-box2">
                                            <h3>Register</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur api scing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-box1">
                                    <div className="three-box">
                                        <div className="rounded-box roundede-colour2">
                                            <h1>02</h1>
                                        </div>
                                        <div className="rounded-box2">
                                            <h3>Register</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur api scing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-box1">
                                    <div className="three-box">
                                        <div className="rounded-box roundede-colour3">
                                            <h1>03</h1>
                                        </div>
                                        <div className="rounded-box2">
                                            <h3>Register</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur api scing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <CustomerSlider />
                            </div>
                        </div>
                    </section>

                    <section className="recent-blogs">
                        <div className="container">
                            <h1>
                                Our Recent <span>Blogs</span>
                            </h1>
                            <p className="recent-after-image">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum
                                egestas.
                            </p>
                            <hr />

                            <div className="three-post">
                                <div className="row g-5">
                                    {blogs &&
                                        blogs.map(
                                            (ele, index) =>
                                                index < 3 && (
                                                    <div key={index} className="col-md-6 col-lg-4 col-12">
                                                        <div className="bolg-card-main">
                                                            <div className="image-box">
                                                                <img
                                                                    src={`${baseUrlPostGres()}${ele.blog_image}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="date-section">
                                                                <div className="date">
                                                                    <Link className="btn">
                                                                            
                                                                    </Link>
                                                                </div>
                                                                <div className="categ">
                                                                    <Link className="btn">Technology</Link>
                                                                </div>
                                                            </div>
                                                            <h2>{ele.blog_title}</h2>
                                                            <p className="name-comment-section">
                                                                <span className="name-customer">
                                                                    By Remy Jackson
                                                                </span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="12.535"
                                                                    height="11.268"
                                                                    viewBox="0 0 12.535 11.268"
                                                                >
                                                                    <g
                                                                        id="Group_221"
                                                                        data-name="Group 221"
                                                                        transform="translate(-1022.787 -658)"
                                                                    >
                                                                        <path
                                                                            id="Path_141"
                                                                            data-name="Path 141"
                                                                            d="M1108.784,661.66h3.244a1.214,1.214,0,0,1,1.269,1.261,3.506,3.506,0,0,1-.338,1.631c-.573,1.237-1.114,2.488-1.668,3.734a1.539,1.539,0,0,1-1.513.98c-1.209,0-2.418,0-3.627,0a1.958,1.958,0,0,1-1.473-.612q-.3-.306-.6-.6a.427.427,0,0,1-.135-.327c0-1.512,0-3.025.006-4.537a.428.428,0,0,1,.106-.288,20.475,20.475,0,0,0,2.776-3.444c.217-.3.438-.6.647-.908a1.075,1.075,0,0,1,1.151-.527,1.182,1.182,0,0,1,.92.908,1.4,1.4,0,0,1-.064.961c-.218.539-.433,1.079-.648,1.619C1108.819,661.555,1108.805,661.6,1108.784,661.66Z"
                                                                            transform="translate(-77.977)"
                                                                            fill="#005EB5"
                                                                            fillRule="evenodd"
                                                                        />
                                                                        <path
                                                                            id="Path_142"
                                                                            data-name="Path 142"
                                                                            d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z"
                                                                            transform="translate(0 -110.402)"
                                                                            fill="#005EB5"
                                                                            fillRule="evenodd"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                                <span className="like-number">121</span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="11.469"
                                                                    height="11.268"
                                                                    viewBox="0 0 11.469 11.268"
                                                                >
                                                                    <g
                                                                        id="Icon_ionic-ios-chatbubbles"
                                                                        data-name="Icon ionic-ios-chatbubbles"
                                                                        transform="translate(-8.177 -3.375)"
                                                                    >
                                                                        <path
                                                                            id="Path_143"
                                                                            data-name="Path 143"
                                                                            d="M18.558,12.367a.8.8,0,0,1,.109-.4,1.11,1.11,0,0,1,.069-.1,5.345,5.345,0,0,0,.91-2.979,5.611,5.611,0,0,0-5.729-5.508A5.69,5.69,0,0,0,8.3,7.759a5.3,5.3,0,0,0-.122,1.128,5.6,5.6,0,0,0,5.64,5.578,6.793,6.793,0,0,0,1.557-.254c.373-.1.742-.237.838-.274a.872.872,0,0,1,.307-.056.858.858,0,0,1,.333.066l1.87.663a.446.446,0,0,0,.129.033.263.263,0,0,0,.264-.264.424.424,0,0,0-.016-.089Z"
                                                                            fill="#005EB5"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                                <span>53</span>
                                                            </p>
                                                            <p className="desceiption-button">
                                                                    {ele?.short_blog_description}
                                                                    <Link className="btn" to={`/blogdetail/${ele.id}`}>
                                                                        READ MORE
                                                                    </Link>
                                                                </p>
                                                        </div>
                                                    </div>
                                                )
                                        )}
                                    <div className="view-courses">
                                        <Link className="btn becomaninstructor" to="/blog">
                                            View all
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="questions-section">
                        <div className="container">
                            <h1>
                                Frequently Asked <span>Questions</span>
                            </h1>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum
                                egestas.
                            </p>
                            <hr />

                            <div className="row">
                                <Accordion className="row">
                                    {faq && faq?.map((ele, index) => <FaqCardSection key={ele.id} ele={ele} />)}
                                </Accordion>
                            </div>
                            <div className="view-courses">
                                <Link className="btn becomaninstructor" to="/faqs">
                                    View all
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Home;
