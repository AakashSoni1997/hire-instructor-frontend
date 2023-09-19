import React, {  useState } from "react";
import "./Createaccount.scss";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="login-main-section">
        <div className="login-main-section1">
          <div className="login-account">
            <div className="position-relative">
              <h1>Create Account</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Vestibulum egestas purus a erat mattis.
              </p>
              <div className="view-courses">
                <a className="btn becomaninstructor" href="/createaccount">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="crose-button">
            <a className="btn becomaninstructor" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.484"
                height="20.479"
                viewBox="0 0 20.484 20.479"
              >
                <path
                  id="Icon_ionic-ios-close"
                  data-name="Icon ionic-ios-close"
                  d="M23.954,21.528l7.316-7.316a1.714,1.714,0,0,0-2.424-2.424L21.53,19.1l-7.316-7.316a1.714,1.714,0,1,0-2.424,2.424l7.316,7.316-7.316,7.316a1.714,1.714,0,0,0,2.424,2.424l7.316-7.316,7.316,7.316a1.714,1.714,0,0,0,2.424-2.424Z"
                  transform="translate(-11.285 -11.289)"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="login-main-section2">
          <div className="position-relative w-100">
            <h1>Welcome Back</h1>
            <p>Enter your details to proceed</p>

            <div className="accountfieldmain accountfieldmain-login">
              <div className="accountfield">
                <div className="accountfield-first">
                  <label className="custom-field one">
                   <input required type="email"  />
                    <span className="placeholder">Email</span>
                  </label>
                </div>
                <div className="accountfield-first">
                  <label className="custom-field one">
                   <input required type="password"  />
                    <span className="placeholder">Password</span>
                  </label>
                </div>
              </div>

              <div className="forget-password">
                <div className="box">
                  <a className="button" onClick={handleShow}>
                    Forgot Password?
                  </a>
                </div>

                <Modal
                  className="center-modal"
                  show={show}
                  onHide={handleClose}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Forgot Password?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bottom-line">
                    Enter your email to reset password
                  </Modal.Body>
                  <Modal.Body>
                    <div className="login-main-section login-main-section-email">
                      <div className="login-main-section2">
                        <div className="position-relative w-100">
                          <div className="accountfieldmain">
                            <div className="accountfield">
                              <div className="accountfield-first">
                                <label className="custom-field one">
                                 <input required type="email"  />
                                  <span className="placeholder">Email</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="email-send">
                      <a className="btn becomaninstructor" href="/">
                        Send
                      </a>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>

              <div className="accountfield-heading">
                <h2>OR Continue With</h2>
              </div>

              <div className="accountfield-fb-goo-button-sec">
                <div className="facebook">
                  <a className="btn becomaninstructor" href="/">
                    
                    <img src="/images/facebook.png" alt="" /> Facebook
                  </a>
                </div>

                <div className="facebook">
                  <a className="btn becomaninstructor" href="/">
                    
                    <img src="/images/google.png" alt="" /> Google
                  </a>
                </div>

                <div className="linkedIn">
                  <a className="btn becomaninstructor" href="/">
                    
                    <img src="/images/linkedIn.png" alt="" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="accountfield-signup">
                <div className="signup">
                  <a className="btn becomaninstructor" href="/">
                    Log In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
