import "./styleBaner.css";
// import banner from '../../../public/images/banner.PNG';

function Banner({ getImg }) {
  return (
    <div className="homeBanner">
      <img className="homeBanner" src={getImg} alt="" />
    </div>
  );
}

export default Banner;
