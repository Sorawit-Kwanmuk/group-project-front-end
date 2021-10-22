import "./App.css";
import CourseClassroomAdmin from "./components/CourseAdmin/CourseClassroomAdmin";
import MainCourseAdmin from "./components/CourseAdmin/MainCourseAdmin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      {/* <MainCourseAdmin /> */}
      <CourseClassroomAdmin />
      <Footer />
    </>
  );
}

export default App;
