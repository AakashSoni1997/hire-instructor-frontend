import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../style.scss";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    GetBlogDetails,
    GetBlogsCategory,
} from "../../redux/actions/HomePageActions";
import moment from "moment";
import { baseUrlPostGres } from "../../redux/constant";
import { getUserSettings } from "./../../Utils/Function"
import { BlogLikeAction, ResetBlogLikeAction } from "../../redux/actions/BlogActions";
import { toast } from "react-toastify";
// import { FileUploader } from "react-drag-drop-files";

const Blogdetail = () => {
    const userDetail = getUserSettings()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const blogsCategory = useSelector((state) => state.home?.get_blogs_category);
    const filteredBlog = useSelector((state) => state.home.get_blog_detail);
    const blogLikeSelector = useSelector((state) => state.blogs.blog_like);

    
    useEffect(() => {
        dispatch(GetBlogDetails(id));
        dispatch(GetBlogsCategory());
    }, [id, dispatch]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePostComment = () => {

    }

    const handleBlogLike = () => {
        let userRole = userDetail?.user?.role
        if (Object.keys(userDetail).length > 0) {
            dispatch(BlogLikeAction(userRole == 2 ? "blog-like" : "like-blog", id))
        } else {
            toast.error("Please Login", { theme: "colored" });
            navigate("/")
        }
    }

    useEffect(() => {
        if(Object.keys(blogLikeSelector).length > 0){
            if(blogLikeSelector.status){
                dispatch(GetBlogDetails(id));
                dispatch(ResetBlogLikeAction());
            }
        }
    }, [blogLikeSelector])

    return (
        <>
            <div id="footer-bottom" className="blogdetail">
                <Header />
                <div className="instru-bg-image">
                    <h1>Blogs</h1>
                    <p>
                        Home / Blogs / <span> Education</span>
                    </p>
                </div>

                <div className="teachers-description">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-md-12 col-lg-7 col-xxl-8 col-12">
                                <div className="blogdetails-section">
                                    <h1>{filteredBlog[0]?.blog_title}</h1>
                                    <h3>
                                        By Jones Jacky |
                                        <Link className="btn" to="/">
                                            FOLLOW
                                        </Link>
                                    </h3>

                                    <div className="comment-like-button-section">
                                        <div className="comment">
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18.634"
                                                    height="16.75"
                                                    viewBox="0 0 18.634 16.75"
                                                >
                                                    <g
                                                        id="Group_184"
                                                        data-name="Group 184"
                                                        transform="translate(-1022.787 -658)"
                                                    >
                                                        <path
                                                            id="Path_141"
                                                            data-name="Path 141"
                                                            d="M1111.139,663.442h.261q2.281,0,4.562,0a1.8,1.8,0,0,1,1.886,1.874,5.214,5.214,0,0,1-.5,2.424c-.851,1.839-1.656,3.7-2.48,5.551a2.288,2.288,0,0,1-2.249,1.457c-1.8,0-3.594,0-5.391,0a2.911,2.911,0,0,1-2.19-.909q-.44-.454-.893-.9a.635.635,0,0,1-.2-.485c0-2.248,0-4.5.009-6.744a.637.637,0,0,1,.157-.429,30.432,30.432,0,0,0,4.127-5.119c.322-.449.651-.894.962-1.35a1.6,1.6,0,0,1,1.71-.783,1.757,1.757,0,0,1,1.368,1.351,2.078,2.078,0,0,1-.095,1.429q-.486,1.2-.964,2.407C1111.192,663.285,1111.171,663.352,1111.139,663.442Z"
                                                            transform="translate(-76.43)"
                                                            fill="#005eb5"
                                                            fillRule="evenodd"
                                                        />
                                                        <path
                                                            id="Path_142"
                                                            data-name="Path 142"
                                                            d="M1022.792,777.593c0-1.041-.012-2.081,0-3.122a1.5,1.5,0,0,1,.92-1.4,1.546,1.546,0,0,1,1.669.165,1.488,1.488,0,0,1,.645,1.23c.008,2.088.012,4.177,0,6.265a1.617,1.617,0,0,1-3.231.025c-.021-1.055-.005-2.11-.005-3.165Z"
                                                            transform="translate(0 -108.212)"
                                                            fill="#005eb5"
                                                            fillRule="evenodd"
                                                        />
                                                    </g>
                                                </svg>
                                                <span>{filteredBlog[0]?.bloglike_count}</span>
                                                <svg
                                                    className="margin-l"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="17.684"
                                                    viewBox="0 0 18 17.684"
                                                >
                                                    <g
                                                        id="Icon_ionic-ios-chatbubbles"
                                                        data-name="Icon ionic-ios-chatbubbles"
                                                        transform="translate(-8.177 -3.375)"
                                                    >
                                                        <path
                                                            id="Path_143"
                                                            data-name="Path 143"
                                                            d="M24.469,17.487a1.254,1.254,0,0,1,.171-.632,1.744,1.744,0,0,1,.109-.16,8.388,8.388,0,0,0,1.429-4.675,8.806,8.806,0,0,0-8.992-8.645,8.93,8.93,0,0,0-8.816,6.88,8.319,8.319,0,0,0-.192,1.77A8.782,8.782,0,0,0,17.03,20.78a10.662,10.662,0,0,0,2.443-.4c.585-.16,1.165-.373,1.315-.43a1.369,1.369,0,0,1,.481-.088,1.346,1.346,0,0,1,.523.1l2.935,1.041a.7.7,0,0,0,.2.052.412.412,0,0,0,.414-.414.665.665,0,0,0-.026-.14Z"
                                                            fill="#005eb5"
                                                        />
                                                    </g>
                                                </svg>
                                                <span>{filteredBlog[0]?.blog_comment_count}</span>
                                            </p>
                                        </div>

                                        <div className="button-setion2">
                                            <Link className="btn becomaninstructor date">
                                                <span>
                                                    {moment(filteredBlog[0]?.created_at).format(
                                                        "DD MMM'YY"
                                                    )}
                                                </span>
                                            </Link>
                                            <button className="btn becomaninstructor">
                                                <span>
                                                    {filteredBlog[0]?.blog_category?.blog_category}
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="thumblil-image">
                                        <img
                                            src={`${baseUrlPostGres()}${filteredBlog[0]?.blog_image}`}
                                            alt={filteredBlog[0]?.blog_title}
                                        />
                                    </div>

                                    <div className="description-text">
                                        <p>{filteredBlog[0]?.blog_description}</p>
                                    </div>

                                    <div className="flag-section">
                                        <button className="btn becomaninstructor" type="button">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16.489"
                                                height="16.75"
                                                viewBox="0 0 16.489 16.75"
                                            >
                                                <path
                                                    id="Icon_awesome-flag"
                                                    data-name="Icon awesome-flag"
                                                    d="M11.737,3.232c-1.753,0-3.2-1.138-5.405-1.138a6.359,6.359,0,0,0-2.226.393,1.832,1.832,0,1,0-2.758.848v12.63a.785.785,0,0,0,.785.785h.523a.785.785,0,0,0,.785-.785V12.877a9.141,9.141,0,0,1,3.744-.724c1.753,0,3.2,1.138,5.405,1.138A6.849,6.849,0,0,0,16.6,11.954a1.045,1.045,0,0,0,.453-.862V3.139a1.047,1.047,0,0,0-1.488-.949,9.525,9.525,0,0,1-3.826,1.042Z"
                                                    transform="translate(-0.563)"
                                                    fill="#828282"
                                                />
                                            </svg>
                                        </button>

                                        <button className="btn becomaninstructor" type="button" onClick={handleBlogLike}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18.634"
                                                height="16.75"
                                                viewBox="0 0 18.634 16.75"
                                            >
                                                <g
                                                    id="Group_219"
                                                    data-name="Group 219"
                                                    transform="translate(-1022.787 -658)"
                                                >
                                                    <path
                                                        id="Path_141"
                                                        data-name="Path 141"
                                                        d="M1111.139,663.442h.261q2.281,0,4.562,0a1.8,1.8,0,0,1,1.886,1.874,5.214,5.214,0,0,1-.5,2.424c-.851,1.839-1.656,3.7-2.48,5.551a2.288,2.288,0,0,1-2.249,1.457c-1.8,0-3.594,0-5.391,0a2.911,2.911,0,0,1-2.19-.909q-.44-.454-.893-.9a.635.635,0,0,1-.2-.485c0-2.248,0-4.5.009-6.744a.637.637,0,0,1,.157-.429,30.432,30.432,0,0,0,4.127-5.119c.322-.449.651-.894.962-1.35a1.6,1.6,0,0,1,1.71-.783,1.757,1.757,0,0,1,1.368,1.351,2.078,2.078,0,0,1-.095,1.429q-.486,1.2-.964,2.407C1111.192,663.285,1111.171,663.352,1111.139,663.442Z"
                                                        transform="translate(-76.43)"
                                                        fill="#828282"
                                                        fillRule="evenodd"
                                                    />
                                                    <path
                                                        id="Path_142"
                                                        data-name="Path 142"
                                                        d="M1022.792,777.593c0-1.041-.012-2.081,0-3.122a1.5,1.5,0,0,1,.92-1.4,1.546,1.546,0,0,1,1.669.165,1.488,1.488,0,0,1,.645,1.23c.008,2.088.012,4.177,0,6.265a1.617,1.617,0,0,1-3.231.025c-.021-1.055-.005-2.11-.005-3.165Z"
                                                        transform="translate(0 -108.212)"
                                                        fill="#828282"
                                                        fillRule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                        </button>
                                        <p>{filteredBlog[0]?.bloglike_count} Likes</p>
                                    </div>

                                    <div className="comments-section">
                                        <h2>
                                            Comments <span>(10)</span>
                                        </h2>
                                        <div className="post-input">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Write your comment here..."
                                            />
                                            <button className="btn" onClick={handlePostComment}>
                                                Post Comment
                                            </button>
                                        </div>

                                        <div className="comments-main-section">
                                            <div className="comments-card-box">
                                                <div className="profile-image">
                                                    <img src="/images/elbrick-vasan1.png" alt="" />
                                                </div>
                                                <div className="profile-content">
                                                    <h1>
                                                        Elbrick Vasan
                                                        <Link className="btn">26 Sept'22</Link>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        lit. Pellque non pretium nulla, sed venenatis fels.
                                                        Fue volutpat tortor quis lobois dus, consectetur
                                                        adipis. Pellque non pretium nulla.
                                                    </p>
                                                    <Link className="btn" to="/">
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="sub-comments">
                                                <div className="comments-card-box">
                                                    <div className="profile-image">
                                                        <img src="/images/elbrick-vasan2.png" alt="" />
                                                    </div>
                                                    <div className="profile-content">
                                                        <h1>
                                                            Elbrick Vasan
                                                            <Link className="btn">26 Sept'22</Link>
                                                        </h1>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            lit. Pellque non pretium nulla, sed venenatis
                                                            fels. Fue volutpat tortor quis lobois dus,
                                                            consectetur adipis. Pellque non pretium nulla.
                                                        </p>
                                                        <Link className="btn" to="/">
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="comments-card-box">
                                                    <div className="profile-image">
                                                        <img src="/images/elbrick-vasan3.png" alt="" />
                                                    </div>
                                                    <div className="profile-content">
                                                        <h1>
                                                            Elbrick Vasan
                                                            <Link className="btn">26 Sept'22</Link>
                                                        </h1>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            lit. Pellque non pretium nulla, sed venenatis
                                                            fels. Fue volutpat tortor quis lobois dus,
                                                            consectetur adipis. Pellque non pretium nulla.
                                                        </p>
                                                        <Link className="btn" to="/">
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="sub-comments2">
                                                    <div className="comments-card-box">
                                                        <div className="profile-image">
                                                            <img src="/images/elbrick-vasan4.png" alt="" />
                                                        </div>
                                                        <div className="profile-content">
                                                            <h1>
                                                                Elbrick Vasan
                                                                <Link className="btn">26 Sept'22</Link>
                                                            </h1>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing lit. Pellque non pretium nulla, sed
                                                                venenatis fels. Fue volutpat tortor quis lobois
                                                                dus, consectetur adipis. Pellque non pretium
                                                                nulla.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="comments-card-box">
                                                        <div className="profile-image">
                                                            <img src="/images/elbrick-vasan5.png" alt="" />
                                                        </div>
                                                        <div className="profile-content">
                                                            <h1>
                                                                Elbrick Vasan
                                                                <Link className="btn">26 Sept'22</Link>
                                                            </h1>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing lit. Pellque non pretium nulla, sed
                                                                venenatis fels. Fue volutpat tortor quis lobois
                                                                dus, consectetur adipis. Pellque non pretium
                                                                nulla.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="comments-card-box">
                                                <div className="profile-image">
                                                    <img src="/images/elbrick-vasan6.png" alt="" />
                                                </div>
                                                <div className="profile-content">
                                                    <h1>
                                                        Elbrick Vasan
                                                        <Link className="btn">26 Sept'22</Link>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        lit. Pellque non pretium nulla, sed venenatis fels.
                                                        Fue volutpat tortor quis lobois dus, consectetur
                                                        adipis. Pellque non pretium nulla.
                                                    </p>
                                                    <Link className="btn" to="/">
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="sub-comments all-replies">
                                                <Link className="btn" to="/">
                                                    All Replies
                                                </Link>
                                            </div>

                                            <div className="comments-card-box">
                                                <div className="profile-image">
                                                    <img src="/images/elbrick-vasan7.png" alt="" />
                                                </div>
                                                <div className="profile-content">
                                                    <h1>
                                                        Elbrick Vasan
                                                        <Link className="btn">26 Sept'22</Link>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        lit. Pellque non pretium nulla, sed venenatis fels.
                                                        Fue volutpat tortor quis lobois dus, consectetur
                                                        adipis. Pellque non pretium nulla.
                                                    </p>
                                                    <Link className="btn" to="/">
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-5 col-xxl-4 col-12 sidebar-details">
                                <div className="feescharges-sec2">
                                    <Link className="btn" onClick={handleShow}>
                                        Post New Blog
                                    </Link>
                                </div>

                                <div className="feescharges-sec recent-blog-section">
                                    <h2>Recent Blogs</h2>

                                    <div className="charge-list">
                                        <div className="recent-blog-img">
                                            <img src="/images/recent-blog1.png" alt="" />
                                        </div>
                                        <div className="recent-blog-content">
                                            <h1>Pellentesque non pretium</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse
                                                <Link className="btn" to="">
                                                    READ MORE
                                                </Link>
                                            </p>
                                            <Link className="btn becomaninstructor date">
                                                <span>
                                                    {moment(filteredBlog[0]?.created_at).format(
                                                        "DD MMM'YY"
                                                    )}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="charge-list">
                                        <div className="recent-blog-img">
                                            <img src="/images/recent-blog2.png" alt="" />
                                        </div>
                                        <div className="recent-blog-content">
                                            <h1>Pellentesque non pretium</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse
                                                <Link className="btn" to="">
                                                    READ MORE
                                                </Link>
                                            </p>
                                            <Link className="btn becomaninstructor date">
                                                <span>26 Sept'22</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="charge-list">
                                        <div className="recent-blog-img">
                                            <img src="/images/recent-blog3.png" alt="" />
                                        </div>
                                        <div className="recent-blog-content">
                                            <h1>Pellentesque non pretium</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse
                                                <Link className="btn" to="">
                                                    READ MORE
                                                </Link>
                                            </p>
                                            <Link className="btn becomaninstructor date">
                                                <span>26 Sept'22</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="charge-list">
                                        <div className="recent-blog-img">
                                            <img src="/images/recent-blog4.png" alt="" />
                                        </div>
                                        <div className="recent-blog-content">
                                            <h1>Pellentesque non pretium</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse
                                                <Link className="btn" to="">
                                                    READ MORE
                                                </Link>
                                            </p>
                                            <Link className="btn becomaninstructor date">
                                                <span>26 Sept'22</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="feescharges-sec availability specialization">
                                    <h2>Category</h2>
                                    <div className="specialization-content">
                                        <div className="Specialization-tag">
                                            {blogsCategory?.map((elem, index) => (
                                                <button className="btn becomaninstructor" key={index}>{elem.blog_category}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            <Modal
                className="center-modal class-modal"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Post New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className="blogdetails-modal">
                    <div className="classtype-section">
                        <div className="form-blog">
                            <input required type="text" placeholder="Blog Title" />
                            <textarea
                                id="w3review"
                                name="w3review"
                                rows="3"
                                placeholder="Description"
                            ></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="email-send">
                        <Link className="btn becomaninstructor" to="/">
                            Post
                        </Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Blogdetail;
