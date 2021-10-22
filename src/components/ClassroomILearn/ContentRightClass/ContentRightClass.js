import '../styleClassroomILearn.css';
import Button from '@mui/material/Button';
import { ButtonConfig, ButtonConfig2 } from '../muiConfig';
import VideoLink from './VideoLink/VideoLink';
import QuizTest from './Quiz/QuizTest';
function ContentRightClass() {
  return (
    <div className='mainDivControllerContentRightClass'>
      <div className='navBarContentRightClass'>
        <Button variant='contained' sx={ButtonConfig}>
          My Course
        </Button>
        <div className='textLabelContentRightClass'>HTML - Element / Tag</div>
        <Button variant='contained' sx={ButtonConfig}>
          Completed !
        </Button>
      </div>
      <div className='lineCompleteController'>
        <div className='lineCompleteStatusSuccess'></div>
        <div className='lineWhiteCompleteStatusSuccess'></div>
        <div className='lineCompleteStatus'></div>
        <div className='divLabelPercentComplete'>
          <p>80</p>
          <p>%</p>
          <p>Complete</p>
        </div>
      </div>
      {/* <VideoLink /> */}
      <QuizTest />
      <QuizTest />
      <QuizTest />
      <QuizTest />
      <QuizTest />
      <div className='divControlButtonBottom'>
        <Button sx={ButtonConfig2} variant='contained'>
          Previous
        </Button>
        <Button sx={ButtonConfig2} variant='contained'>
          Next
        </Button>
      </div>
    </div>
  );
}

export default ContentRightClass;
