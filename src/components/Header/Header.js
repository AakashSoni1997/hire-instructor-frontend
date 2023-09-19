import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import ReactSelect from "react-select";
import Modal from "react-bootstrap/Modal";
import "./Header.scss";

const Header = () => {
    const pathname = useLocation();
    const [selectedOption, setSelectedOption] = useState(null);

    const [showTwo, rejectShow] = useState(false);

    const handleCloseTwo = () => rejectShow(false);

    const [shownotification, notificationShow] = useState(false);

    const handleClosenotification = () => notificationShow(false);

    const options1 = [
        { value: "EN", label: "EN" },
        { value: "SP", label: "SP" },
    ];

    const userInfo = useSelector((state) => state.auth?.user);
    let {role}=userInfo;

    useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
        return () => {
            document.body.className = "test";
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <div className="top-navbar" id="header">
                <div className="container">
                    {["lg"].map((expand, index) => (
                        <Navbar key={index} expand={expand} className="mb-3">
                            <Navbar.Brand>
                                <Link to="/">
                                    <img
                                        src="/images/logowhite.png"
                                        alt="Logo"
                                        className="logo-header"
                                    />
                                </Link>
                            </Navbar.Brand>
                            <div className="header-devid-section">
                                <div className="menu-main-header">
                                    <Navbar.Toggle
                                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                                    />
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-${expand}`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Link to="/">
                                                <img
                                                    src="/images/logowhite.png"
                                                    alt="Logo"
                                                    className="logo-header"
                                                />
                                            </Link>
                                            <Offcanvas.Title
                                                id={`offcanvasNavbarLabel-expand-${expand}`}
                                            ></Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="mx-auto">
                                                <NavLink to="/">Home</NavLink>
                                                <NavLink to="/courses">Courses</NavLink>
                                                <NavLink to="/instructors">Instructors</NavLink>
                                                <NavLink to="/groupclasses">Group Classes</NavLink>
                                                <NavLink to="/blog">Blogs</NavLink>
                                                <NavLink to="/contactus">Contact</NavLink>
                                            </Nav>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </div>
                                <div className="header-button-group">
                                    {userInfo && Object.keys(userInfo).length > 0 ? (
                                        <>
                                            <div className="search-toggle">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <Link className="search-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="21.002" height="21.002" viewBox="0 0 21.002 21.002">
                                                                <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
                                                                    <path id="Path_144" data-name="Path 144" d="M12.451,3A9.451,9.451,0,1,1,5.768,5.768,9.389,9.389,0,0,1,12.451,3Zm0,16.8A7.351,7.351,0,1,0,5.1,12.451,7.359,7.359,0,0,0,12.451,19.8Z" fill="#fff" />
                                                                    <path id="Path_145" data-name="Path 145" d="M29.093,30.143a1.047,1.047,0,0,1-.743-.308l-4.568-4.568a1.05,1.05,0,0,1,1.485-1.485l4.568,4.568a1.05,1.05,0,0,1-.743,1.793Z" transform="translate(-6.141 -6.141)" fill="#fff" />
                                                                </g>
                                                            </svg>
                                                        </Link>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <input className="search-txt" type="text" name="" placeholder="Search" />
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <Link className="login notification" to="/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12.898"
                                                    height="16.132"
                                                    viewBox="0 0 12.898 16.132"
                                                >
                                                    <g
                                                        id="Icon_ionic-ios-notifications"
                                                        data-name="Icon ionic-ios-notifications"
                                                        transform="translate(-6.761 -3.93)"
                                                    >
                                                        <path
                                                            id="Path_127"
                                                            data-name="Path 127"
                                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                                            transform="translate(-3.346 -10.41)"
                                                            fill="#fff"
                                                        />
                                                        <path
                                                            id="Path_128"
                                                            data-name="Path 128"
                                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                                            fill="#fff"
                                                        />
                                                    </g>
                                                </svg>
                                            </Link>
                                            <Link className="login" to={`/myprofile/${role===2?"student":"instructor"} `}>
                                                <img
                                                    src={
                                                        userInfo.profile_image !== undefined && userInfo.profile_image !== "" && userInfo.profile_image !== null
                                                            ? userInfo.profile_image
                                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                                    }
                                                    alt=""
                                                />
                                                {userInfo?.first_name}
                                            </Link>
                                            <div className="language-dropdown dropdown-select">
                                                <div className="App">
                                                    <ReactSelect
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={options1}
                                                        className="custom-lang-select"
                                                        placeholder="EN"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Link className="login" to="/studentlogin">
                                                Log In
                                            </Link>
                                            <Link className="joinnow" to="/studentcreateaccount">
                                                Join Now
                                            </Link>
                                            <Link
                                                className="becomaninstructor becomaninstructor-button"
                                                to="/instructorcreateaccount  "
                                            >
                                                Become an Instructor
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Navbar>
                    ))}
                </div>
            </div>

            <Modal
                className="center-modal class-modal notifications-modal"
                show={shownotification}
                onHide={handleClosenotification}
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="notifications-content">
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>

                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                    <div className="notification-card-section">
                        <Link to="/">
                            <div className="notification-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12.898"
                                    height="16.132"
                                    viewBox="0 0 12.898 16.132"
                                >
                                    <g
                                        id="Icon_ionic-ios-notifications"
                                        data-name="Icon ionic-ios-notifications"
                                        transform="translate(-6.761 -3.93)"
                                    >
                                        <path
                                            id="Path_127"
                                            data-name="Path 127"
                                            d="M16.547,30.473a1.9,1.9,0,0,0,1.939-2.137H14.6A1.9,1.9,0,0,0,16.547,30.473Z"
                                            transform="translate(-3.346 -10.41)"
                                            fill="#2d2d2d"
                                        />
                                        <path
                                            id="Path_128"
                                            data-name="Path 128"
                                            d="M19.5,15.877c-.621-.818-1.843-1.3-1.843-4.963,0-3.762-1.661-5.274-3.209-5.637-.145-.036-.25-.085-.25-.238V4.922a.984.984,0,1,0-1.968,0v.117c0,.149-.1.2-.25.238-1.552.367-3.209,1.875-3.209,5.637,0,3.665-1.222,4.141-1.843,4.963a.8.8,0,0,0,.641,1.282H18.859A.8.8,0,0,0,19.5,15.877Z"
                                            fill="#2d2d2d"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </Link>
                        <div className="notification-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                vestibulum.
                            </p>
                            <h4>01 Oct'22</h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                className="center-modal class-modal notifications-modal instructor-sidebar-modal-section"
                show={showTwo}
                onHide={handleCloseTwo}
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="instructor-sidebar-modal">
                        <div className="sidemenu-profile">
                            <Navbar>
                                <Navbar.Toggle />
                                <Navbar.Offcanvas>
                                    <Offcanvas.Body>
                                        <div className="profile-image-box">
                                            <div className="profile-img">
                                                <img src="/images/profile-image.png" alt="Logo" />
                                            </div>
                                            <div className="profile-details">
                                                <h2 className="flagcheckmark">
                                                    Anna Clifton
                                                    <span className="Flagimage">
                                                        <img src="images/flag-american.png" alt="" />
                                                    </span>
                                                    <span className="Checkmark">
                                                        <img src="images/checked-mark.png" alt="" />
                                                    </span>
                                                </h2>
                                                <p>annaclifton@example.com</p>
                                                <div className="followers-following-box">
                                                    <Link className="btn">
                                                        Followers <span>21</span>
                                                    </Link>
                                                    <Link className="btn">
                                                        Following <span>21</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Nav className="sidebar-menu">
                                            <NavLink to="/myprofile">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24.349"
                                                        height="24.345"
                                                        viewBox="0 0 24.349 24.345"
                                                    >
                                                        <path
                                                            d="M12643.612-3153.285c-.054-.013-.1-.029-.158-.038-.547-.08-1.1-.134-1.646-.241a12.025,12.025,0,0,1-9.281-9.624c-.073-.454-.124-.912-.187-1.369v-1.5c.013-.067.031-.134.041-.2.08-.556.134-1.118.248-1.668a12.026,12.026,0,0,1,9.64-9.214c.445-.073.9-.124,1.344-.184h1.5c.061.013.12.029.181.038.616.1,1.242.153,1.852.292a12,12,0,0,1,9.056,9.618c.077.438.124.883.185,1.322v1.5a1.871,1.871,0,0,0-.041.184c-.079.556-.134,1.118-.245,1.667a12.028,12.028,0,0,1-9.643,9.237c-.448.073-.9.124-1.344.184Zm-9.393-12.022a10.162,10.162,0,0,0,10.136,10.145,10.164,10.164,0,0,0,10.152-10.158,10.159,10.159,0,0,0-10.152-10.133A10.162,10.162,0,0,0,12634.22-3165.307Zm13.767,4.717a4.247,4.247,0,0,0-1.1-.934,3.817,3.817,0,0,0-1.912-.524,7.218,7.218,0,0,0-1.937.121,3.946,3.946,0,0,0-2.049,1.293.744.744,0,0,1-.762.3.728.728,0,0,1-.413-1.185,5.316,5.316,0,0,1,2.455-1.706,5.6,5.6,0,0,1,1.843-.3,8.084,8.084,0,0,1,2.21.187,5.412,5.412,0,0,1,2.779,1.795,2.1,2.1,0,0,1,.226.464.833.833,0,0,1-.508.705.778.778,0,0,1-.276.054A.725.725,0,0,1,12647.986-3160.59Zm-3.644-4.186a3.537,3.537,0,0,1-3.522-3.542,3.537,3.537,0,0,1,3.539-3.522,3.537,3.537,0,0,1,3.525,3.538,3.538,3.538,0,0,1-3.535,3.526Zm-2.052-3.535a2.07,2.07,0,0,0,2.059,2.065,2.068,2.068,0,0,0,2.064-2.062,2.069,2.069,0,0,0-2.062-2.061A2.071,2.071,0,0,0,12642.291-3168.312Z"
                                                            transform="translate(-12632.189 3177.479)"
                                                            fill="#005eb5"
                                                            stroke="#005eb5"
                                                            strokeWidth="0.3"
                                                        />
                                                    </svg>
                                                </span>
                                                My Profile
                                            </NavLink>
                                            <NavLink to="/bookingrequest">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20.252"
                                                        height="19.423"
                                                        viewBox="0 0 20.252 19.423"
                                                    >
                                                        <g
                                                            id="calendar-svgrepo-com_2_"
                                                            data-name="calendar-svgrepo-com (2)"
                                                            transform="translate(0 -4.432)"
                                                        >
                                                            <path
                                                                id="Path_645"
                                                                data-name="Path 645"
                                                                d="M19.41,6.838H17.029V5.274a.842.842,0,0,0-1.685,0V6.838H4.908V5.274a.842.842,0,0,0-1.685,0V6.838H.842A.842.842,0,0,0,0,7.68V23.012a.842.842,0,0,0,.842.842H19.41a.842.842,0,0,0,.842-.842V7.68A.842.842,0,0,0,19.41,6.838Zm-.842,1.685v1.872H1.685V8.523ZM1.685,22.17V12.079H18.567V22.17H1.685Z"
                                                                transform="translate(0 0)"
                                                                fill="#005eb5"
                                                            />
                                                            <path
                                                                id="Path_646"
                                                                data-name="Path 646"
                                                                d="M68.169,100.33l-4.724,4.724-1.285-1.285a.842.842,0,1,0-1.191,1.191l1.881,1.881a.842.842,0,0,0,1.191,0l5.319-5.319a.842.842,0,0,0-1.191-1.192Z"
                                                                transform="translate(-55.039 -86.698)"
                                                                fill="#005eb5"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Booking Request
                                            </NavLink>
                                            <NavLink to="/classesdetails">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19.517"
                                                        height="18.863"
                                                        viewBox="0 0 19.517 18.863"
                                                    >
                                                        <g
                                                            id="Group_5019"
                                                            data-name="Group 5019"
                                                            transform="translate(734.4 1445.869)"
                                                        >
                                                            <path
                                                                id="Path_171"
                                                                data-name="Path 171"
                                                                d="M-734.25-1431.146v-12.611a.472.472,0,0,0,.033-.084,2.244,2.244,0,0,1,2.251-1.87c.982,0,1.964-.005,2.946,0a5.023,5.023,0,0,1,2.067.474,5.3,5.3,0,0,1,1.725,1.269.737.737,0,0,0,1.174,0c.026-.027.05-.056.076-.083a5.146,5.146,0,0,1,3.715-1.659c1.006-.023,2.014-.014,3.021,0a2.185,2.185,0,0,1,1.745.881,2.7,2.7,0,0,1,.464,1.07v12.574a1.055,1.055,0,0,0-.033.1,2.252,2.252,0,0,1-2.319,1.882c-.882,0-1.764.005-2.645,0a3.786,3.786,0,0,0-2.918,1.26,2.221,2.221,0,0,1-3.387,0,3.776,3.776,0,0,0-2.9-1.258c-.919,0-1.839.009-2.758,0a2.135,2.135,0,0,1-1.855-.991A5.523,5.523,0,0,1-734.25-1431.146Zm17.716-6.287q0-2.974,0-5.949a.754.754,0,0,0-.824-.829c-.913,0-1.827,0-2.74,0a4.246,4.246,0,0,0-.708.059,3.73,3.73,0,0,0-2.163,1.219,2.171,2.171,0,0,1-1.676.75,2.256,2.256,0,0,1-1.714-.795,3.7,3.7,0,0,0-2.833-1.236h-2.721a.755.755,0,0,0-.835.836q0,5.911,0,11.822a.768.768,0,0,0,.86.853c.932,0,1.864-.01,2.8,0a5.158,5.158,0,0,1,3.827,1.705.76.76,0,0,0,1.253,0,5.152,5.152,0,0,1,3.81-1.7c.938-.016,1.876,0,2.815,0a.768.768,0,0,0,.853-.86Q-716.534-1434.5-716.534-1437.433Z"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_172"
                                                                data-name="Path 172"
                                                                d="M-555.786-1321.128c0,1.231,0,2.463,0,3.694a.749.749,0,0,1-.976.75.748.748,0,0,1-.523-.723c0-.606,0-1.213,0-1.819q0-2.823,0-5.645a.75.75,0,0,1,1.012-.738.756.756,0,0,1,.488.749Q-555.784-1322.994-555.786-1321.128Z"
                                                                transform="translate(-168.105 -114.053)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_173"
                                                                data-name="Path 173"
                                                                d="M-497.448-1355.708c.294,0,.588,0,.881,0a.746.746,0,0,1,.773.746.75.75,0,0,1-.77.753q-.7.009-1.406,0a4.026,4.026,0,0,0-1.29.2.751.751,0,0,1-1-.462.761.761,0,0,1,.554-.97A6.235,6.235,0,0,1-497.448-1355.708Z"
                                                                transform="translate(-222.242 -85.5)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_174"
                                                                data-name="Path 174"
                                                                d="M-497.586-1295.709c.432,0,.726,0,1.02,0a.746.746,0,0,1,.773.746.75.75,0,0,1-.77.753q-.7.008-1.406,0a4.032,4.032,0,0,0-1.29.2.751.751,0,0,1-1-.462.761.761,0,0,1,.554-.97A5.866,5.866,0,0,1-497.586-1295.709Z"
                                                                transform="translate(-222.242 -142.496)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_175"
                                                                data-name="Path 175"
                                                                d="M-497.566-1234.12a4.954,4.954,0,0,0-1.76.22.721.721,0,0,1-.912-.505.736.736,0,0,1,.471-.918,4.784,4.784,0,0,1,1.558-.294c.556-.009,1.112-.006,1.669,0a.744.744,0,0,1,.772.747.752.752,0,0,1-.771.752C-496.833-1234.116-497.126-1234.12-497.566-1234.12Z"
                                                                transform="translate(-222.268 -199.581)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_176"
                                                                data-name="Path 176"
                                                                d="M-669.726-1354.834c0,.495-.429.909-.854.771a9.493,9.493,0,0,0-2.843-.231.759.759,0,0,1-.776-.554.716.716,0,0,1,.6-.93,9.213,9.213,0,0,1,3.306.252.775.775,0,0,1,.549.562A1.273,1.273,0,0,1-669.726-1354.834Z"
                                                                transform="translate(-57.018 -85.412)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_177"
                                                                data-name="Path 177"
                                                                d="M-672.438-1295.718a5.64,5.64,0,0,1,2.173.29.754.754,0,0,1,.513.836.719.719,0,0,1-.9.6,6.845,6.845,0,0,0-2.243-.224c-.194,0-.388,0-.581,0a.753.753,0,0,1-.77-.753.746.746,0,0,1,.772-.747C-673.174-1295.72-672.874-1295.718-672.438-1295.718Z"
                                                                transform="translate(-57.001 -142.487)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_178"
                                                                data-name="Path 178"
                                                                d="M-672.424-1235.732a5.662,5.662,0,0,1,2.137.281.751.751,0,0,1,.45,1.085.713.713,0,0,1-.846.356,5.445,5.445,0,0,0-1.906-.222c-.294.005-.588,0-.881,0a.753.753,0,0,1-.776-.747.747.747,0,0,1,.785-.753C-673.161-1235.733-672.861-1235.732-672.424-1235.732Z"
                                                                transform="translate(-57.001 -199.471)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Classes Details
                                            </NavLink>
                                            <NavLink to="/Instructorgroupclasses">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20.5"
                                                        height="18.833"
                                                        viewBox="0 0 20.5 18.833"
                                                    >
                                                        <g
                                                            id="ic_fluent_people_team_28_regular"
                                                            transform="translate(0.25 0.25)"
                                                        >
                                                            <path
                                                                id="_-Color"
                                                                data-name="🎨-Color"
                                                                d="M14.712,9.667a1.875,1.875,0,0,1,1.875,1.875v5.208a4.584,4.584,0,0,1-9.168,0V11.542A1.875,1.875,0,0,1,9.293,9.667Zm0,1.25H9.293a.625.625,0,0,0-.625.625v5.208a3.334,3.334,0,0,0,6.668,0V11.542A.625.625,0,0,0,14.712,10.917ZM3.875,9.667H7.339a2.7,2.7,0,0,0-.681,1.25H3.875a.625.625,0,0,0-.625.625v4.374A2.5,2.5,0,0,0,6.782,18.2a5.3,5.3,0,0,0,.47,1.16A3.753,3.753,0,0,1,2,15.916V11.542A1.875,1.875,0,0,1,3.875,9.667Zm16.25,0A1.875,1.875,0,0,1,22,11.542v4.375a3.752,3.752,0,0,1-5.248,3.439l.046-.084a5.378,5.378,0,0,0,.426-1.074,2.5,2.5,0,0,0,3.526-2.28V11.542a.625.625,0,0,0-.625-.625H17.348a2.7,2.7,0,0,0-.681-1.25ZM12,3A2.917,2.917,0,1,1,9.083,5.917,2.917,2.917,0,0,1,12,3Zm6.669.833a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,18.669,3.833Zm-13.338,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,5.331,3.833ZM12,4.25a1.667,1.667,0,1,0,1.667,1.667A1.667,1.667,0,0,0,12,4.25Zm6.669.833a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,18.669,5.083Zm-13.338,0a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,5.331,5.083Z"
                                                                transform="translate(-2 -3)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.5"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Group Classes
                                            </NavLink>
                                            <NavLink to="/managesubscription">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18.295"
                                                        height="18.296"
                                                        viewBox="0 0 18.295 18.296"
                                                    >
                                                        <g
                                                            id="Group_4922"
                                                            data-name="Group 4922"
                                                            transform="translate(618.183 -295.802)"
                                                        >
                                                            <path
                                                                id="Path_656"
                                                                data-name="Path 656"
                                                                d="M-614.656,310.55h-.233c-.563,0-1.126,0-1.689,0a1.443,1.443,0,0,1-1.454-1.464q0-5.838,0-11.676a1.427,1.427,0,0,1,1.453-1.458q5.838,0,11.676,0a1.434,1.434,0,0,1,1.469,1.468c0,.556,0,1.112,0,1.668v.25c.092,0,.167.011.241.011.563,0,1.126,0,1.689,0a1.434,1.434,0,0,1,1.465,1.47q0,5.828,0,11.655a1.429,1.429,0,0,1-1.46,1.472q-5.838,0-11.676,0a1.442,1.442,0,0,1-1.461-1.458c-.005-.619,0-1.239,0-1.858A.655.655,0,0,0-614.656,310.55Zm7.328-10h-5.7c-.36,0-.4.043-.4.4v11.4c0,.347.057.405.4.405h11.4c.326,0,.4-.073.4-.393q0-5.712,0-11.424c0-.328-.062-.387-.4-.387Zm2.681-1.2c0-.089.01-.158.01-.226q0-.8,0-1.6c0-.308-.063-.373-.368-.373h-11.464c-.3,0-.373.074-.373.374q0,1.035,0,2.069,0,4.687,0,9.374c0,.318.068.388.379.388h1.6c.068,0,.136-.006.222-.01v-.288q0-4.075,0-8.149a1.448,1.448,0,0,1,1.557-1.552h8.432Z"
                                                                transform="translate(0)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                            />
                                                            <path
                                                                id="Path_657"
                                                                data-name="Path 657"
                                                                d="M-459.037,468.48c.08-.141.143-.257.212-.369a.589.589,0,0,1,.8-.228.587.587,0,0,1,.241.8q-.5.928-1.026,1.842a.571.571,0,0,1-.789.219q-.909-.49-1.807-1a.588.588,0,0,1-.232-.82.6.6,0,0,1,.823-.221c.227.118.45.245.674.368l.05-.043a6.889,6.889,0,0,0-.383-.613,2.581,2.581,0,0,0-2.738-.9,2.6,2.6,0,0,0-1.891,2.178,2.568,2.568,0,0,0,1.246,2.581.626.626,0,0,1,.176,1.006.6.6,0,0,1-.742.055,3.665,3.665,0,0,1-1.881-3.468,3.755,3.755,0,0,1,3.21-3.6,3.805,3.805,0,0,1,3.935,1.992C-459.12,468.316-459.088,468.379-459.037,468.48Z"
                                                                transform="translate(-145.323 -163.069)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Manage Subscription
                                            </NavLink>
                                            <NavLink to="/getverificationbadge">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20.145"
                                                        height="20.984"
                                                        viewBox="0 0 20.145 20.984"
                                                    >
                                                        <g
                                                            id="badge-svgrepo-com"
                                                            transform="translate(-9.879 0.25)"
                                                        >
                                                            <g
                                                                id="Group_4921"
                                                                data-name="Group 4921"
                                                                transform="translate(10.135 0)"
                                                            >
                                                                <path
                                                                    id="Path_654"
                                                                    data-name="Path 654"
                                                                    d="M29.463,11.928l-.055-.084c-.348-.533-.705-1.087-1.066-1.629.311-.47.621-.949.919-1.411l.172-.269a1.726,1.726,0,0,0,.244-1.495,1.737,1.737,0,0,0-1.1-1.05c-.34-.126-.689-.256-1.02-.382-.273-.1-.554-.21-.831-.315-.021-.432-.042-.865-.067-1.285-.013-.252-.029-.5-.042-.756A1.6,1.6,0,0,0,25,1.646a1.882,1.882,0,0,0-.5.067l-.147.038c-.6.16-1.218.323-1.826.5-.273-.34-.55-.68-.819-1.012-.155-.189-.306-.378-.462-.567a1.622,1.622,0,0,0-2.632,0l-.2.248c-.353.437-.722.89-1.075,1.344-.483-.134-.966-.265-1.365-.369l-.416-.109s-.008,0-.017,0A2.741,2.741,0,0,0,14.9,1.7,1.556,1.556,0,0,0,13.257,3.25c-.055.752-.084,1.486-.1,2.074-.668.252-1.314.5-1.927.743A1.661,1.661,0,0,0,10.209,7.1a1.69,1.69,0,0,0,.227,1.44c.357.554.739,1.138,1.125,1.721q-.6.907-1.142,1.772a1.649,1.649,0,0,0-.193,1.4,1.672,1.672,0,0,0,1,1.016l.181.071c.579.223,1.176.453,1.772.676.013.2.025.4.038.6.034.458.063.89.059,1.327a1.738,1.738,0,0,0,.5,1.239,1.612,1.612,0,0,0,1.159.479,1.9,1.9,0,0,0,.567-.088c.411-.13.844-.244,1.264-.353.2-.055.411-.109.621-.164.432.542.869,1.075,1.281,1.579a1.709,1.709,0,0,0,1.314.672,1.688,1.688,0,0,0,1.314-.676c.474-.584.877-1.083,1.272-1.587.516.143,1.041.281,1.549.416l.432.113a1.963,1.963,0,0,0,.487.063h0a1.609,1.609,0,0,0,1.621-1.591c.013-.231.025-.462.038-.7.025-.449.05-.911.067-1.369.592-.223,1.184-.453,1.763-.68l.139-.055a1.622,1.622,0,0,0,.806-2.494Zm-.848,1.1a.583.583,0,0,1-.369.336l-.139.055c-.617.239-1.255.487-1.885.726a.834.834,0,0,0-.592.8c-.017.5-.046,1.016-.076,1.516-.013.235-.025.466-.038.7a.478.478,0,0,1-.487.516h0a.787.787,0,0,1-.193-.025l-.432-.113c-.563-.147-1.142-.3-1.713-.462a.917.917,0,0,0-.252-.038.82.82,0,0,0-.655.336c-.428.542-.861,1.079-1.373,1.713a.587.587,0,0,1-.432.256.608.608,0,0,1-.441-.26c-.445-.542-.919-1.121-1.381-1.7a.815.815,0,0,0-.647-.332.976.976,0,0,0-.26.038c-.256.071-.521.143-.777.21-.432.113-.877.231-1.314.369a.547.547,0,0,1-.584-.1.606.606,0,0,1-.168-.432c0-.479-.029-.953-.059-1.415-.017-.244-.034-.5-.046-.739a.825.825,0,0,0-.575-.789c-.638-.235-1.285-.483-1.915-.726l-.181-.071a.527.527,0,0,1-.332-.315.511.511,0,0,1,.076-.437c.382-.6.789-1.239,1.213-1.877a.844.844,0,0,0,0-1c-.411-.613-.823-1.243-1.2-1.835a.572.572,0,0,1-.1-.479.556.556,0,0,1,.353-.323c.655-.26,1.352-.525,2.07-.8a.823.823,0,0,0,.567-.794c.021-.6.05-1.4.109-2.2.025-.353.168-.491.512-.491a1.612,1.612,0,0,1,.374.05c.126.034.265.071.411.109.445.118.949.252,1.457.4a1.151,1.151,0,0,0,.3.046.879.879,0,0,0,.714-.374c.369-.479.76-.957,1.134-1.423l.2-.248a.6.6,0,0,1,.437-.256.58.58,0,0,1,.432.252c.155.189.306.378.462.567.3.365.609.747.907,1.121a.84.84,0,0,0,.672.348.946.946,0,0,0,.277-.042c.651-.189,1.318-.365,1.965-.537l.147-.038A.737.737,0,0,1,25,2.779a.5.5,0,0,1,.487.533c.013.252.025.5.042.76.025.47.055.957.076,1.436a.838.838,0,0,0,.571.794c.327.122.659.248.982.369s.684.26,1.033.386a.649.649,0,0,1,.416.348.631.631,0,0,1-.122.521l-.172.269c-.323.5-.659,1.024-1,1.528a.838.838,0,0,0,0,1c.39.575.773,1.171,1.146,1.747l.055.088A.536.536,0,0,1,28.615,13.024Z"
                                                                    transform="translate(-10.135 0)"
                                                                    fill="#005eb5"
                                                                    stroke="#005eb5"
                                                                    strokeWidth="0.5"
                                                                />
                                                                <path
                                                                    id="Path_655"
                                                                    data-name="Path 655"
                                                                    d="M173.052,186.368l-3.3,3.3-1.167-1.167a.567.567,0,0,0-.8.8l1.566,1.566c.013.013.029.025.042.038a.57.57,0,0,0,.357.126.546.546,0,0,0,.4-.168l3.7-3.7a.563.563,0,1,0-.8-.794Z"
                                                                    transform="translate(-161.004 -178.382)"
                                                                    fill="#005eb5"
                                                                    stroke="#005eb5"
                                                                    strokeWidth="0.5"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                Get Verification Badge
                                            </NavLink>
                                            <NavLink to="/paymentdetails">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19.434"
                                                        height="19.434"
                                                        viewBox="0 0 19.434 19.434"
                                                    >
                                                        <g
                                                            id="Group_366"
                                                            data-name="Group 366"
                                                            transform="translate(-782.6 1488.4)"
                                                        >
                                                            <path
                                                                id="Path_168"
                                                                data-name="Path 168"
                                                                d="M782.75-1473.227v-11.622a1.407,1.407,0,0,0,.034-.142,3.759,3.759,0,0,1,2.861-3.148c.18-.043.362-.074.543-.111h12.332a.636.636,0,0,0,.1.033,3.725,3.725,0,0,1,3.116,2.7c.061.219.1.444.144.667v1.271a.569.569,0,0,0-.034.065.752.752,0,0,1-.84.525.751.751,0,0,1-.621-.774c0-.224,0-.448,0-.672a2.248,2.248,0,0,0-2.323-2.32h-5.9c-1.887,0-3.774-.009-5.661,0a2.241,2.241,0,0,0-1.975,3.316,2.187,2.187,0,0,0,2.049,1.165q5.763,0,11.527,0a3.739,3.739,0,0,1,3.69,2.928c.036.156.061.314.091.471v6.353c-.012.053-.027.106-.036.159a3.693,3.693,0,0,1-2.659,3.088c-.216.071-.445.1-.668.153h-11.7a.585.585,0,0,0-.1-.032,4.484,4.484,0,0,1-3.8-3.259C782.841-1472.676,782.8-1472.954,782.75-1473.227Zm1.5-8.287v.134q0,3.9,0,7.809a2.73,2.73,0,0,0,.055.537,2.983,2.983,0,0,0,2.971,2.423q5.408,0,10.816,0a2.246,2.246,0,0,0,2.3-2.307q0-2.756,0-5.511a2.25,2.25,0,0,0-2.355-2.345q-5.772,0-11.545,0a4.608,4.608,0,0,1-.868-.1A3.585,3.585,0,0,1,784.245-1481.514Z"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_169"
                                                                data-name="Path 169"
                                                                d="M849.4-1426.738h-5.77a.739.739,0,0,1-.776-.518.741.741,0,0,1,.666-.974c.05,0,.1,0,.149,0h11.466a.769.769,0,0,1,.785.484.744.744,0,0,1-.694,1.008c-.622.008-1.245,0-1.867,0Z"
                                                                transform="translate(-57.073 -57.026)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_170"
                                                                data-name="Path 170"
                                                                d="M1070.209-1253.13a.921.921,0,0,1-.937-.932.923.923,0,0,1,.952-.934.936.936,0,0,1,.912.941A.936.936,0,0,1,1070.209-1253.13Z"
                                                                transform="translate(-272.244 -221.63)"
                                                                fill="#005eb5"
                                                                fillRule="evenodd"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Payment Details
                                            </NavLink>
                                            <NavLink to="/chats">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19.618"
                                                        height="19.618"
                                                        viewBox="0 0 19.618 19.618"
                                                    >
                                                        <g
                                                            id="Group_367"
                                                            data-name="Group 367"
                                                            transform="translate(383.403 -2344.468)"
                                                        >
                                                            <path
                                                                id="Path_188"
                                                                data-name="Path 188"
                                                                d="M-382.347,2363.936h-.3a.893.893,0,0,1-.6-.6v-9.659c.054-.4.091-.8.163-1.193a9.662,9.662,0,0,1,7.907-7.709c.376-.067.757-.1,1.136-.153h1.17c.347.048.7.088,1.04.147a9.689,9.689,0,0,1,7.752,7.752c.061.358.1.719.15,1.079v1.17a1.061,1.061,0,0,0-.032.146,9.646,9.646,0,0,1-1.491,4.515,9.325,9.325,0,0,1-6.471,4.359c-.376.067-.758.1-1.137.149h-1.17a.774.774,0,0,0-.126-.03,9.569,9.569,0,0,1-3.558-.966,3.346,3.346,0,0,0-3.912.635A3.909,3.909,0,0,1-382.347,2363.936Zm.616-2.3c.037-.016.06-.023.081-.034a4.818,4.818,0,0,1,4.443,0,7.749,7.749,0,0,0,2.926.792,7.786,7.786,0,0,0,6.8-2.8,8.04,8.04,0,0,0,1.78-7.383,8.1,8.1,0,0,0-9.523-5.909,8.059,8.059,0,0,0-6.5,7.613c-.082,2.556-.018,5.117-.018,7.675A.321.321,0,0,0-381.732,2361.635Z"
                                                                transform="translate(0 0)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_189"
                                                                data-name="Path 189"
                                                                d="M-144.779,2518.794a.943.943,0,0,1,.936-.934.947.947,0,0,1,.948.923.935.935,0,0,1-.947.959A.931.931,0,0,1-144.779,2518.794Z"
                                                                transform="translate(-226.476 -164.526)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_190"
                                                                data-name="Path 190"
                                                                d="M-208.327,2517.862a.945.945,0,0,1,.942.929.935.935,0,0,1-.953.953.931.931,0,0,1-.931-.955A.943.943,0,0,1-208.327,2517.862Z"
                                                                transform="translate(-165.229 -164.527)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_191"
                                                                data-name="Path 191"
                                                                d="M-271.822,2518.8a.947.947,0,0,1-.92.951.933.933,0,0,1-.962-.943.931.931,0,0,1,.945-.942A.946.946,0,0,1-271.822,2518.8Z"
                                                                transform="translate(-104.037 -164.53)"
                                                                fill="#005eb5"
                                                                stroke="#005eb5"
                                                                strokeWidth="0.3"
                                                                fillRule="evenodd"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Chats
                                            </NavLink>
                                            <NavLink to="/ratingsreviews">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="19.488"
                                                        height="18.738"
                                                        viewBox="0 0 19.488 18.738"
                                                    >
                                                        <path
                                                            id="bookmark-favorite-heart-like-rating-star-svgrepo-com"
                                                            d="M9.388,2.355a1.492,1.492,0,0,1,2.713,0l2.1,4.56,4.971.591a1.5,1.5,0,0,1,.838,2.588L16.331,13.5l.976,4.925a1.5,1.5,0,0,1-2.195,1.6l-4.368-2.453L6.376,20.028a1.5,1.5,0,0,1-2.195-1.6L5.157,13.5,1.481,10.094A1.5,1.5,0,0,1,2.32,7.506l4.971-.591Zm1.7,1.368a.375.375,0,0,0-.681,0L8.647,7.542a1.494,1.494,0,0,1-1.18.86L3.3,8.9a.375.375,0,0,0-.211.647L6.171,12.4A1.5,1.5,0,0,1,6.622,13.8L5.8,17.923a.375.375,0,0,0,.551.4l3.659-2.054a1.49,1.49,0,0,1,1.459,0l3.659,2.054a.375.375,0,0,0,.551-.4L14.866,13.8a1.5,1.5,0,0,1,.451-1.392L18.4,9.545a.375.375,0,0,0-.211-.647l-4.166-.5a1.494,1.494,0,0,1-1.181-.86Z"
                                                            transform="translate(-1 -1.484)"
                                                            fill="#005eb5"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                Ratings & Reviews
                                            </NavLink>
                                            <NavLink to="/myblogs">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18.925"
                                                        height="16.855"
                                                        viewBox="0 0 18.925 16.855"
                                                    >
                                                        <path
                                                            id="Path_619"
                                                            data-name="Path 619"
                                                            d="M768.75,374.3c.042-.194.076-.39.129-.581a3.613,3.613,0,0,1,3.449-2.68c2.043-.02,4.086-.007,6.129,0a.728.728,0,1,1-.014,1.453q-3,0-6,0a2.184,2.184,0,0,0-2.216,1.9,2.257,2.257,0,0,0-.019.344q0,4.283,0,8.566a.742.742,0,0,0,1.29.579c.352-.325.716-.636,1.068-.961a.921.921,0,0,1,.66-.249q3.783,0,7.566,0a2.16,2.16,0,0,0,2.164-1.7,2.3,2.3,0,0,0,.057-.5c.007-.521,0-1.043,0-1.564a.728.728,0,1,1,1.453-.011c-.005.691.022,1.385-.041,2.071a3.6,3.6,0,0,1-3.03,3.117,5.319,5.319,0,0,1-.688.043q-3.529,0-7.057,0a.573.573,0,0,0-.436.164c-.285.272-.578.536-.882.786a2.18,2.18,0,0,1-3.545-1.29.729.729,0,0,0-.034-.1Z"
                                                            transform="translate(-768.6 -368.895)"
                                                            fill="#005eb5"
                                                            stroke="#005eb5"
                                                            strokeWidth="0.3"
                                                            fillRule="evenodd"
                                                        />
                                                        <path
                                                            id="Path_620"
                                                            data-name="Path 620"
                                                            d="M942.551,332.678a2.651,2.651,0,0,1-.16.534,3.224,3.224,0,0,1-.5.75q-2.641,2.67-5.307,5.315a5.551,5.551,0,0,1-3.949,1.664.729.729,0,0,1-.8-.814,5.662,5.662,0,0,1,1.727-4q2.593-2.59,5.181-5.183a2.14,2.14,0,0,1,2.242-.618,2.092,2.092,0,0,1,1.536,1.76c0,.016.018.03.028.044Zm-9.184,6.73c.059-.009.088-.011.116-.018a4.087,4.087,0,0,0,2.033-1.1q2.673-2.661,5.335-5.332a.723.723,0,0,0,.034-1.055.732.732,0,0,0-1.068.034q-2.662,2.66-5.32,5.322a4.107,4.107,0,0,0-1.027,1.732C933.431,339.121,933.4,339.255,933.367,339.408Z"
                                                            transform="translate(-923.776 -330.075)"
                                                            fill="#005eb5"
                                                            stroke="#005eb5"
                                                            strokeWidth="0.3"
                                                            fillRule="evenodd"
                                                        />
                                                        <path
                                                            id="Path_621"
                                                            data-name="Path 621"
                                                            d="M830.57,462.5c-.357,0-.714,0-1.071,0a.726.726,0,1,1-.019-1.451q1.089-.014,2.179,0a.726.726,0,1,1-.017,1.452H830.57Z"
                                                            transform="translate(-825.69 -454.54)"
                                                            fill="#005eb5"
                                                            fillRule="evenodd"
                                                        />
                                                        <path
                                                            id="Path_622"
                                                            data-name="Path 622"
                                                            d="M830.564,522.518c-.351,0-.7,0-1.053,0a.727.727,0,1,1-.008-1.452q1.062-.009,2.125,0a.728.728,0,1,1-.01,1.453C831.266,522.52,830.915,522.518,830.564,522.518Z"
                                                            transform="translate(-825.69 -511.651)"
                                                            fill="#005eb5"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                My Blogs
                                            </NavLink>

                                            <NavLink to="/">
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16.992"
                                                        height="16.993"
                                                        viewBox="0 0 16.992 16.993"
                                                    >
                                                        <g
                                                            id="Group_494"
                                                            data-name="Group 494"
                                                            transform="translate(0.25 0.25)"
                                                        >
                                                            <path
                                                                id="Path_632"
                                                                data-name="Path 632"
                                                                d="M39.873,654.75c-.291.04-.583.072-.873.122a7.99,7.99,0,0,0-3.986,1.929.646.646,0,1,0,.849.968,6.641,6.641,0,0,1,2.011-1.25,6.77,6.77,0,0,1,5.57.24,6.605,6.605,0,0,1,3.715,4.367,7.014,7.014,0,0,1-9.114,8.414,6.5,6.5,0,0,1-2.152-1.292.687.687,0,0,0-.613-.213.645.645,0,0,0-.3,1.13,8.2,8.2,0,0,0,2.7,1.6,8.016,8.016,0,0,0,2.2.457.807.807,0,0,1,.123.027h1.063c.2-.025.393-.046.588-.075a8.02,8.02,0,0,0,4.168-1.94,8.161,8.161,0,0,0,2.758-4.762c.051-.273.081-.55.121-.825v-1.16c-.01-.058-.021-.115-.029-.173-.038-.292-.059-.587-.113-.876a8.244,8.244,0,0,0-6.764-6.554c-.316-.055-.636-.086-.954-.129Z"
                                                                transform="translate(-32.206 -654.75)"
                                                                fill="#c1302a"
                                                                stroke="#c1302a"
                                                                strokeWidth="0.5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_633"
                                                                data-name="Path 633"
                                                                d="M329.439,766.678a2.327,2.327,0,0,0,.142.472,2.928,2.928,0,0,0,.443.663c.7.713,1.417,1.406,2.13,2.1a.634.634,0,0,0,.738.146.642.642,0,0,0,.377-.621.729.729,0,0,0-.253-.486Q332,767.966,331,766.97A.654.654,0,0,1,331,765.9q1.026-1,2.053-2a.634.634,0,0,0,.153-.75.6.6,0,0,0-.622-.366.809.809,0,0,0-.413.186c-.728.69-1.445,1.393-2.161,2.1a1.851,1.851,0,0,0-.548,1.068.215.215,0,0,1-.026.056Z"
                                                                transform="translate(-329.439 -758.141)"
                                                                fill="#c1302a"
                                                                stroke="#c1302a"
                                                                strokeWidth="0.5"
                                                                fillRule="evenodd"
                                                            />
                                                            <path
                                                                id="Path_634"
                                                                data-name="Path 634"
                                                                d="M131.327,831.7q-2.173,0-4.346,0a.638.638,0,0,0-.63.845.628.628,0,0,0,.561.439,1.1,1.1,0,0,0,.129,0H135.6a.646.646,0,0,0,.7-.453.634.634,0,0,0-.628-.834c-.612,0-1.223,0-1.835,0Z"
                                                                transform="translate(-123.772 -824.099)"
                                                                fill="#c1302a"
                                                                stroke="#c1302a"
                                                                strokeWidth="0.5"
                                                                fillRule="evenodd"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                Log out
                                            </NavLink>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Navbar>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
