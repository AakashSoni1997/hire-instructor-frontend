import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs, EffectFade } from "swiper";
import { baseUrlPostGres } from "../../redux/constant";
import { GetTestimonials } from "../../redux/actions/HomePageActions";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./CustomerSlider.scss";

const CustomerSlider = () => {
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const testimonials = useSelector((state) => state.home?.get_testimonial)

    useEffect(() => {
        dispatch(GetTestimonials())
    }, [dispatch]);

    return (
        <>
            <div className="slider-main-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 overFadeTest">
                            <div className="slider-top-content">
                                <h1>
                                    What our Customers <span>Say!</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    vestibulum egestas.
                                </p>
                            </div>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={1}
                                watchSlidesProgress={false}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: ".swiperPrevArrow_2",
                                    nextEl: ".swiperNextArrow_2",
                                }}
                                loop={true}
                                effect="fade"
                                rewind={true}
                                fadeEffect={{ crossFade: true }}
                                modules={[FreeMode, Navigation, EffectFade, Autoplay, Thumbs]}
                                className="mySwiper"
                            >
                                {testimonials &&
                                    testimonials?.map((ele, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="top-arrow">
                                                <svg
                                                    id="Icon_ionic-ios-quote"
                                                    data-name="Icon ionic-ios-quote"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="107.371"
                                                    height="107.405"
                                                    viewBox="0 0 107.371 107.405"
                                                >
                                                    <path
                                                        id="Path_111"
                                                        data-name="Path 111"
                                                        d="M17.152,114.155h21.81A16.153,16.153,0,0,0,55.067,98.049V55.1A16.153,16.153,0,0,0,38.961,38.995H25.976a2.7,2.7,0,0,1-2.684-2.886,40.927,40.927,0,0,1,10.5-24.863,2.686,2.686,0,0,0-1.98-4.5H18.427a2.607,2.607,0,0,0-2.114,1.04C13.83,11.011,6.75,21.748,6.75,39.3v64.423a10.171,10.171,0,0,0,10.4,10.435Z"
                                                        transform="translate(52.304 -6.75)"
                                                        fill="rgba(0,94,181,0.1)"
                                                    />
                                                    <path
                                                        id="Path_112"
                                                        data-name="Path 112"
                                                        d="M29.527,114.155h21.81A16.153,16.153,0,0,0,67.442,98.049V55.1A16.153,16.153,0,0,0,51.336,38.995H38.351a2.7,2.7,0,0,1-2.684-2.886,40.927,40.927,0,0,1,10.5-24.863,2.686,2.686,0,0,0-1.98-4.5H30.8a2.607,2.607,0,0,0-2.114,1.04C26.2,11.011,19.125,21.748,19.125,39.3v64.423a10.171,10.171,0,0,0,10.4,10.435Z"
                                                        transform="translate(-19.125 -6.75)"
                                                        fill="rgba(0,94,181,0.1)"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="client-logo">
                                                <img src="images/customer-1.jpg" alt="" />
                                            </div>
                                            <h3>{ele.review_name}</h3>
                                            <h5>{ele.type}</h5>
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="15.217"
                                                    viewBox="0 0 16 15.217"
                                                >
                                                    <path
                                                        id="Icon_metro-star-full"
                                                        data-name="Icon metro-star-full"
                                                        d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                                        transform="translate(-2.571 -2.683)"
                                                        fill="#fed756"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="15.217"
                                                    viewBox="0 0 16 15.217"
                                                >
                                                    <path
                                                        id="Icon_metro-star-full"
                                                        data-name="Icon metro-star-full"
                                                        d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                                        transform="translate(-2.571 -2.683)"
                                                        fill="#fed756"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="15.217"
                                                    viewBox="0 0 16 15.217"
                                                >
                                                    <path
                                                        id="Icon_metro-star-full"
                                                        data-name="Icon metro-star-full"
                                                        d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                                        transform="translate(-2.571 -2.683)"
                                                        fill="#fed756"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="15.217"
                                                    viewBox="0 0 16 15.217"
                                                >
                                                    <path
                                                        id="Icon_metro-star-full"
                                                        data-name="Icon metro-star-full"
                                                        d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                                        transform="translate(-2.571 -2.683)"
                                                        fill="#fed756"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="15.217"
                                                    viewBox="0 0 16 15.217"
                                                >
                                                    <path
                                                        id="Icon_metro-star-full"
                                                        data-name="Icon metro-star-full"
                                                        d="M18.571,8.5l-5.528-.8L10.571,2.683,8.1,7.692l-5.528.8,4,3.9L5.626,17.9l4.944-2.6,4.944,2.6-.944-5.505,4-3.9Z"
                                                        transform="translate(-2.571 -2.683)"
                                                        fill="#dcdcdc"
                                                    />
                                                </svg>
                                            </p>
                                            <p>{ele.description}</p>
                                            <div className="bottam-arrow">
                                                <svg
                                                    id="Icon_ionic-ios-quote"
                                                    data-name="Icon ionic-ios-quote"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="107.371"
                                                    height="107.405"
                                                    viewBox="0 0 107.371 107.405"
                                                >
                                                    <path
                                                        id="Path_111"
                                                        data-name="Path 111"
                                                        d="M44.665,6.75H22.856A16.153,16.153,0,0,0,6.75,22.856V65.8A16.153,16.153,0,0,0,22.856,81.91H35.841A2.7,2.7,0,0,1,38.525,84.8a40.927,40.927,0,0,1-10.5,24.863,2.686,2.686,0,0,0,1.98,4.5H43.39a2.607,2.607,0,0,0,2.114-1.04c2.483-3.221,9.563-13.958,9.563-31.507V17.185A10.171,10.171,0,0,0,44.665,6.75Z"
                                                        transform="translate(-6.75 -6.75)"
                                                        fill="rgba(0,94,181,0.1)"
                                                    />
                                                    <path
                                                        id="Path_112"
                                                        data-name="Path 112"
                                                        d="M57.04,6.75H35.231A16.153,16.153,0,0,0,19.125,22.856V65.8A16.153,16.153,0,0,0,35.231,81.91H48.216A2.7,2.7,0,0,1,50.9,84.8a40.927,40.927,0,0,1-10.5,24.863,2.686,2.686,0,0,0,1.98,4.5H55.765a2.607,2.607,0,0,0,2.114-1.04c2.483-3.221,9.563-13.958,9.563-31.507V17.185A10.171,10.171,0,0,0,57.04,6.75Z"
                                                        transform="translate(39.929 -6.75)"
                                                        fill="rgba(0,94,181,0.1)"
                                                    />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                        <div className="col-12 col-md-6 position-relative h-100">
                            {testimonials && (
                                <Swiper
                                    spaceBetween={15}
                                    centeredSlides={true}
                                    navigation={{
                                        prevEl: ".swiperPrevArrow",
                                        nextEl: ".swiperNextArrow",
                                    }}
                                    watchSlidesProgress={true}
                                    slidesPerView={3}
                                    thumbs={{
                                        swiper:
                                            thumbsSwiper && !thumbsSwiper.destroyed
                                                ? thumbsSwiper
                                                : null,
                                    }}
                                    modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                                    className="mySwiper2"
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                >
                                    {testimonials?.map((ele, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={`${baseUrlPostGres()}${ele.image}`} alt="" />
                                        </SwiperSlide>
                                    ))}

                                    {/* <SwiperSlide>
                    <img src={ele.image2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ele.image} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ele.image} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ele.image} alt="" />
                  </SwiperSlide> */}
                                </Swiper>
                            )}

                            <div className="customArrow">
                                <div className="swiperPrevArrow d-none d-md-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15.186"
                                        height="9.383"
                                        viewBox="0 0 15.186 9.383"
                                    >
                                        <path
                                            id="Icon_metro-chevron-left"
                                            data-name="Icon metro-chevron-left"
                                            d="M9.383,13.395,7.593,15.186,0,7.593,7.593,0,9.383,1.791l-5.8,5.8Z"
                                            transform="translate(15.186) rotate(90)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="swiperNextArrow d-none d-md-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15.186"
                                        height="9.383"
                                        viewBox="0 0 15.186 9.383"
                                    >
                                        <path
                                            id="Icon_metro-chevron-left"
                                            data-name="Icon metro-chevron-left"
                                            d="M9.383,1.791,7.593,0,0,7.593l7.593,7.593,1.791-1.791-5.8-5.8Z"
                                            transform="translate(0 9.383) rotate(-90)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="swiperPrevArrow_2 d-md-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15.186"
                                        height="9.383"
                                        viewBox="0 0 15.186 9.383"
                                    >
                                        <path
                                            id="Icon_metro-chevron-left"
                                            data-name="Icon metro-chevron-left"
                                            d="M9.383,13.395,7.593,15.186,0,7.593,7.593,0,9.383,1.791l-5.8,5.8Z"
                                            transform="translate(15.186) rotate(90)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="swiperNextArrow_2 d-md-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15.186"
                                        height="9.383"
                                        viewBox="0 0 15.186 9.383"
                                    >
                                        <path
                                            id="Icon_metro-chevron-left"
                                            data-name="Icon metro-chevron-left"
                                            d="M9.383,1.791,7.593,0,0,7.593l7.593,7.593,1.791-1.791-5.8-5.8Z"
                                            transform="translate(0 9.383) rotate(-90)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CustomerSlider;
