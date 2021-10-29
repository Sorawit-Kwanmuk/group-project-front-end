import './styleClassroomILearn.css';

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
