import './styleShoppingCard.css';
import shoppingCardBanner from '../../public/images/shoppingCard.png';
import Button from '@mui/material/Button';
import { ButtonConfig, ToggleButtonConfig } from './muiConfig';
import SkillYouWillLearnTag from './SkillYouWillLearnTag/SkillYouWillLearnTag';
import InstructorCard from '../InstructorCard/InstructorCard';
import NevBarLeftList from '../ClassroomILearn/NevBarLeftList/NevBarLeftList';
import BarRating from './BarRating/BarRating';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import OutputFilterByRating from './OutputFilterByRating/OutputFilterByRating';
import CourseCard from '../CourseCard/CourseCard';
import ShoppingCardFixed from './ShoppingCardFixed/ShoppingCardFixed';

function ShoppingCard() {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='divMainShoppingCardController'>
      <div
        className='divMainHeaderShoppingCard'
        style={{
          backgroundImage: `url(${shoppingCardBanner})`,
        }}>
        <div className='textOnShoppingCardBannerControl'>
          <h3 className='ShoppingCardH3'>
            Basic JavaScript For Front - End Development
          </h3>
          <div className='ShoppingCardH4Control'>
            <h4 className='ShoppingCardH4'>Rating : </h4>&nbsp;&nbsp;
            <h4 className='ShoppingCardH4'> 4.8 / 5</h4>
          </div>
          <div className='ShoppingCardH4Control'>
            <h4 className='ShoppingCardH4'>36,761</h4>&nbsp;&nbsp;
            <h4 className='ShoppingCardH4'>Enrolls</h4>
          </div>
          <div>
            <p className='ShoppingCardP'>
              First Step to develop dynamics website with basic JavaScript which
              is including with neccessary skill for front-end development
            </p>
          </div>
        </div>
      </div>
      <div className='nevBarInShoppingCard'>
        <Button sx={ButtonConfig} variant='text'>
          About
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          Instructor
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          Syllabus
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          Reviews
        </Button>
      </div>
      <div className='aboutThisCourseControl'>
        <h4 className='aboutThisCourseH4'>About This Course</h4>
        <p className='aboutThisCourseP'>
          First Step to develop dynamics website with basic JavaScript which is
          including with basic and neccessary skill for front-end development
          First Step to develop dynamics website with basic JavaScript which is
          including with basic and neccessary skill for front-end development
          First Step to develop dynamics website with basic JavaScript which is
          including with basic and neccessary skill for front-end development
          First Step to develop dynamics website with basic JavaScript which is
          including with basic and neccessary skill for front-end development
        </p>
      </div>
      <div className='skillYouWillLearnConTrol'>
        <h4 className='aboutThisCourseH4'>Skill you'll learn</h4>
        <div className='skillYouWillLearnTagController'>
          <SkillYouWillLearnTag />
          <SkillYouWillLearnTag />
          <SkillYouWillLearnTag />
          <SkillYouWillLearnTag />
        </div>
      </div>
      <div className='grayLine'></div>
      <div className='divInstructorController'>
        <h4 className='aboutThisCourseH4'>Instructor</h4>
        <InstructorCard />
        <InstructorCard />
      </div>
      <div className='grayLine'></div>
      <div className='divSyllabusCourseContent'>
        <h4 className='aboutThisCourseH4'>Syllabus - Course Content</h4>
        <NevBarLeftList />
        <NevBarLeftList />
        <NevBarLeftList />
        <NevBarLeftList />
      </div>
      <div className='grayLine'></div>
      <div className='divStudentFeedback'>
        <h4 className='aboutThisCourseH4'>Student Feedback</h4>
        <div className='divStudentFeedbackControl'>
          <div className='divLeftStudentFeedback'>
            <h1 className='divStudentFeedbackH1'>4.8</h1>
            <div className='CountReviews'>
              <p>2,456</p> &nbsp;&nbsp;
              <p>Reviews</p>
            </div>
          </div>
          <div className='divRightStudentFeedback'>
            <div className='barRating'>
              <BarRating />
              <BarRating />
              <BarRating />
              <BarRating />
              <BarRating />
            </div>
          </div>
        </div>
      </div>

      <div className='divStudentFeedbackComment'>
        <div className='filterCommentByRating'>
          <ToggleButtonGroup
            color='primary'
            value={alignment}
            sx={{
              width: '100%',
            }}
            exclusive
            onChange={handleChange}>
            <ToggleButton sx={ToggleButtonConfig} value=''>
              All
            </ToggleButton>
            <ToggleButton sx={ToggleButtonConfig} value='5'>
              5
            </ToggleButton>
            <ToggleButton sx={ToggleButtonConfig} value='4'>
              4
            </ToggleButton>
            <ToggleButton sx={ToggleButtonConfig} value='3'>
              3
            </ToggleButton>
            <ToggleButton sx={ToggleButtonConfig} value='2'>
              2
            </ToggleButton>
            <ToggleButton sx={ToggleButtonConfig} value='1'>
              1
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className='outputFilterCommentByRating'>
          <OutputFilterByRating />
          <OutputFilterByRating />
          <OutputFilterByRating />
          <OutputFilterByRating />
        </div>
        <div className='SeeMoreControl'>
          <p className='SeeMoreP'>{`<-- See More -->`}</p>
        </div>
      </div>
      <div className='grayLine'></div>
      <div className='divMoreFrontEndCourse'>
        <div className='divMoreFrontEndCourseHeader'>
          <h4 className='aboutThisCourseH4'>More Front - End Course</h4>
        </div>
        <CourseCard />
        <CourseCard />
      </div>
      <ShoppingCardFixed />
    </div>
  );
}

export default ShoppingCard;
