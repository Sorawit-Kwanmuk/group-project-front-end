import './styleCoursesStatus.css';
import courseImg from '../../../../../public/images/course.png';
import { Button } from '@mui/material';
import { buttonConfig } from './muiConfig';
function CoursesCardStatus() {
  return (
    <>
      <div className='divCoursesCardStatus'>
        <div className='coursesCardStatusControl'>
          <img src={courseImg} alt='' />
        </div>
        <div className='coursesCardStatusDetail'>
          <div className='coursesCardStatusDetailTop'>
            <div className='coursesCardStatusDetailTopH4'>
              <h4>Offline Fullstack JavaScript</h4>
            </div>
            <div>
              <Button variant='contained' color='primary' sx={buttonConfig}>
                Active
              </Button>
              <Button variant='contained' color='success' sx={buttonConfig}>
                Complete
              </Button>
              <Button variant='contained' color='secondary' sx={buttonConfig}>
                Certificate
              </Button>
            </div>
          </div>
          <div className='coursesCardStatusDetailBottom'>
            <div className='bottomCardDetail'>
              <p>total Lessons: </p>
              <span>40</span>
            </div>
            <div className='bottomCardDetail'>
              <p>Completed Lessons:</p>
              <span>40/40</span>
            </div>
            <div className='bottomCardDetail'>
              <span>100% </span>
              <p>Complete</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grayLine'></div>
    </>
  );
}

export default CoursesCardStatus;
