import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeBannerAdmin from './components/HomeBannerAdmin/HomeBannerAdmin';
import Home from './components/Home/Home';
import CourseCard from './components/CourseCard/CourseCard';
import CourseClassroomAdmin from './components/CourseAdmin/CourseClassroomAdmin';
import MainCourseAdmin from './components/CourseAdmin/MainCourseAdmin';
import ContactUsUser from './components/ContactUs/ContactUsUser';
import ContactUsEdit from './components/ContactUs/ContactUsEdit';
import MyProfile from './components/MyProfile/MyProfile';
import Register from './components/Register/Register';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Login from './components/Login/Login';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import OurCourse from './components/OurCourse/OurCourse';
import OurTeam from './components/OurTeam/OurTeam';
import Instructor from './components/InstructorCard/InstructorCard';
import ClassroomILearn from './components/ClassroomILearn/ClassroomILearn';
import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import AdminHome from './components/AdminHome/AdminHome';
import OurTeamAdmin from './components/OurTeamAdmin/OurTeamAdmin';
import InstructorEdit from './components/InstructorEdit/InstructorEdit';
import FeedbackAdmin from './components/FeedbackAdmin/FeedbackAdmin';
import InstructorCardDetail from './components/InstructorCardDetail/InstructorCardDetail';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <AdminHome /> */}
      {/* <OurTeamAdmin /> */}
      {/* <InstructorEdit /> */}
      {/* <FeedbackAdmin /> */}
      {/* <HomeBannerAdmin /> */}
      {/* <CourseCard /> */}
      {/* <MyProfile /> */}
      {/* <ForgetPassword /> */}
      {/* <Register /> */}
      <Login />
      {/* <ShoppingCart /> */}
      {/* <OurCourse /> */}
      {/* <OurTeam /> */}
      {/* <Instructor /> */}
      {/* <MainCourseAdmin /> */}
      {/* <CourseClassroomAdmin /> */}
      {/* <ContactUsEdit /> */}
      {/* <ContactUsUser /> */}
      {/* <ClassroomILearn /> */}
      {/* <ShoppingCard /> */}
      {/* <InstructorCardDetail /> */}
      <Footer />
    </>
  );
}

export default App;
