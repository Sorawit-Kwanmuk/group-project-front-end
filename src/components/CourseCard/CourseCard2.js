import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import courseImage from '../../public/images/javascript-training-120620.jpg';
import './styleCourseCard.css';
function CourseCard({ item }) {
  const [course, setCourse] = useState([]);
  const {
    id,
    courseName,
    rating,
    price,
    ratingAmount,
    level,
    duration,
    courseImage,
  } = course;
  useEffect(() => {
    const fetchDataCourse = async () => {
      const response = await axios.get(`/course/${item.courseId}`);
      // console.log('response: ', response.data.courseResult);
      setCourse(response.data.courseResult);
    };
    fetchDataCourse();
  }, []);
  // console.log('item: ', item);
  // const result = item.CourseCats.map(item => item.categoryId);
  const history = useHistory();
  // console.log('item: ', item);
  // console.log('item: ', item.CourseCats);
  const handleClickToCourseCardDetail = () => {
    history.push(`/shopping-card/${id}`);
  };
  return (
    <div className='cardBody' onClick={handleClickToCourseCardDetail}>
      <div className='divCourseImage'>
        <img src={courseImage} alt='' />
      </div>
      <div className='divCourseDetail'>
        <h1 className='divCourseName'>{courseName}</h1>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>{rating}/5</h2>&nbsp;&nbsp;
          <p className='pCourseCard'>({ratingAmount} Reviews)</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Level : </h2>&nbsp;&nbsp;
          <p className='pCourseCard'>{level}</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Duration : </h2>&nbsp;&nbsp;
          <p className='pCourseCard'>{duration} day</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Price : </h2>&nbsp;&nbsp;
          <p className='pCourseCard'>{price} THB</p>
        </div>
      </div>
      {/* <div className='threeTagControl'>
        {(result[0] === 1 || result[1] === 1 || result[2] === 1) && (
          <div className='frontEnd'>Front End</div>
        )}
        {(result[0] === 2 || result[1] === 2 || result[2] === 2) && (
          <div className='backEnd'>Back End</div>
        )}
        {(result[0] === 3 || result[1] === 3 || result[2] === 3) && (
          <div className='uxUi'>UX/UI</div>
        )}
      </div> */}
    </div>
  );
}

export default CourseCard;
