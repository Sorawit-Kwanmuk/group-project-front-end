import './styleBaner.css';
import banner from '../../../public/images/banner.PNG';
function Banner() {
  return (
    <div className='homeBanner'>
      <img className='homeBanner' src={banner} alt='' />
    </div>
  );
}

export default Banner;
