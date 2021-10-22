import InstructorImage from '../../public/images/Instructor.png';
import './styleInstructorCard.css';
function InstructorCard() {
  return (
    <div className='cardInstructorBody'>
      <div className='divInstructorImage'>
        <img src={InstructorImage} alt='' />
      </div>
      <div className='divInstructorDetail'>
        <h1 className='divInstructorName'>Mr. Jonas Rodiguez</h1>
        <div className='divDetailInstructorCard'>
          <h2 className='h2InstructorCard'>4.52/5</h2>
          <p className='pInstructorCard'>(10,352 Reviews)</p>
        </div>
        <div className='divDetailInstructorCard'>
          <h2 className='h2InstructorCard'>Learners : </h2>
          <p className='pInstructorCard'>3,564</p>
        </div>
        <div className='divDetailInstructorCard'>
          <h2 className='h2InstructorCard'>Course : </h2>
          <p className='pInstructorCard'>2</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
