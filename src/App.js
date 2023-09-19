import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Studentcreateaccount from './pages/Auth/Studentcreateaccount';
import Studentlogin from './pages/Auth/Studentlogin';
import Instructorcreateaccount from './pages/Auth/Instructorcreateaccount';
import Instructorlogin from './pages/Auth/Instructorlogin';
import Courses from './pages/Courses/Courses';
import Instructors from './pages/Instructors/Instructors';
import Groupclasses from './pages/Groupclasses/Groupclasses';
import Contactus from './pages/ContactUs/ContactUs';
import Aboutus from './pages/Aboutus/Aboutus';
import FAQs from './pages/FAQs/FAQs';
import Blog from './pages/Bloglisting/Blog';
import Blogdetail from './pages/Bloglisting/Blogdetail';
import Termsconditions from './pages/TermsConditions/Termsconditions';
import Privacypolicy from './pages/PrivacyPolicy/Privacypolicy';
import Instructordetail from './pages/Instructordetail/Instructordetail';
// import Completeprofile from './pages/Instructorcompleteprofile/Completeprofile';
import Bookingrequest from './pages/Instructorprofile/Bookingrequest';
import Classesdetails from './pages/Instructorprofile/Classesdetails';
import Instructorgroupclasses from './pages/Instructorprofile/Instructorgroupclasses';
import Problemsolving from './pages/Instructorprofile/Problemsolving';
import Completedclassesproblemsolving from './pages/Instructorprofile/Completedclassesproblemsolving';
import Managesubscription from './pages/Instructorprofile/Managesubscription';
import Getverificationbadge from './pages/Instructorprofile/Getverificationbadge';
import Paymentdetails from './pages/Instructorprofile/Paymentdetails';
import Ratingsreviews from './pages/Instructorprofile/Ratingsreviews';
import Myblogs from './pages/Instructorprofile/Myblogs';
import Chats from './pages/Instructorprofile/Chats';
import Addnewblog from './pages/Instructorprofile/Addnewblog';
import Addgroupclass from './pages/Instructorprofile/Addgroupclass';
import Studentmyprofile from './pages/Studentprofile/Studentmyprofile';
import Studentclassesdetails from './pages/Studentprofile/Studentclassesdetails';
import Studentcompletedclassesproblemsolving from './pages/Studentprofile/Studentcompletedclassesproblemsolving';
import Studentwalletpayment from './pages/Studentprofile/Studentwalletpayment';
import Studentmanagesubscription from './pages/Studentprofile/Studentmanagesubscription';
import Studentgiftcardcoupons from './pages/Studentprofile/Studentgiftcardcoupons';
import Studentwishlist from './pages/Studentprofile/Studentwishlist';
import Studentreferearn from './pages/Studentprofile/Studentreferearn';
import Studentchats from './pages/Studentprofile/Studentchats';
import Studentratingsreviews from './pages/Studentprofile/Studentratingsreviews';
import Studentmyblogs from './pages/Studentprofile/Studentmyblogs';
import Studentaddnewblog from './pages/Studentprofile/Studentaddnewblog';
import './App.scss';
import './responsive.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/actions/AuthAction';
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import { toast, ToastContainer } from 'react-toastify';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import Ondemandclassconfirmation from './pages/Studentclasstype/OnDemand/Ondemandclassconfirmation';
import Scheduleclass from './pages/Studentclasstype/ScheduledClass/Scheduleclass';
import Problemsolvingclass from './pages/Studentclasstype/ProblemSolving/Problemsolvingclass';
import Subscription from './pages/Studentclasstype/Subscription/Subscription';
import Ondemandclass from './pages/Studentclasstype/OnDemand/Ondemandclass';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import Newcompleteprofile from './pages/Instructorcompleteprofile/Completeprofile';
import ProfileWrraper from './pages/Instructorprofile/ProfileWrraper';

toast.configure();
function App() {
    const dispatch = useDispatch();
    const userDetail = JSON.parse(localStorage.getItem("security_auth"));

    useEffect(() => {
        if (localStorage.security_auth) {
            dispatch(setCurrentUser(userDetail?.user))
        }
    }, [dispatch, userDetail])

    const role = userDetail?.user?.role;
    return (<>
        <ToastContainer style={{ zIndex: 999999 }} />
        <Routes>
            <Route path="/"><Route index element={<Home />} /></Route>
            <Route path="/studentcreateaccount"><Route index element={<Studentcreateaccount />} /></Route>
            <Route path="/studentlogin"><Route index element={<Studentlogin />} /></Route>
            <Route path="/instructorcreateaccount"><Route index element={<Instructorcreateaccount />} /></Route>
            <Route path="/instructorlogin"><Route index element={<Instructorlogin />} /></Route>
            <Route path="/courses"><Route index element={<Courses />} /></Route>
            <Route path="/instructors" ><Route index element={<Instructors />} /></Route>
            <Route path="/instructors/:search" ><Route index element={<Instructors />} /></Route>
            <Route path="/groupclasses"><Route index element={<Groupclasses />} /></Route>
            <Route path="/contactus"><Route index element={<Contactus />} /></Route>
            <Route path="/aboutus"><Route index element={<Aboutus />} /></Route>
            <Route path="/faqs"><Route index element={<FAQs />} /></Route>
            <Route path="/blog"><Route index element={<Blog />} /></Route>

      <Route path="/blogdetail"><Route index element={<Blogdetail />} /></Route>
      <Route path="/blogdetail/:id"><Route index element={<Blogdetail />} /></Route>
      <Route path="/termsconditions"><Route index element={<Termsconditions />} /></Route>
      <Route path="/privacypolicy"><Route index element={<Privacypolicy />} /></Route>
      <Route path="/instructordetail/:id"><Route index element={<Instructordetail />} /></Route>
      <Route element={<PrivateRoutes role={role} />} path="/completeprofile/:id">
        <Route index element={<Newcompleteprofile />} />
      </Route>
      {/* <Route element={<PrivateRoutes role={role} />} path="/myprofile"><Route index element={role===3 ? <Myprofile /> :<Studentmyprofile />} /></Route> */}
            <Route path="/bookingrequest"><Route index element={<Bookingrequest />} /></Route>
      <Route path="/classesdetails"><Route index element={<Classesdetails />} /></Route>
      <Route path="/instructorgroupclasses"><Route index element={<Instructorgroupclasses />} /></Route>
      <Route path="/problemsolving"><Route index element={<Problemsolving />} /></Route>
      <Route path="/completedclassesproblemsolving"><Route index element={<Completedclassesproblemsolving />} /></Route>
      <Route path="/managesubscription"><Route index element={<Managesubscription />} /></Route>
      <Route path="/getverificationbadge"><Route index element={<Getverificationbadge />} /></Route>
      <Route path="/paymentdetails"><Route index element={<Paymentdetails />} /></Route>
      <Route path="/ratingsreviews"><Route index element={<Ratingsreviews />} /></Route>
      <Route path="/myblogs"><Route index element={<Myblogs />} /></Route>
      <Route path="/chats"><Route index element={<Chats />} /></Route>
      <Route path="/addnewblog"><Route index element={<Addnewblog />} /></Route>
      <Route path="/addgroupclass"><Route index element={<Addgroupclass />} /></Route>
      <Route path="/myprofile/:role">{<Route index element={<ProfileWrraper  />}/>}</Route>
      <Route path="/studentclassesdetails"><Route index element={<Studentclassesdetails />} /></Route>
      <Route path="/studentcompletedclassesproblemsolving"><Route index element={<Studentcompletedclassesproblemsolving />} /></Route>
      <Route path="/studentwalletpayment"><Route index element={<Studentwalletpayment />} /></Route>
      <Route path="/studentmanagesubscription"><Route index element={<Studentmanagesubscription />} /></Route>
      <Route path="/studentgiftcardcoupons"><Route index element={<Studentgiftcardcoupons />} /></Route>
      <Route path="/studentwishlist"><Route index element={<Studentwishlist />} /></Route>
      <Route path="/studentreferearn"><Route index element={<Studentreferearn />} /></Route>
      <Route path="/studentchats"><Route index element={<Studentchats />} /></Route>
      <Route path="/studentratingsreviews"><Route index element={<Studentratingsreviews />} /></Route>
      <Route path="/studentmyblogs"><Route index element={<Studentmyblogs />} /></Route>
      <Route path="/studentaddnewblog"><Route index element={<Studentaddnewblog />} /></Route>
      <Route path="/ondemandclassconfirmation/:id"><Route index element={<Ondemandclassconfirmation />} /></Route>
      <Route path="/scheduleclass"><Route index element={<Scheduleclass  />} /></Route>
      <Route path="/scheduleclass/:id"><Route index element={<Scheduleclass />} /></Route>
      <Route path="/problemsolvingclass/:name/:id"><Route index element={<Problemsolvingclass />} /></Route>
      <Route element={<PrivateRoutes role={role} />} path="/subscription/:name/:id"><Route index element={<Subscription />} /></Route>
      <Route path="/linkedin"><Route index element={<LinkedInCallback />} /></Route>

            {/* <Route exact path="/linkedin" element={<Subscription />} /> */}
            <Route element={<PrivateRoutes role={role} />} path="/ondemandclass/:name/:id"><Route index element={<Ondemandclass />} /></Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>

    );
}


export default App;
