import { useEffect, useState } from 'react';
import axios from '../../../config/axios';
import CourseCard from '../../CourseCard/CourseCard';
import './styleBody.css';

function Body() {
  const [courseRatingHome, setCourseRatingHome] = useState([]);
  const [coursePromotionHome, setCoursePromotionHome] = useState([]);
  console.log('courseRatingHome: ', courseRatingHome);
  console.log('coursePromotionHome: ', coursePromotionHome);
  useEffect(() => {
    const fetchDataAllCourseForHome = async () => {
      try {
        const res = await axios.get('/course/byrating');
        // console.log(res);
        setCourseRatingHome(res.data.courseResult);
        const res2 = await axios.get('/course/bypromotion');
        setCoursePromotionHome(res2.data.courseResult);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAllCourseForHome();
  }, []);
  return (
    <div>
      <div className='divBodyHome'>
        <label className='label_mostPopular'>Most Popular</label>
        <div className='popular_item_controller'>
          <div className='popular_item'>
            {courseRatingHome
              .filter((item, index) => index < 4)
              .map(item => (
                <CourseCard key={item.id} item={item} />
              ))}
          </div>
        </div>
        <div>
          <label className='label_sale'>Sale!</label>
          <div className='popular_item_controller'>
            <div className='sale_item'>
              {coursePromotionHome
                .filter((item, index) => index < 4)
                .map(item => (
                  <CourseCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
