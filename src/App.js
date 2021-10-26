import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthContext } from "./contexts/authContext";
import { useContext, useState } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import routes from "./config/route";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const [role, setRole] = useState(user ? user.role : "guest");
  console.log(user);

  // const role = user ? 'user' : 'guest';
  console.log("role: ", role);
  console.log("routes: ", routes);
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <AdminHome /> */}
      {/* <CourseCard /> */}
      {/* <MyProfile /> */}
      {/* <ForgetPassword /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ShoppingCart /> */}
      {/* <OurCourse /> */}
      {/* <OurTeam /> */}
      {/* <Instructor /> */}
      {/* <MainCourseAdmin /> */}
      {/* <CourseClassroomAdmin /> */}
      {/* <ContactUsEdit /> */}
      {/* <ContactUsUser /> */}
      {/* <ClassroomILearn /> */}
      {/* <OurTeamAdmin /> */}
      {/* <InstructorEdit /> */}
      {/* <FeedbackAdmin /> */}
      {/* <HomeBannerAdmin /> */}
      <Footer />
      <BrowserRouter>
        <Header />
        {role && (
          <Switch>
            {routes[role].route.map((item) => (
              <Route
                key={item.path}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
            <Redirect to={routes[role].redirect} />
          </Switch>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
