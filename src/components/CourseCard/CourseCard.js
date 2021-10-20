import courseImage from '../../public/images/course.png';
import './styleCourseCard.css';
function CourseCard() {
  return (
    <div className='cardBody'>
      <div className='divCourseImage'>
        <img src={courseImage} alt='' />
      </div>
      <div className='divCourseDetail'>
        <h1 className='divCourseName'>Course Name</h1>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>4.52/5</h2>
          <p className='pCourseCard'>(10,352 Reviews)</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Level : </h2>
          <p className='pCourseCard'>Beginner</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Duration : </h2>
          <p className='pCourseCard'>2 months</p>
        </div>
        <div className='divDetailCourseCard'>
          <h2 className='h2CourseCard'>Price : </h2>
          <p className='pCourseCard'>2,500 THB</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
