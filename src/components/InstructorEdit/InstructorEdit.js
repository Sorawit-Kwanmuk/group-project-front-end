import './styleInstructorEdit.css';
import Button from '@mui/material/Button';
import InstructorCard from '../InstructorCard/InstructorCard';
import { Avatar, TextField } from '@mui/material';
import {
  imageConfig,
  buttonConfig2,
  buttonConfig3,
  textFieldConfig2,
} from './muiConfig';
import { useContext, useEffect, useState } from 'react';

import AreaOfExpertiseTag from './AreaOfExpertiseTag/AreaOfExpertiseTag';
import { useLocation, useParams } from 'react-router-dom';
import axios from '../../config/axios';

import DummyHeaderInst from './DummyHeader/DummyHeaderInst';
import { CategoryContext } from '../../contexts/categoryContext';
function InstructorEdit() {
  const [i, setI] = useState(5);
  const handleClickSeeMore = () => {
    setI(i + 3);
  };
  const [instructor, setInstructor] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchDataInstructorCardById = async () => {
      const response = await axios.get(`/instructor/${params.id}`);
      // console.log(response.data.instructorResult);
      setInstructor(response.data.instructorResult);
    };
    fetchDataInstructorCardById();
  }, []);
  return (
    <div className='divMainInstructorEditController'>
      <div className='divH2InstructorEdit'>
        <h2 className='InstructorEditH2'>Instructor Edit System</h2>
      </div>
      {/* <DummyHeaderInst item={instructor} setImage={setImage} /> */}
      <DummyHeaderInst item={instructor} />

      <div className='InstructorEditContent'>
        <div className='InstructorEditContentLeft'>
          <div className='aboutThisMeControl'>
            <h4 className='aboutThisMeH4'>About Me</h4>
            <TextField
              id='outlined-multiline-static'
              sx={buttonConfig3}
              label='Bio ( Max. 500 Character)'
              multiline
              rows={6}
            />
          </div>
          <div className='grayLine'></div>
          <div className='divMoreFrontEndCourse'>
            <div className='divMoreFrontEndCourseHeader'>
              <h4 className='aboutThisMeH4'>My Course</h4>
            </div>
            <div className='InstructorEditCourseCardControl'>
              {/* {instructorTopics
                ?.filter((item, index) => index < i)
                .map(item => (
                  <CourseCard key={item.id} item={item} />
                ))} */}
            </div>

            <div className='SeeMoreControl'>
              <p className='SeeMoreP' onClick={handleClickSeeMore}>
                {`<-- See More -->`}
              </p>
            </div>
          </div>
          <div className='grayLine'></div>
        </div>
        <div className='InstructorEditContentRight'>
          <h4 className='aboutThisMeH4'>Area of Expertise</h4>
          <div className='AreaOfExpertiseTagController'>
            <TextField
              id='outlined-multiline-static'
              sx={(buttonConfig3, { width: '80%' })}
              label='Bio ( Max. 100 Character)'
              multiline
              rows={6}
            />
          </div>
          <div className='grayLineRight'></div>
          <TextField
            id='outlined-basic'
            label='Website'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Email'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Facebook'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Youtube'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Linkedin'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <TextField
            id='outlined-basic'
            label='Twitter'
            sx={textFieldConfig2}
            size='small'
            variant='outlined'
          />
          <div className='InstructorEditContentRightButton'></div>
        </div>
      </div>
    </div>
  );
}

export default InstructorEdit;
