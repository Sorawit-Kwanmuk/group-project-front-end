import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

const CourseContext = createContext();
function CourseContextProvider({ children }) {
  const [courseByRating, setCourseByRating] = useState([]);
  const [courseByPromotion, setCourseByPromotion] = useState([]);
  //   console.log('courseByRating: ', courseByRating);
  //   console.log('courseByPromotion: ', courseByPromotion);
  useEffect(() => {
    const fetchDataAllCourseForHome = async () => {
      try {
        const res = await axios.get("/course/byrating");
        console.log("@res.data:", res.data);
        setCourseByRating(res.data.courseResult);
        const res2 = await axios.get("/course/bypromotion");
        setCourseByPromotion(res2.data.courseResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAllCourseForHome();
  }, []);
  return (
    <CourseContext.Provider
      value={{
        courseByRating,
        setCourseByRating,
        courseByPromotion,
        setCourseByPromotion
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export { CourseContextProvider, CourseContext };
