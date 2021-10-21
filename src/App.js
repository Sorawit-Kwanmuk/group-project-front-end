import './App.css';
import CourseCard from './components/CourseCard/CourseCard';
import ContactUsEdit from './components/ContactUs/ContactUsEdit';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <CourseCard />
      <Header />
      <ContactUsEdit />
      <Footer />
      <MyProfile />
    </>
  );
}

export default App;
