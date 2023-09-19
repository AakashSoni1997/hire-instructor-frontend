import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Instructorsidebar from "../../components/Instructorsidebar/Instructorsidebar";
import Managesubscriptiontabledata from "../../components/Managesubscriptiontabledata/Managesubscriptiontabledata";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Instructorprofile.scss";

const Managesubscription = () => {
  const [item, setItem] = useState({ kindOfStand: "All", another: "another" });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };

  const [items, setItems] = useState(Managesubscriptiontabledata);

  const filterItem = (categItem) => {
    const upadtedItems = Managesubscriptiontabledata.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(upadtedItems);
  };

  return (
    <>
      <div id="footer-bottom" className="instructor-profile">
        <Header />
        <div className="instru-bg-image">
          <h1>Manage Subscription</h1>
          <p>
            Home / <span>Manage Subscription</span>
          </p>
        </div>

        <div className="myprofile-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-12 col-lg-4">
                <Instructorsidebar />
              </div>

              <div className="col-md-12 col-lg-8">
                <div className="profile-top-heading">
                  <h2>Manage Subscription</h2>
                </div>

                    <div className="booking-request-section">
                    <div className="booking-filter">
                  <div className="btn" onClick={() => setItems(Managesubscriptiontabledata)}>
                    <Form.Group controlId="kindOfStand">
                    <Form.Check value="All" type="radio" aria-label="radio 1" label="All" onChange={handleChange} checked={kindOfStand === "All"} />
                    </Form.Group>
                  </div>

                  <div className="btn" onClick={() => filterItem("Active")}>
                    <Form.Group controlId="kindOfStand2"> 
                    <Form.Check value="Active" type="radio" aria-label="radio 1" label="Active" onChange={handleChange} checked={kindOfStand === "Active"} />
                    </Form.Group>
                  </div>

                  <div className="btn" onClick={() => filterItem("Expired")}>
                    <Form.Group controlId="kindOfStand3"> 
                      <Form.Check value="Expired" type="radio" aria-label="radio 1" label="Expired" onChange={handleChange} checked={kindOfStand === "Expired"}/>
                    </Form.Group>
                  </div>
                </div>
                    </div>
                <div className="my-profile-details">

                         <div className="manages-section-main">
                          <div className="manages-section">
                            <Table striped responsive>
                              <thead>
                                <tr>
                                  <th>Student Name</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Subscription ID</th>
                                  <th>Status</th>
                                  <th></th>
                                </tr>
                              </thead>
                              {items.map((elem) => {
                            const { Active, Activetable, Expiredtable, Expired } = elem;
                            return (
                              <>
                              <tbody>
                                  {Activetable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Active}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}

                                    {Activetable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Active}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}

                                    {Expiredtable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Expired}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}

                                    {Expiredtable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Expired}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}

                                    {Expiredtable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Expired}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}

                                    {Expiredtable && 
                                      <tr>
                                      <td>
                                        <img src="images/aishajoyt.png" alt="" />
                                        <span> Aisha Joy</span>
                                      </td>
                                      <td>01 Sept'22</td>
                                      <td>30 Sept'22</td>
                                      <td>ID Number: #21354</td>
                                      <td>{Expired}</td>
                                      <td>
                                        <Link className="btn" to="/">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              id="chat-svgrepo-com_1_"
                                              data-name="chat-svgrepo-com (1)"
                                              d="M19.983,19.561l-1.615-4.845A9.832,9.832,0,1,0,14.293,18.6l5.289,1.392a.353.353,0,0,0,.085.011.334.334,0,0,0,.316-.439ZM5.333,7.005H10a.333.333,0,1,1,0,.667H5.333a.333.333,0,1,1,0-.667Zm9,6h-9a.333.333,0,1,1,0-.667h9a.333.333,0,0,1,0,.667Zm0-2.667h-9a.333.333,0,1,1,0-.667h9a.333.333,0,1,1,0,.667Z"
                                              fill="#005eb5"
                                            />
                                          </svg>
                                        </Link>
                                      </td>
                                    </tr>}
                              </tbody>
                        </>
                    );
                  })}
                    </Table>
                  </div>
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
};

export default Managesubscription;
