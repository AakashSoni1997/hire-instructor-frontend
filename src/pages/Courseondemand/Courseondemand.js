import React,{useState} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import '../../style.scss';
// import ModalVideo from 'react-modal-video'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Instructordetail = () => {
    // const [isOpen, setOpen] = useState(false)

        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
    
    return (
        <>
            <div id="footer-bottom" className="Instructordetail">
                <Header />
                <div className="instru-bg-image">
                    <h1>Instructors</h1>
                    <p>Home / Instructors /  <span> Rosy Mela Mela</span></p>
                </div>


                <Footer />
            </div>

            <Modal className='center-modal class-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Class Type</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bottom-line'>
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
                           <input required type="email" />
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
                <div className='email-send'>
                <Link className="btn becomaninstructor" to="/">Send</Link>
                </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Instructordetail




