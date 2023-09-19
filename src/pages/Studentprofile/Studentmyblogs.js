import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Studentsidebar from "../../components/Studentsidebar/Studentsidebar";
import { Link } from "react-router-dom";
import '../Instructorprofile/Instructorprofile.scss';



const Studentmyblogs = () => {
    return (
        <>
            <div id="footer-bottom" className='instructor-profile'>
                <Header />
                <div className="instru-bg-image">
                    <h1>My Blogs</h1>
                    <p>Home / <span>My Blogs</span></p>
                </div>

            <div className='myprofile-section classesdetails-page blog-page-add'>
                <div className='container'>
                    <div className='row gx-5'>
                       <div className='col-md-12 col-lg-5 col-xl-4'>
                       <Studentsidebar />
                        </div>

                        <div className='col-md-12 col-lg-7 col-xl-8'>
                        <div className='profile-top-heading addnewblog-section'>
                           <div>
                           <h2>My Blogs</h2>
                           </div>
                           <div className='addnewblog'>
                        <Link className="btn" to='/studentaddnewblog'>Add New Blog</Link>
                        </div>
                        </div>
                        
                        <div className='blog-top-content'>
                            <p>You don't have any Blog yet, click on "Add New Blog"
                                and create Blog.</p>
                        </div>
                    <div className="blog-section">

                                <div className="bolg-card-main">
                                    <div className='editdelete'>
                                    <Link className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.742" height="15.742" viewBox="0 0 15.742 15.742">
                                            <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,16.959v3.279H7.779l9.671-9.671L14.171,7.288ZM19.986,8.031a.871.871,0,0,0,0-1.233L17.94,4.752a.871.871,0,0,0-1.233,0l-1.6,1.6,3.279,3.279Z" transform="translate(-4.5 -4.496)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    <Link className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="15.606" viewBox="0 0 12.138 15.606">
                                            <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M8.367,18.372A1.739,1.739,0,0,0,10.1,20.106h6.936a1.739,1.739,0,0,0,1.734-1.734V7.968H8.367ZM10.5,12.2l1.222-1.222,1.847,1.838,1.838-1.838L16.629,12.2l-1.838,1.838,1.838,1.838L15.407,17.1l-1.838-1.838L11.731,17.1l-1.222-1.222,1.838-1.838Zm6.1-6.832L15.736,4.5H11.4l-.867.867H7.5V7.1H19.638V5.367Z" transform="translate(-7.5 -4.5)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    </div>
                                    <div className="image-box">
                                        <img src="images/blog-image8.png" alt="" />
                                    </div>
                                    <div className="date-section">
                                        <div className="date">
                                            <Link className="btn">26 Sept'22</Link>
                                        </div>
                                        <div className="categ">
                                            <Link className="btn">Technology</Link>
                                        </div>
                                    </div>
                                    <h2>Ellente non pretium nulla, sed venenatis fedfa...</h2>
                                    <p className="name-comment-section"><span className="name-customer">By Remy Jackson</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.535" height="11.268" viewBox="0 0 12.535 11.268">
                                            <g id="Group_221" data-name="Group 221" transform="translate(-1022.787 -658)">
                                                <path id="Path_141" data-name="Path 141" d="M1108.784,661.66h3.244a1.214,1.214,0,0,1,1.269,1.261,3.506,3.506,0,0,1-.338,1.631c-.573,1.237-1.114,2.488-1.668,3.734a1.539,1.539,0,0,1-1.513.98c-1.209,0-2.418,0-3.627,0a1.958,1.958,0,0,1-1.473-.612q-.3-.306-.6-.6a.427.427,0,0,1-.135-.327c0-1.512,0-3.025.006-4.537a.428.428,0,0,1,.106-.288,20.475,20.475,0,0,0,2.776-3.444c.217-.3.438-.6.647-.908a1.075,1.075,0,0,1,1.151-.527,1.182,1.182,0,0,1,.92.908,1.4,1.4,0,0,1-.064.961c-.218.539-.433,1.079-.648,1.619C1108.819,661.555,1108.805,661.6,1108.784,661.66Z" transform="translate(-77.977)" fill="#005eb5" fill-rule="evenodd" />
                                                <path id="Path_142" data-name="Path 142" d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z" transform="translate(0 -110.402)" fill="#005eb5" fill-rule="evenodd" />
                                            </g>
                                        </svg>
                                        <span className="like-number">121</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11.469" height="11.268" viewBox="0 0 11.469 11.268">
                                            <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-8.177 -3.375)">
                                                <path id="Path_143" data-name="Path 143" d="M18.558,12.367a.8.8,0,0,1,.109-.4,1.11,1.11,0,0,1,.069-.1,5.345,5.345,0,0,0,.91-2.979,5.611,5.611,0,0,0-5.729-5.508A5.69,5.69,0,0,0,8.3,7.759a5.3,5.3,0,0,0-.122,1.128,5.6,5.6,0,0,0,5.64,5.578,6.793,6.793,0,0,0,1.557-.254c.373-.1.742-.237.838-.274a.872.872,0,0,1,.307-.056.858.858,0,0,1,.333.066l1.87.663a.446.446,0,0,0,.129.033.263.263,0,0,0,.264-.264.424.424,0,0,0-.016-.089Z" fill="#005eb5" />
                                            </g>
                                        </svg> <span>53</span>
                                    </p>

                                    <p className="desceiption-button">Lorem ipsum dolor sit amet, consectetur adipiscing lit ellente non pretium nulla, sed venenatis fels. Fue pat tortor quis lvtis dapibus. Consectetur adipiscing lit <Link className="btn">READ MORE</Link></p>
                                </div>

                                <div className="bolg-card-main">
                                <div className='editdelete'>
                                    <Link className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.742" height="15.742" viewBox="0 0 15.742 15.742">
                                            <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,16.959v3.279H7.779l9.671-9.671L14.171,7.288ZM19.986,8.031a.871.871,0,0,0,0-1.233L17.94,4.752a.871.871,0,0,0-1.233,0l-1.6,1.6,3.279,3.279Z" transform="translate(-4.5 -4.496)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    <Link className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="15.606" viewBox="0 0 12.138 15.606">
                                            <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M8.367,18.372A1.739,1.739,0,0,0,10.1,20.106h6.936a1.739,1.739,0,0,0,1.734-1.734V7.968H8.367ZM10.5,12.2l1.222-1.222,1.847,1.838,1.838-1.838L16.629,12.2l-1.838,1.838,1.838,1.838L15.407,17.1l-1.838-1.838L11.731,17.1l-1.222-1.222,1.838-1.838Zm6.1-6.832L15.736,4.5H11.4l-.867.867H7.5V7.1H19.638V5.367Z" transform="translate(-7.5 -4.5)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    </div>
                                    <div className="image-box">
                                        <img src="images/blog-image7.png" alt="" />
                                    </div>
                                    <div className="date-section">
                                        <div className="date">
                                            <Link className="btn">26 Sept'22</Link>
                                        </div>
                                        <div className="categ">
                                            <Link className="btn">Education</Link>
                                        </div>
                                    </div>
                                    <h2>Venenatis fue volutpat tortor quis?</h2>
                                    <p className="name-comment-section"><span className="name-customer">By Remy Jackson</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.535" height="11.268" viewBox="0 0 12.535 11.268">
                                            <g id="Group_221" data-name="Group 221" transform="translate(-1022.787 -658)">
                                                <path id="Path_141" data-name="Path 141" d="M1108.784,661.66h3.244a1.214,1.214,0,0,1,1.269,1.261,3.506,3.506,0,0,1-.338,1.631c-.573,1.237-1.114,2.488-1.668,3.734a1.539,1.539,0,0,1-1.513.98c-1.209,0-2.418,0-3.627,0a1.958,1.958,0,0,1-1.473-.612q-.3-.306-.6-.6a.427.427,0,0,1-.135-.327c0-1.512,0-3.025.006-4.537a.428.428,0,0,1,.106-.288,20.475,20.475,0,0,0,2.776-3.444c.217-.3.438-.6.647-.908a1.075,1.075,0,0,1,1.151-.527,1.182,1.182,0,0,1,.92.908,1.4,1.4,0,0,1-.064.961c-.218.539-.433,1.079-.648,1.619C1108.819,661.555,1108.805,661.6,1108.784,661.66Z" transform="translate(-77.977)" fill="#005eb5" fill-rule="evenodd" />
                                                <path id="Path_142" data-name="Path 142" d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z" transform="translate(0 -110.402)" fill="#005eb5" fill-rule="evenodd" />
                                            </g>
                                        </svg>
                                        <span className="like-number">121</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11.469" height="11.268" viewBox="0 0 11.469 11.268">
                                            <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-8.177 -3.375)">
                                                <path id="Path_143" data-name="Path 143" d="M18.558,12.367a.8.8,0,0,1,.109-.4,1.11,1.11,0,0,1,.069-.1,5.345,5.345,0,0,0,.91-2.979,5.611,5.611,0,0,0-5.729-5.508A5.69,5.69,0,0,0,8.3,7.759a5.3,5.3,0,0,0-.122,1.128,5.6,5.6,0,0,0,5.64,5.578,6.793,6.793,0,0,0,1.557-.254c.373-.1.742-.237.838-.274a.872.872,0,0,1,.307-.056.858.858,0,0,1,.333.066l1.87.663a.446.446,0,0,0,.129.033.263.263,0,0,0,.264-.264.424.424,0,0,0-.016-.089Z" fill="#005eb5" />
                                            </g>
                                        </svg> <span>53</span>
                                    </p>

                                    <p className="desceiption-button">Lorem ipsum dolor sit amet, consectetur adipiscing lit ellente non pretium nulla, sed venenatis fels. Fue pat tortor quis lvtis dapibus. Consectetur adipiscing lit <Link className="btn">READ MORE</Link></p>
                                </div>

                                <div className="bolg-card-main">
                                <div className='editdelete'>
                                    <Link className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.742" height="15.742" viewBox="0 0 15.742 15.742">
                                            <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,16.959v3.279H7.779l9.671-9.671L14.171,7.288ZM19.986,8.031a.871.871,0,0,0,0-1.233L17.94,4.752a.871.871,0,0,0-1.233,0l-1.6,1.6,3.279,3.279Z" transform="translate(-4.5 -4.496)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    <Link className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="15.606" viewBox="0 0 12.138 15.606">
                                            <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M8.367,18.372A1.739,1.739,0,0,0,10.1,20.106h6.936a1.739,1.739,0,0,0,1.734-1.734V7.968H8.367ZM10.5,12.2l1.222-1.222,1.847,1.838,1.838-1.838L16.629,12.2l-1.838,1.838,1.838,1.838L15.407,17.1l-1.838-1.838L11.731,17.1l-1.222-1.222,1.838-1.838Zm6.1-6.832L15.736,4.5H11.4l-.867.867H7.5V7.1H19.638V5.367Z" transform="translate(-7.5 -4.5)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    </div>
                                    <div className="image-box">
                                        <img src="images/blog-image2.png" alt="" />
                                    </div>
                                    <div className="date-section">
                                        <div className="date">
                                            <Link className="btn">26 Sept'22</Link>
                                        </div>
                                        <div className="categ">
                                            <Link className="btn">Education</Link>
                                        </div>
                                    </div>
                                    <h2>Consectetur adipiscing lit?</h2>
                                    <p className="name-comment-section"><span className="name-customer">By Remy Jackson</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.535" height="11.268" viewBox="0 0 12.535 11.268">
                                            <g id="Group_221" data-name="Group 221" transform="translate(-1022.787 -658)">
                                                <path id="Path_141" data-name="Path 141" d="M1108.784,661.66h3.244a1.214,1.214,0,0,1,1.269,1.261,3.506,3.506,0,0,1-.338,1.631c-.573,1.237-1.114,2.488-1.668,3.734a1.539,1.539,0,0,1-1.513.98c-1.209,0-2.418,0-3.627,0a1.958,1.958,0,0,1-1.473-.612q-.3-.306-.6-.6a.427.427,0,0,1-.135-.327c0-1.512,0-3.025.006-4.537a.428.428,0,0,1,.106-.288,20.475,20.475,0,0,0,2.776-3.444c.217-.3.438-.6.647-.908a1.075,1.075,0,0,1,1.151-.527,1.182,1.182,0,0,1,.92.908,1.4,1.4,0,0,1-.064.961c-.218.539-.433,1.079-.648,1.619C1108.819,661.555,1108.805,661.6,1108.784,661.66Z" transform="translate(-77.977)" fill="#005eb5" fill-rule="evenodd" />
                                                <path id="Path_142" data-name="Path 142" d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z" transform="translate(0 -110.402)" fill="#005eb5" fill-rule="evenodd" />
                                            </g>
                                        </svg>
                                        <span className="like-number">121</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11.469" height="11.268" viewBox="0 0 11.469 11.268">
                                            <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-8.177 -3.375)">
                                                <path id="Path_143" data-name="Path 143" d="M18.558,12.367a.8.8,0,0,1,.109-.4,1.11,1.11,0,0,1,.069-.1,5.345,5.345,0,0,0,.91-2.979,5.611,5.611,0,0,0-5.729-5.508A5.69,5.69,0,0,0,8.3,7.759a5.3,5.3,0,0,0-.122,1.128,5.6,5.6,0,0,0,5.64,5.578,6.793,6.793,0,0,0,1.557-.254c.373-.1.742-.237.838-.274a.872.872,0,0,1,.307-.056.858.858,0,0,1,.333.066l1.87.663a.446.446,0,0,0,.129.033.263.263,0,0,0,.264-.264.424.424,0,0,0-.016-.089Z" fill="#005eb5" />
                                            </g>
                                        </svg> <span>53</span>
                                    </p>

                                    <p className="desceiption-button">Lorem ipsum dolor sit amet, consectetur adipiscing lit ellente non pretium nulla, sed venenatis fels. Fue pat tortor quis lvtis dapibus. Consectetur adipiscing lit <Link className="btn">READ MORE</Link></p>
                                </div>

                                <div className="bolg-card-main">
                                <div className='editdelete'>
                                    <Link className="btn edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.742" height="15.742" viewBox="0 0 15.742 15.742">
                                            <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,16.959v3.279H7.779l9.671-9.671L14.171,7.288ZM19.986,8.031a.871.871,0,0,0,0-1.233L17.94,4.752a.871.871,0,0,0-1.233,0l-1.6,1.6,3.279,3.279Z" transform="translate(-4.5 -4.496)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    <Link className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="15.606" viewBox="0 0 12.138 15.606">
                                            <path id="Icon_material-delete-forever" data-name="Icon material-delete-forever" d="M8.367,18.372A1.739,1.739,0,0,0,10.1,20.106h6.936a1.739,1.739,0,0,0,1.734-1.734V7.968H8.367ZM10.5,12.2l1.222-1.222,1.847,1.838,1.838-1.838L16.629,12.2l-1.838,1.838,1.838,1.838L15.407,17.1l-1.838-1.838L11.731,17.1l-1.222-1.222,1.838-1.838Zm6.1-6.832L15.736,4.5H11.4l-.867.867H7.5V7.1H19.638V5.367Z" transform="translate(-7.5 -4.5)" fill="#fff"/>
                                        </svg>
                                    </Link>
                                    </div>
                                    <div className="image-box">
                                        <img src="images/blog-image10.png" alt="" />
                                    </div>
                                    <div className="date-section">
                                        <div className="date">
                                            <Link className="btn">26 Sept'22</Link>
                                        </div>
                                        <div className="categ">
                                            <Link className="btn">Education</Link>
                                        </div>
                                    </div>
                                    <h2>Pellentesque non pretium</h2>
                                    <p className="name-comment-section"><span className="name-customer">By Remy Jackson</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.535" height="11.268" viewBox="0 0 12.535 11.268">
                                            <g id="Group_221" data-name="Group 221" transform="translate(-1022.787 -658)">
                                                <path id="Path_141" data-name="Path 141" d="M1108.784,661.66h3.244a1.214,1.214,0,0,1,1.269,1.261,3.506,3.506,0,0,1-.338,1.631c-.573,1.237-1.114,2.488-1.668,3.734a1.539,1.539,0,0,1-1.513.98c-1.209,0-2.418,0-3.627,0a1.958,1.958,0,0,1-1.473-.612q-.3-.306-.6-.6a.427.427,0,0,1-.135-.327c0-1.512,0-3.025.006-4.537a.428.428,0,0,1,.106-.288,20.475,20.475,0,0,0,2.776-3.444c.217-.3.438-.6.647-.908a1.075,1.075,0,0,1,1.151-.527,1.182,1.182,0,0,1,.92.908,1.4,1.4,0,0,1-.064.961c-.218.539-.433,1.079-.648,1.619C1108.819,661.555,1108.805,661.6,1108.784,661.66Z" transform="translate(-77.977)" fill="#005eb5" fill-rule="evenodd" />
                                                <path id="Path_142" data-name="Path 142" d="M1022.79,776.058c0-.7-.008-1.4,0-2.1a1.012,1.012,0,0,1,.619-.94,1.04,1.04,0,0,1,1.123.111,1,1,0,0,1,.434.828c.005,1.4.008,2.81,0,4.214a1.088,1.088,0,0,1-2.173.017c-.014-.709,0-1.419,0-2.129Z" transform="translate(0 -110.402)" fill="#005eb5" fill-rule="evenodd" />
                                            </g>
                                        </svg>
                                        <span className="like-number">121</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11.469" height="11.268" viewBox="0 0 11.469 11.268">
                                            <g id="Icon_ionic-ios-chatbubbles" data-name="Icon ionic-ios-chatbubbles" transform="translate(-8.177 -3.375)">
                                                <path id="Path_143" data-name="Path 143" d="M18.558,12.367a.8.8,0,0,1,.109-.4,1.11,1.11,0,0,1,.069-.1,5.345,5.345,0,0,0,.91-2.979,5.611,5.611,0,0,0-5.729-5.508A5.69,5.69,0,0,0,8.3,7.759a5.3,5.3,0,0,0-.122,1.128,5.6,5.6,0,0,0,5.64,5.578,6.793,6.793,0,0,0,1.557-.254c.373-.1.742-.237.838-.274a.872.872,0,0,1,.307-.056.858.858,0,0,1,.333.066l1.87.663a.446.446,0,0,0,.129.033.263.263,0,0,0,.264-.264.424.424,0,0,0-.016-.089Z" fill="#005eb5" />
                                            </g>
                                        </svg> <span>53</span>
                                    </p>

                                    <p className="desceiption-button">Lorem ipsum dolor sit amet, consectetur adipiscing lit ellente non pretium nulla, sed venenatis fels. Fue pat tortor quis lvtis dapibus. Consectetur adipiscing lit <Link className="btn">READ MORE</Link></p>
                                </div>


                          </div>

                        </div>
                    </div>
                </div>
            </div>
                <Footer />
            </div>
        </>
    );
}

export default Studentmyblogs
