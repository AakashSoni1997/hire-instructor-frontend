import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ReactSelect from "react-select";
import "../../style.scss";
import axios from "axios";
import { baseUrlPostGres } from "../../redux/constant";
import { apiHeader } from "../../redux/actions/ApiHeader";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../redux/actions/HomePageActions";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Sort by : A-Z", label: "Sort by : A-Z" },
  { value: "Sort by : Z-A", label: "Sort by : Z-A" },
];

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  let [category, setCategory] = useState([]);

  const categoryList = useSelector((state) => state.home?.get_category);

  useEffect(() => {
    setCategory(categoryList);
  }, [categoryList]);

  useEffect(() => {
    dispatch(GetCategory());
  }, [dispatch]);

  let arr1 = [1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 55];
  let arr2 = [2, 7, 10, 15, 18, 23, 26, 31, 34, 39, 42, 47, 50];
  let arr3 = [3, 6, 11, 14, 19, 22, 27, 30, 35, 38, 43, 46, 51];
  let arr4 = [4, 5, 12, 13, 20, 21, 28, 29, 36, 37, 44, 45, 52];

  const handleClick = () => {
    navigate("/groupclasses");
  };

  useEffect(() => {
    let reverseArray2 = category?.reverse();
      setCategory([...reverseArray2]);
  }, [selectedOption]);

  return (
    <>
      <ToastContainer />
      <section id="footer-bottom" className="courses-page">
        <Header />

        <div className="instru-bg-image">
          <h1>Courses</h1>
          <p>
            Home / <span>Courses</span>
          </p>
        </div>

        <div className="easyfind-box">
          <div className="easy-box-ab">
            <div className="container">
              <div className="easy-box-content">
                <h1>Easy Find</h1>
                <div className="input-content-easy">
                  <div className="easy-box-1">
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <div className="input-group-prepend">
                        <button className="btn" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.132"
                            height="16.132"
                            viewBox="0 0 16.132 16.132"
                          >
                            <g
                              id="Icon_feather-search"
                              data-name="Icon feather-search"
                              transform="translate(-3 -3)"
                            >
                              <path
                                id="Path_144"
                                data-name="Path 144"
                                d="M10.26,3A7.26,7.26,0,1,1,5.126,5.126,7.212,7.212,0,0,1,10.26,3Zm0,12.906A5.646,5.646,0,1,0,4.613,10.26,5.653,5.653,0,0,0,10.26,15.906Z"
                                fill="#828282"
                              />
                              <path
                                id="Path_145"
                                data-name="Path 145"
                                d="M27.79,28.6a.8.8,0,0,1-.57-.236l-3.509-3.509a.807.807,0,0,1,1.141-1.141l3.509,3.509a.807.807,0,0,1-.57,1.377Z"
                                transform="translate(-9.465 -9.465)"
                                fill="#828282"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="easy-box-1 dropdown-select">
                    <div className="App">
                      <ReactSelect
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Sort by : A-Z"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-section-mani">
          <div className="container">
            <div className="multi-box-section row g-5">
              {category &&
                category.map((ele, index) => {
                  return (
                    <>
                      {ele.status === 1 && (
                        <div
                        key={index}
                          className="col-sm-6 col-lg-3 col-12 icon-box-colour"
                          onClick={handleClick}
                        >
                          <div className="box-card-courses">
                            <div
                              className={
                                arr1.includes(index + 1)
                                  ? "icon-box"
                                  : arr2.includes(index + 1)
                                  ? "icon-box bus"
                                  : arr3.includes(index + 1)
                                  ? "icon-box dat"
                                  : arr4.includes(index + 1)
                                  ? "icon-box dev"
                                  : "icon-box"
                              }
                              id={index + 1}
                            >
                              <img
                                src={`${baseUrlPostGres()}${
                                  ele.category_image
                                }`}
                                alt=""
                              />
                            </div>
                            <h3>{ele.category_name}</h3>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Courses;
