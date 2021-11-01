import "./styleFooter.css";
import iconFacebook from "../../public/images/facebook.png";
import iconYoutube from "../../public/images/youtube.png";
import iconTwitter from "../../public/images/twitter.png";
import iconLine from "../../public/images/line.png";

const initData = {
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.240787727475!2d100.5147665248554!3d13.745056245627854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994d0b8d7e6b%3A0x75f3888fdec83b87!2sMint%20Tower!5e0!3m2!1sen!2sth!4v1634896022779!5m2!1sen!2sth",
  address: "719 ถนน บรรทัดทอง Wang Mai, Pathum Wan District, Bangkok 10330",
  email: "clonecamp@gmail.com",
  phone: "+6689-876-5432",
  facebookLink: "https://web.facebook.com/?_rdc=1&_rdr",
  youtubeLink: "https://www.youtube.com/",
  twitterLink: "https://twitter.com/?lang=en",
  lineLink: "https://line.me/en/"
};

function Footer() {
  const contactInfo = initData;

  return (
    <div className="FooterItem">
      <div className="leftItemFooter">
        <p>© CloneCampThailand, Inc. 2021.</p>
        <p>{`Email: ${contactInfo.email}`}</p>
        <p>{`Phone: ${contactInfo.phone}`}</p>
      </div>
      <div className="rightItemFooter">
        <p>Connect with us</p>
        <div className="connectIcon">
          <a href={`${contactInfo.facebookLink}`} alt="facebook-link">
            <img src={iconFacebook} alt="" />
          </a>
          <a href={`${contactInfo.youtubeLink}`} alt="youtube-link">
            <img src={iconYoutube} alt="" />
          </a>
          <a href={`${contactInfo.twitterLink}`} alt="twitter-link">
            <img src={iconTwitter} alt="" />
          </a>
          <a href={`${contactInfo.lineLink}`} alt="line-link">
            <img src={iconLine} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
