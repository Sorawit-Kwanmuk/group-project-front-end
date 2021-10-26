import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import OurCourse from '../components/OurCourse/OurCourse';
import OurTeam from '../components/OurTeam/OurTeam';
import ShoppingCard from '../components/ShoppingCard/ShoppingCard';
import InstructorCard from '../components/InstructorCard/InstructorCard';
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';
import ContactUsUser from '../components/ContactUs/ContactUsUser';
import ClassroomILearn from '../components/ClassroomILearn/ClassroomILearn';
import MyProfile from '../components/MyProfile/MyProfile';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import AdminHome from '../components/AdminHome/AdminHome';
import MainCourseAdmin from '../components/CourseAdmin/MainCourseAdmin';
import CourseClassroomAdmin from '../components/CourseAdmin/CourseClassroomAdmin';
import AdminQuiz from '../components/CourseAdmin/AdminQuiz';
import OurTeamAdmin from '../components/OurTeamAdmin/OurTeamAdmin';
import InstructorEdit from '../components/InstructorEdit/InstructorEdit';
import FeedbackAdmin from '../components/FeedbackAdmin/FeedbackAdmin';
import ContactUsEdit from '../components/ContactUs/ContactUsEdit';
import HomeBannerAdmin from '../components/HomeBannerAdmin/HomeBannerAdmin';

const routes = {
  user: {
    route: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/forget-password',
        component: ForgetPassword,
      },
      {
        path: '/our-course',
        component: OurCourse,
      },
      {
        path: '/our-team',
        component: OurTeam,
      },
      {
        path: '/shopping-card',
        component: ShoppingCard,
      },
      {
        path: '/instructor-card',
        component: InstructorCard,
      },
      {
        path: '/contact-us',
        component: ContactUsUser,
      },
      {
        path: '/classroom-i-learn',
        component: ClassroomILearn,
      },
      {
        path: '/my-profile',
        component: MyProfile,
      },
      {
        path: '/shopping-cart',
        component: ShoppingCart,
      },
      {
        path: '/',
        component: Home,
      },
    ],
    redirect: '/',
  },
  guest: {
    route: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/forget-password',
        component: ForgetPassword,
      },
      {
        path: '/our-course',
        component: OurCourse,
      },
      {
        path: '/our-team',
        component: OurTeam,
      },
      {
        path: '/shopping-card',
        component: ShoppingCard,
      },
      {
        path: '/instructor-card',
        component: InstructorCard,
      },
      {
        path: '/contact-us',
        component: ContactUsUser,
      },
      {
        path: '/',
        component: Home,
      },
    ],
    redirect: '/',
  },
  admin: {
    route: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/forget-password',
        component: ForgetPassword,
      },
      {
        path: '/our-course',
        component: OurCourse,
      },
      {
        path: '/our-team',
        component: OurTeam,
      },
      {
        path: '/shopping-card',
        component: ShoppingCard,
      },
      {
        path: '/instructor-card',
        component: InstructorCard,
      },
      {
        path: '/contact-us',
        component: ContactUsUser,
      },
      {
        path: '/classroom-i-learn',
        component: ClassroomILearn,
      },
      {
        path: '/my-profile',
        component: MyProfile,
      },
      {
        path: '/shopping-cart',
        component: ShoppingCart,
      },
      {
        path: '/admin-home',
        component: AdminHome,
      },
      {
        path: '/main-course-admin',
        component: MainCourseAdmin,
      },
      {
        path: '/course-classroom-admin',
        component: CourseClassroomAdmin,
      },

      {
        path: '/our-team-admin',
        component: OurTeamAdmin,
      },
      {
        path: '/instructor-edit',
        component: InstructorEdit,
      },
      {
        path: '/feedback',
        component: FeedbackAdmin,
      },
      {
        path: '/contact-us-edit',
        component: ContactUsEdit,
      },
      {
        path: '/home-banner-admin',
        component: HomeBannerAdmin,
      },
      {
        path: '/',
        component: Home,
      },
    ],
    redirect: '/',
  },
};

export default routes;
