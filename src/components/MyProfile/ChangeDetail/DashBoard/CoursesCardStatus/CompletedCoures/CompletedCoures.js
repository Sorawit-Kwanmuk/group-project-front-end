import { Button } from '@mui/material';
import { buttonConfig } from '../muiConfig';
import courseImg from '../../../../../../public/images/course.png';
import { useHistory } from 'react-router-dom';
function CompletedCoures({ item, courseName }) {
  const history = useHistory();
  const {
    courseId,
    createdAt,
    currentStage,
    duration,
    id,
    price,
    status,
    totalStage,
    updatedAt,
    userId,
  } = item;
  const handleClickLocationToCertificate = () => {
    history.push({
      pathname: `/certificate/`,
      state: {
        item,
      },
    });
  };
  return (
    <>
      {status === 'completed' && (
        <>
          <div className='divCoursesCardStatus'>
            <div className='coursesCardStatusControl'>
              <img src={courseImg} alt='' />
            </div>
            <div className='coursesCardStatusDetail'>
              <div className='coursesCardStatusDetailTop'>
                <div className='coursesCardStatusDetailTopH4'>
                  <h4>{courseName}</h4>
                </div>
                <div>
                  {status === 'incompleted' && (
                    <Button
                      variant='contained'
                      color='primary'
                      sx={buttonConfig}>
                      Active
                    </Button>
                  )}
                  {status === 'completed' && (
                    <>
                      <Button
                        variant='contained'
                        color='success'
                        sx={buttonConfig}>
                        Complete
                      </Button>
                      <Button
                        onClick={handleClickLocationToCertificate}
                        variant='contained'
                        color='secondary'
                        sx={buttonConfig}>
                        Certificate
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div className='coursesCardStatusDetailBottom'>
                <div className='bottomCardDetail'>
                  <p>total Lessons: </p>
                  <span>{totalStage}</span>
                </div>
                <div className='bottomCardDetail'>
                  <p>Completed</p>&nbsp;
                  <p>Lessons:</p>
                  <span>
                    {currentStage}/{totalStage}
                  </span>
                </div>
                <div className='bottomCardDetail'>
                  <span>{((currentStage / totalStage) * 100).toFixed(0)}%</span>
                  <p>Complete</p>
                </div>
              </div>
            </div>
          </div>
          <div className='grayLine'></div>
        </>
      )}
    </>
  );
}

export default CompletedCoures;
