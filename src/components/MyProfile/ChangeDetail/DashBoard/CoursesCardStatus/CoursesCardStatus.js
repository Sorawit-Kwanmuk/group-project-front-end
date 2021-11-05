import "./styleCoursesStatus.css";
import courseImg from "../../../../../public/images/course.png";
import { Button } from "@mui/material";
import { buttonConfig } from "./muiConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import IncompletedCourse from "./IncompletedCourse/IncompletedCourse";
import CompletedCoures from "./CompletedCoures/CompletedCoures";
function CoursesCardStatus({ item, alignment }) {
  const [courseName, setCourseName] = useState("");
  const { id, status } = item;
  console.log("@item:", item);
  // console.log('status', status);
  useEffect(() => {
    const fetchDataCourseName = async () => {
      try {
        const response = await axios.get(`/course/${id}`);
        setCourseName(response.data.courseResult.courseName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataCourseName();
  }, []);
  // console.log('currentStage', currentStage);
  console.log("alignment", alignment);
  return (
    <>
      {alignment === "1" && (
        <>
          <IncompletedCourse item={item} courseName={courseName} />
          <CompletedCoures item={item} courseName={courseName} />
        </>
      )}
      {alignment === "2" && (
        <>
          <IncompletedCourse item={item} courseName={courseName} />
        </>
      )}
      {alignment === "3" && (
        <>
          <CompletedCoures item={item} courseName={courseName} />
        </>
      )}
    </>
  );
}

export default CoursesCardStatus;
