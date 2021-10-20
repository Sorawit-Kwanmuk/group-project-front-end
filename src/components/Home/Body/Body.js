import CourseCard from '../../CourseCard/CourseCard';
import './styleBody.css';
function Body() {
  return (
    <div>
      <div className='divBodyHome'>
        <label className='label_mostPopular'>Most Popular</label>
        <div className='popular_item_controller'>
          <div className='popular_item'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
        <div>
          <label className='label_sale'>Sale!</label>
          <div className='popular_item_controller'>
            <div className='sale_item'>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
