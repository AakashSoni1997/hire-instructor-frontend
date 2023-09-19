import React, { useState, useEffect, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetBlogs,
  GetBlogsCategory,
} from "../../redux/actions/HomePageActions";
import { baseUrlPostGres } from "../../redux/constant";
import moment from "moment";
import { Pagination } from "../../components/Hooks/Pagination";

let PageSize = 9;

const Blog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  const blogs = useSelector((state) => state.home?.get_blogs);
  const blogsCategory = useSelector((state) => state.home?.get_blogs_category);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setItems(blogs.slice(firstPageIndex, lastPageIndex));
  }, [currentPage]);

  useEffect(() => {
    setItems(blogs);
  }, [blogs]);

  const filterItem = (categItem) => {
    const upadtedItems = blogs.filter((curElem) => {
      return curElem.blog_category?.blog_category === categItem;
    });

    setItems(upadtedItems);
  };

  useEffect(() => {
    dispatch(GetBlogs({ page_no: currentPage }));
    dispatch(GetBlogsCategory());
  }, [dispatch, currentPage]);

  return (
    <>
      <div id="footer-bottom" className="blog">
        <Header />
        <div className="instru-bg-image">
          <h1>Blogs</h1>
          <p>
            Home / <span>Blogs</span>
          </p>
        </div>
        <div className="easyfind-box">
          <div className="easy-box-ab">
            <div className="container">
              <div className="easy-box-content">
                <div className="menu-blog">
                  <div
                    className="btn becomaninstructor"
                    onClick={() => setItems(blogs)}
                  >
                    All
                  </div>
                  {blogsCategory?.map((elem, index) => (
                    <div
                      key={elem?.id}
                      className="btn becomaninstructor"
                      onClick={() => filterItem(elem.blog_category)}
                    >
                      {elem.blog_category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-section">
          <div className="container">
            <div className="row g-5">
              {items?.map((elem, index) => (
                <div
                  key={elem?.id}
                  className="col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="bolg-card-main">
                    <div className="image-box">
                      <img
                        src={`${baseUrlPostGres()}${elem?.blog_image}`}
                        alt=""
                      />
                    </div>
                    <div className="date-section">
                      <div className="date">
                        <Link to="#!" className="btn becomaninstructor">
                          {moment(elem.created_at).format("DD MMM'YY")}
                        </Link>
                      </div>
                      <div className="categ">
                        <Link to="#!" className="btn becomaninstructor">
                          <span>{elem?.blog_category?.blog_category}</span>
                        </Link>
                      </div>
                    </div>
                    <h1>{elem?.blog_title}</h1>
                    <p className="name-comment-section">
                      <span className="name-customer">Rosy</span>
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
                            fill="#005eb5"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_142"
                            data-name="Path 142"
                            d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z"
                            transform="translate(0 -110.402)"
                            fill="#005eb5"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                      <span className="like-number">
                        {elem?.bloglike_count}
                      </span>
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
                            fill="#005eb5"
                          />
                        </g>
                      </svg>
                      <span>{elem?.blog_comment_count}</span>
                    </p>

                    <p className="desceiption-button">
                      {elem?.blog_description?.split("").splice(0, 140)}
                      {elem?.blog_description?.length > 125 && (
                        <Link className="btn" to={`/blogdetail/${elem?.id}`}>
                          READ MORE
                        </Link>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={blogs.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
