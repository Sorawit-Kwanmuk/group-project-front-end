import './styleCoursesStatus.css';
import courseImg from '../../../../public/images/course.png';
import { Button } from '@mui/material';
import { yellow } from '@mui/material/colors';
function CoursesCardStatus() {
  const Certificate = yellow[500];
  return (
    <div className='divCoursesCardStatus'>
      <div className='coursesCardStatusControl'>
        <img src={courseImg} alt='' />
      </div>
      <div className='coursesCardStatusDetail'>
        <div className='coursesCardStatusDetailTop'>
          <div>
            <h4>Offline Fullstack JavaScript</h4>
          </div>
          <div>
            <Button variant='contained' color='primary'>
              Active
            </Button>
            <Button variant='contained' color='success'>
              Complete
            </Button>
            <Button variant='contained' color={Certificate}>
              Certificate
            </Button>
          </div>
        </div>
        <div className='coursesCardStatusDetailBottom'></div>
      </div>
    </div>
  );
}

export default CoursesCardStatus;
