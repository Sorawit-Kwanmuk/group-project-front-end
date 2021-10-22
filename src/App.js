import "./App.css";
import CourseCard from "./components/CourseCard/CourseCard";
import CourseClassroomAdmin from "./components/CourseAdmin/CourseClassroomAdmin";
import MainCourseAdmin from "./components/CourseAdmin/MainCourseAdmin";
import ContactUsUser from "./components/ContactUs/ContactUsUser";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyProfile from "./components/MyProfile/MyProfile";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import OurCourse from "./components/OurCourse/OurCourse";
import OurTeam from "./components/OurTeam/OurTeam";
import Instructor from "./components/InstructorCard/InstructorCard";
import "./App.css";
import ContactUsEdit from "./components/ContactUs/ContactUsEdit";
import ClassroomILearn from "./components/ClassroomILearn/ClassroomILearn";

function App() {
  return (
    <>
      <Header />
      <CourseCard />
      <MyProfile />
      <ForgetPassword />
      <Register />
      <Login />
      <ShoppingCart />
      <OurCourse />
      <OurTeam />
      <Instructor />
      <MainCourseAdmin />
      <CourseClassroomAdmin />
      <ContactUsUser />
      <ClassroomILearn />
      <Footer />
    </>
  );
}

export default App;
