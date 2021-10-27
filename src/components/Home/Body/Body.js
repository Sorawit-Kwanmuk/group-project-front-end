import { useContext, useEffect, useState } from 'react';
import axios from '../../../config/axios';
import { CourseContext } from '../../../contexts/courseContext';
import CourseCard from '../../CourseCard/CourseCard';
import './styleBody.css';

function Body() {
  const {
    courseByRating,
    setCourseByRating,
    courseByPromotion,
    setCourseByPromotion,
  } = useContext(CourseContext);
  // console.log('courseByRating At Home:', courseByRating);
  return (
    <div>
      <div className='divBodyHome'>
        <label className='label_mostPopular'>Most Popular</label>
        <div className='popular_item_controller'>
          <div className='popular_item'>
            {courseByRating
              ?.filter((item, index) => index < 4)
              .map(item => (
                <CourseCard key={item.id} item={item} />
              ))}
          </div>
        </div>
        <div>
          <label className='label_sale'>Sale!</label>
          <div className='popular_item_controller'>
            <div className='sale_item'>
              {courseByPromotion
                ?.filter((item, index) => index < 4)
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
