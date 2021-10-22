import './styleClassroomILearn.css';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { useState } from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { ToggleButtonConfig, ListItemTextConfig } from './muiConfig';
import NevBarLeftList from './NevBarLeftList/NevBarLeftList';
import ContentRightClass from './ContentRightClass/ContentRightClass';
function ClassroomILearn() {
  return (
    <div className='mainDivClassroomILearn'>
      <div className='divLessonList'>
        <h3 className='ClassroomILearnH3'>Lesson List</h3>

        <NevBarLeftList />
        <NevBarLeftList />
        <NevBarLeftList />
      </div>
      <div className='divRightClassroomILearn'>
        <ContentRightClass />
      </div>
    </div>
  );
}

export default ClassroomILearn;
