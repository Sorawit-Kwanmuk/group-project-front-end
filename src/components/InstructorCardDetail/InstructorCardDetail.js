import './styleInstructorCard.css';
import ShoppingCardBanner from '../../public/images/shoppingCard.png';
import Button from '@mui/material/Button';
import InstructorCard from '../InstructorCard/InstructorCard';
import CourseCard from '../CourseCard/CourseCard';
import { Avatar } from '@mui/material';
import { imageConfig, buttonConfig2 } from './muiConfig';
import { useState } from 'react';
import Instructor from '../../public/images/Instructor.png';
import AreaOfExpertiseTag from './AreaOfExpertiseTag/AreaOfExpertiseTag';
function InstructorCardDetail() {
  const [image, setImage] = useState({ profileImage: '' });
  return (
    <div className='divMainInstructorCardController'>
      <div
        className='divMainHeaderInstructorCard'
        style={{
          backgroundImage: `url(${ShoppingCardBanner})`,
        }}>
        <div className='textOnInstructorCardBannerControl'>
          <h3 className='InstructorCardH3'>
            Basic JavaScript For Front - End Development
          </h3>
          <div className='InstructorCardH4Control'>
            <h4 className='InstructorCardH4'>Rating : </h4>&nbsp;&nbsp;
            <h4 className='InstructorCardH4'> 4.8 / 5</h4>
          </div>
          <div className='InstructorCardH4Control'>
            <h4 className='InstructorCardH4'>36,761</h4>&nbsp;&nbsp;
            <h4 className='InstructorCardH4'>Enrolls</h4>
          </div>
          <div>
            <p className='InstructorCardP'>
              First Step to develop dynamics website with basic JavaScript which
              is including with neccessary skill for front-end development
            </p>
          </div>
        </div>
        <div className='InstructorCardImage'>
          <Avatar
            alt='Remy Sharp'
            src={Instructor}
            sx={imageConfig}
            onClick={() => {
              setImage({ profileImage: Instructor });
            }}
          />
        </div>
      </div>
      <div className='InstructorCardContent'>
        <div className='InstructorCardContentLeft'>
          <div className='aboutThisMeControl'>
            <h4 className='aboutThisMeH4'>About Me</h4>
            <p className='aboutThisMeP'>
              First Step to develop dynamics website with basic JavaScript which
              is including with basic and neccessary skill for front-end
              development First Step to develop dynamics website with basic
              JavaScript which is including with basic and neccessary skill for
              front-end development First Step to develop dynamics website with
              basic JavaScript which is including with basic and neccessary
              skill for front-end development First Step to develop dynamics
              website with basic JavaScript which is including with basic and
              neccessary skill for front-end development
            </p>
          </div>
          <div className='grayLine'></div>
          <div className='divMoreFrontEndCourse'>
            <div className='divMoreFrontEndCourseHeader'>
              <h4 className='aboutThisMeH4'>More Front - End Course</h4>
            </div>
            <div className='InstructorCardCourseCardControl'>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>

            <div className='SeeMoreControl'>
              <p className='SeeMoreP'>{`<-- See More -->`}</p>
            </div>
          </div>
          <div className='grayLine'></div>
          <div className='divMoreFrontEndInstructor'>
            <h4 className='aboutThisMeH4'>More Front - End Instructor</h4>
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
          </div>
        </div>
        <div className='InstructorCardContentRight'>
          <h4 className='aboutThisMeH4'>Area of Expertise</h4>
          <div className='AreaOfExpertiseTagController'>
            <AreaOfExpertiseTag />
            <AreaOfExpertiseTag />
            <AreaOfExpertiseTag />
            <AreaOfExpertiseTag />
          </div>
          <div className='grayLineRight'></div>
          <div className='InstructorCardContentRightButton'>
            <Button sx={buttonConfig2} variant='contained'>
              Website
            </Button>
            <Button sx={buttonConfig2} variant='contained'>
              Email
            </Button>
            <Button sx={buttonConfig2} variant='contained'>
              Facebook
            </Button>
            <Button sx={buttonConfig2} variant='contained'>
              Youtube
            </Button>
            <Button sx={buttonConfig2} variant='contained'>
              LinkedIn
            </Button>
            <Button sx={buttonConfig2} variant='contained'>
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorCardDetail;
