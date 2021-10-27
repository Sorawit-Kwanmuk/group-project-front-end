import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import InstructorImage from '../../public/images/Instructor.png';
import './styleInstructorCard.css';
import { useHistory } from 'react-router';
import { ToggleContext } from '../../contexts/toggleContext';
function InstructorCard({ item }) {
  const [instructor, setInstructor] = useState({});

  // console.log('instructor: ', instructor);
  const history = useHistory();
  const { toggle, setToggle } = useContext(ToggleContext);
  useEffect(() => {
    const fetchDataInstructorById = async () => {
      try {
        const response = await axios.get(
          `/instructor/${item.instructorId ? item.instructorId : item.id}`
        );
        setInstructor(response.data.instructorResult);
      } catch (error) {}
    };
    fetchDataInstructorById();
  }, [toggle]);
  const handleClickToInstructorCard = () => {
    history.push(`/instructor-card/${item.instructorId}`);
    setToggle(current => !current);
  };

  return (
    <div className='cardInstructorBody' onClick={handleClickToInstructorCard}>
      <div className='divInstructorImage'>
        <img src={instructor.profileImage} alt='' />
      </div>
      <div className='divInstructorDetail'>
        <h1 className='divInstructorName'>{instructor.fullName}</h1>
        <div className='divDetailInstructorCard'>
          <h2 className='h2InstructorCard'>{instructor.rating}/5</h2>
          <p className='pInstructorCard'>({instructor.ratingAmount} Reviews)</p>
        </div>
        <div className='divDetailInstructorCard'>
          <h2 className='h2InstructorCard'>Learners : </h2>
          <p className='pInstructorCard'>{instructor.learner}</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
