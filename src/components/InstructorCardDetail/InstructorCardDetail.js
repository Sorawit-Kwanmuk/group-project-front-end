import './styleInstructorCard.css';
import ShoppingCardBanner from '../../public/images/shoppingCard.png';
import Button from '@mui/material/Button';
import InstructorCard from '../InstructorCard/InstructorCard';
import CourseCard from '../CourseCard/CourseCard';
import { Avatar } from '@mui/material';
import { imageConfig, buttonConfig2 } from './muiConfig';
import { useContext, useEffect, useState } from 'react';
import Instructor from '../../public/images/Instructor.png';
import AreaOfExpertiseTag from './AreaOfExpertiseTag/AreaOfExpertiseTag';
import { useLocation, useParams } from 'react-router-dom';
import axios from '../../config/axios';
import { ToggleContext } from '../../contexts/toggleContext';
import DummyHeaderLocation from './DummyHeader/DummyHeaderLocation';
import DummyHeaderInst from './DummyHeader/DummyHeaderInst';
function InstructorCardDetail() {
  const [image, setImage] = useState({ profileImage: '' });
  const [instructor, setInstructor] = useState({});
  const [instructorByInsId, setInstructorByInsId] = useState([]);
  const [instructorTopics, setInstructorTopics] = useState([]);
  const [i, setI] = useState(5);
  const [instructorFront, setInstructorFront] = useState([]);
  const [instructorBack, setInstructorBack] = useState([]);
  const [instructorUxUi, setInstructorUxUi] = useState([]);
  const { toggle, setToggle } = useContext(ToggleContext);
  const [firstLoad, setFirstLoad] = useState(false);
  const params = useParams();
  const location = useLocation();

  // console.log('location', location.state);
  useEffect(() => {
    const fetchDataInstructorById = async () => {
      try {
        const response = await axios.get(`/instructor/${params.id}`);
        const response2 = await axios.get(`/topic/ins/${params.id}`);
        const response3 = await axios.get(`/insCat/byinstructor/${params.id}`);
        const newArr = response3.data.result.map(item => item.categoryId);

        setInstructor(response.data.instructorResult);
        setInstructorTopics(response2.data.result);
        setInstructorByInsId(newArr);
        // console.log('res: ', response.data.instructorResult);
        if (newArr.includes(1)) {
          const response4 = await axios.get(`/insCat/bycat/${1}`);
          setInstructorFront(response4.data.result);
        }
        if (newArr.includes(2)) {
          const response5 = await axios.get(`/insCat/bycat/${2}`);
          setInstructorBack(response5.data.result);
        }
        if (newArr.includes(3)) {
          const response6 = await axios.get(`/insCat/bycat/${3}`);
          setInstructorUxUi(response6.data.result);
        }
        setToggle(currentToggle => !currentToggle);
        setFirstLoad(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataInstructorById();
  }, []);

  const handleClickToWebsite = () => {
    window.open(instructor.website, '_blank');
  };
  const handleClickSeeMore = () => {
    setI(i + 3);
  };
  const handleClickToEmail = () => {
    window.location.href = `mailto:${instructor.email}?subject=Offer Inquiry&cc=support@email.com&bcc=info@company.com&body=test mail send massage`;
  };

  // console.log('instructorFront: ', instructorFront);
  // console.log('instructorBack: ', instructorBack);
  // console.log('instructorUxUi: ', instructorUxUi);
  // console.log('instructorTopics: ', instructorTopics);
  return (
    <div className='divMainInstructorCardController'>
      {/* <DummyHeaderInst item={instructor} setImage={setImage} /> */}
      <DummyHeaderInst item={location.state} setImage={setImage} />

      <div className='InstructorCardContent'>
        <div className='InstructorCardContentLeft'>
          <div className='aboutThisMeControl'>
            <h4 className='aboutThisMeH4'>About Me</h4>
            <p className='aboutThisMeP'>{instructor.about}</p>
          </div>
          <div className='grayLine'></div>
          <div className='divMoreFrontEndCourse'>
            <div className='divMoreFrontEndCourseHeader'>
              <h4 className='aboutThisMeH4'>My Course</h4>
            </div>
            <div className='InstructorCardCourseCardControl'>
              {instructorTopics
                ?.filter((item, index) => index < i)
                .map(item => (
                  <CourseCard key={item.id} item={item} />
                ))}
            </div>

            <div className='SeeMoreControl'>
              <p className='SeeMoreP' onClick={handleClickSeeMore}>
                {`<-- See More -->`}
              </p>
            </div>
          </div>
          <div className='grayLine'></div>
          {instructorFront.length !== 0 && (
            <div className='divMoreFrontEndInstructor'>
              <h4 className='aboutThisMeH4'>More Front - End Instructor</h4>
              {instructorFront
                ?.filter((item, index) => index < 4)
                .map(item => (
                  <InstructorCard key={item.id} item={item} />
                ))}
            </div>
          )}
          {instructorBack.length !== 0 && (
            <div className='divMoreFrontEndInstructor'>
              <h4 className='aboutThisMeH4'>More Back - End Instructor</h4>
              {instructorBack
                ?.filter((item, index) => index < 4)
                .map(item => (
                  <InstructorCard key={item.id} item={item} />
                ))}
            </div>
          )}
          {instructorUxUi.length !== 0 && (
            <div className='divMoreFrontEndInstructor'>
              <h4 className='aboutThisMeH4'>More UX/UI Instructor</h4>
              {instructorUxUi
                ?.filter((item, index) => index < 4)
                .map(item => (
                  <InstructorCard key={item.id} item={item} />
                ))}
            </div>
          )}
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
            <Button
              sx={buttonConfig2}
              variant='contained'
              onClick={handleClickToWebsite}>
              Website
            </Button>
            <Button
              sx={buttonConfig2}
              variant='contained'
              onClick={handleClickToEmail}>
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
