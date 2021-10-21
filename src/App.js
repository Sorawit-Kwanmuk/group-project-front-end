import './App.css';
import CourseCard from './components/CourseCard/CourseCard';
import ContactUsEdit from './components/ContactUs/ContactUsEdit';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile';
import Register from './components/Register/Register';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

function App() {
  return (
    <>
      <CourseCard />
      <Header />
      <ContactUsEdit />
      <Footer />
      <MyProfile />
      <ForgetPassword />
      <Register />
    </>
  );
}

export default App;
