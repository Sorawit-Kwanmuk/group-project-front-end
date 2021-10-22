import '../styleClassroomILearn.css';
import Button from '@mui/material/Button';
import { ButtonConfig } from '../muiConfig';
function ContentRightClass() {
  return (
    <div className='mainDivControllerContentRightClass'>
      <div className='navBarContentRightClass'>
        <Button variant='myCourse' sx={ButtonConfig}>
          My Course
        </Button>
        <div className='textLabelContentRightClass'>HTML - Element / Tag</div>
        <Button variant='completed' sx={ButtonConfig}>
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
      <div className='VideoClassroomController'>
        <iframe
          className='iframeClassroomVideo'
          src='https://www.youtube.com/embed/0hfeNPM7piw'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
      <div className='divControlButtonBottom'>
        <Button variant='contained'>Previ</Button>
        <Button variant='contained'>Contained</Button>
      </div>
    </div>
  );
}

export default ContentRightClass;
