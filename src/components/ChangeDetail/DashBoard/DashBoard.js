import './styleDashBoard.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import CoursesCardStatus from './CoursesCardStatus/CoursesCardStatus';
function DashBoard() {
  const [alignment, setAlignment] = useState('left');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <>
      <div>
        <div>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label='text alignment'>
            <ToggleButton value='1' aria-label='left aligned'>
              All Courses
            </ToggleButton>
            <ToggleButton value='2' aria-label='centered'>
              Active Courses
            </ToggleButton>
            <ToggleButton value='3' aria-label='right aligned'>
              Completed Courses
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className='grayLine'></div>
        <div>
          <CoursesCardStatus />
          <CoursesCardStatus />
          <CoursesCardStatus />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
