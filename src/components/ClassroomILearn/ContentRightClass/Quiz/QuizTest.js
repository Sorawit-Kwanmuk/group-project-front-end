import '../../styleClassroomILearn.css';
import { ToggleButtonGroupConfig, ToggleButtonConfig2 } from '../../muiConfig';

import { useState } from 'react';
import { Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function QuizTest() {
  const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div className='mailDivControlQuiz'>
      <div className='quizTop'>
        <h3>1.</h3>
        <h3>What is the meaning of HTML</h3>
      </div>
      <div className='divChoiceQuiz'>
        <ToggleButtonGroup
          orientation='vertical'
          value={view}
          size='small'
          sx={ToggleButtonGroupConfig}
          exclusive
          onChange={handleChange}>
          <ToggleButton
            size='small'
            value='1'
            aria-label='list'
            sx={ToggleButtonConfig2}>
            <h4 className="quizH4">A.</h4>
            <p className='quizP'>Answer</p>
          </ToggleButton>
          <ToggleButton
            size='small'
            value='2'
            aria-label='module'
            sx={ToggleButtonConfig2}>
            <h4 className="quizH4">B.</h4>
            <p className='quizP'>Answer</p>
          </ToggleButton>
          <ToggleButton
            size='small'
            value='3'
            aria-label='module'
            sx={ToggleButtonConfig2}>
            <h4 className="quizH4">C.</h4>
            <p className='quizP'>Answer</p>
          </ToggleButton>
          <ToggleButton
            size='small'
            value='4'
            aria-label='quilt'
            sx={ToggleButtonConfig2}>
            <h4 className="quizH4">D.</h4>
            <p className='quizP'>Answer</p>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default QuizTest;
