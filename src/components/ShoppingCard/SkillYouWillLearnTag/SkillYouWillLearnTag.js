import '../styleShoppingCard.css';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';

function SkillYouWillLearnTag() {
  return (
    <div className='skillYouWillLearnTag'>
      <p className='skillYouWillLearnPControl'>
        JavaScript
        <LocalOfferRoundedIcon sx={{ marginX: '0px', width: '20px' }} />
      </p>
    </div>
  );
}

export default SkillYouWillLearnTag;
