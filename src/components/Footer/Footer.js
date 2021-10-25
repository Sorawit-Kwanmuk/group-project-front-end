import './styleFooter.css';
import iconFacebook from '../../public/images/facebook.png';
import iconYoutube from '../../public/images/youtube.png';
import iconTwitter from '../../public/images/twitter.png';
import iconLine from '../../public/images/line.png';

function Footer() {
  return (
    <div className='FooterItem'>
      <div className='leftItemFooter'>
        <p>© CloneCampThailand, Inc. 2021.</p>
        <p>Email : CloneCamp@gmail.com</p>
        <p>Mobile No. 089 - 876 - 5432</p>
      </div>
      <div className='rightItemFooter'>
        <p>Connect with us</p>
        <div className='connectIcon'>
          <img src={iconFacebook} alt='' />
          <img src={iconYoutube} alt='' />
          <img src={iconTwitter} alt='' />
          <img src={iconLine} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
