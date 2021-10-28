import './styleShoppingCard.css';
import shoppingCardBanner from '../../public/images/shoppingCard.png';
import Button from '@mui/material/Button';
import { ButtonConfig, ToggleButtonConfig } from './muiConfig';
import InstructorCard from '../InstructorCard/InstructorCard';
import NevBarLeftList from '../ClassroomILearn/NevBarLeftList/NevBarLeftList';
import BarRating from './BarRating/BarRating';
import { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import OutputFilterByRating from './OutputFilterByRating/OutputFilterByRating';
import CourseCard2 from '../CourseCard/CourseCard2';
import ShoppingCardFixed from './ShoppingCardFixed/ShoppingCardFixed';
import axios from '../../config/axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
function ShoppingCard() {
  const [alignment, setAlignment] = useState('web');
  const [shoppingCard, setShoppingCard] = useState([]);
  const [shoppingCardTopic, setShoppingCardTopic] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [i, setI] = useState(3);
  const [courseCatOne, setCourseCatOne] = useState([]);
  const [courseCatTwo, setCourseCatTwo] = useState([]);
  const [courseCatThree, setCourseCatThree] = useState([]);
  // console.log('shoppingCard: ', shoppingCard);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const params = useParams();

  useEffect(() => {
    const fetchDataShoppingCard = async () => {
      try {
        const response = await axios.get(`/course/${params.id}`);
        const response2 = await axios.get(
          `/comment/all/${response.data.courseResult.id}`
        );
        const response3 = await axios.get(
          `/courseCat/bycourse/${response.data.courseResult.id}`
        );
        setShoppingCard(response.data.courseResult);
        setAllComment(response2.data.result);

        // console.log('response2: ', response2.data.result);
        // console.log('response: ', response.data.courseResult.id);
        // console.log('shoppingCard: ', shoppingCard.Topics);
        // console.log(Array.isArray(response.data.courseResult.Topics));
        setShoppingCardTopic(
          response.data.courseResult.Topics.map(item => item)
        );

        const newArr = response3.data.result.map(item => item.categoryId);

        if (newArr.includes(1)) {
          const response4 = await axios.get(`/courseCat/bycat/${1}`);
          const result = response4.data.result;
          console.log(result);
          // const response5 = await axios.get(`/course/${result}`);
          setCourseCatOne(response4.data.result);
        }
        if (newArr.includes(2)) {
          const response5 = await axios.get(`/courseCat/bycat/${2}`);
          setCourseCatTwo(response5.data.result);
        }
        if (newArr.includes(3)) {
          const response6 = await axios.get(`/courseCat/bycat/${3}`);
          setCourseCatThree(response6.data.result);
        }
      } catch (error) {
        console.dir(error);
      }
    };
    fetchDataShoppingCard();
  }, []);
  const handleClickSeeMore = () => {
    setI(i + 3);
  };
  // console.log('courseCatOne: ', courseCatOne);
  // console.log('shoppingCard: ', shoppingCard.Topics);
  // console.log('shoppingCardFixed: ', shoppingCardFixed);
  console.log('shoppingCard: ', shoppingCard);
  return (
    <div className='divMainShoppingCardController'>
      <div
        className='divMainHeaderShoppingCard'
        style={{
          backgroundImage: `url(${shoppingCardBanner})`,
        }}>
        <div className='textOnShoppingCardBannerControl'>
          <h3 className='ShoppingCardH3'>{shoppingCard.courseName}</h3>
          <div className='ShoppingCardH4Control'>
            <h4 className='ShoppingCardH4'>Rating : </h4>&nbsp;&nbsp;
            <h4 className='ShoppingCardH4'> {shoppingCard.rating} / 5</h4>
          </div>
          <div className='ShoppingCardH4Control'>
            <h4 className='ShoppingCardH4'>{shoppingCard.ratingAmount}</h4>
            &nbsp;&nbsp;
            <h4 className='ShoppingCardH4'>Enrolls</h4>
          </div>
          <div>
            <p className='ShoppingCardP'>{shoppingCard.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className='nevBarInShoppingCard'>
        <Button sx={ButtonConfig} variant='text'>
          <a href='#about'>About</a>
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          <a href='#studentFeedback'>Instructor</a>
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          Syllabus
        </Button>
        <Button sx={ButtonConfig} variant='text'>
          Reviews
        </Button>
      </div>
      <div id='about' className='aboutThisCourseControl'>
        <h4 className='aboutThisCourseH4'>About This Course</h4>
        <p className='aboutThisCourseP'>{shoppingCard.about}</p>
      </div>
      <div className='grayLine'></div>
      <div className='divInstructorController'>
        <h4 className='aboutThisCourseH4'>Instructor</h4>
        {shoppingCardTopic
          ?.filter((item, index) => index < 4)
          .map(item => (
            <InstructorCard key={item.id} item={item} />
          ))}
      </div>
      <div className='grayLine'></div>
      <div className='divSyllabusCourseContent'>
        <h4 className='aboutThisCourseH4'>Syllabus - Course Content</h4>

        {shoppingCardTopic.map(item => (
          <NevBarLeftList key={item.id} item={item} />
        ))}
      </div>
      <div className='grayLine'></div>
      <div id='studentFeedback' className='divStudentFeedback'>
        <h4 className='aboutThisCourseH4'>Student Feedback</h4>
        <div className='divStudentFeedbackControl'>
          <div className='divLeftStudentFeedback'>
            <h1 className='divStudentFeedbackH1'>{shoppingCard.rating}</h1>
            <div className='CountReviews'>
              <p>{shoppingCard.ratingAmount}</p> &nbsp;&nbsp;
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
          {allComment
            ?.filter((item, index) => index < i)
            .map(item => (
              <OutputFilterByRating key={item.id} item={item} />
            ))}
        </div>
        <div className='SeeMoreControl'>
          <p
            className='SeeMoreP'
            onClick={handleClickSeeMore}>{`<-- See More -->`}</p>
        </div>
      </div>
      <div className='grayLine'></div>
      <div className='divMoreFrontEndCourse'>
        {courseCatOne.length > 0 && (
          <div className='divMoreFrontEndCourseHeader'>
            <h4 className='aboutThisCourseH4'>More Front - End Course</h4>
          </div>
        )}
        {courseCatOne.length > 0 &&
          courseCatOne
            ?.filter((item, index) => index < 3)
            .map(item => <CourseCard2 key={item.id} item={item} />)}
        {courseCatTwo.length > 0 && (
          <div className='divMoreFrontEndCourseHeader'>
            <h4 className='aboutThisCourseH4'>More Back - End Course</h4>
          </div>
        )}
        {courseCatTwo.length > 0 &&
          courseCatTwo
            ?.filter((item, index) => index < 3)
            .map(item => <CourseCard2 key={item.id} item={item} />)}
        {courseCatThree.length > 0 && (
          <div className='divMoreFrontEndCourseHeader'>
            <h4 className='aboutThisCourseH4'>More UX/UI Course</h4>
          </div>
        )}
        {courseCatThree.length > 0 &&
          courseCatThree
            ?.filter((item, index) => index < 3)
            .map(item => <CourseCard2 key={item.id} item={item} />)}
      </div>
      <ShoppingCardFixed item={shoppingCard} />
    </div>
  );
}

export default ShoppingCard;
