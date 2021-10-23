import '../styleShoppingCard.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function OutputFilterByRating() {
  return (
    <div className='OutputFilterByRatingControl'>
      <div className='FiberManualRecordIconControl'>
        <div className='FiberManualRecordIconGreen'>
          <FiberManualRecordIcon sx={{ color: 'green', margin: '0px' }} />
        </div>
        <div className='FiberManualRecordIconRed'>
          <FiberManualRecordIcon sx={{ color: 'red', margin: '0px' }} />
        </div>
      </div>
      <div className='OutputFilterByRatingName'>
        <h4 className='OutputFilterByRatingScoreH4'>KetchupBoy1996</h4>
      </div>
      <div className='OutputFilterByRatingScore'>
        <p className='OutputFilterByRatingScoreP'>4</p> &nbsp;&nbsp;
        <p className='OutputFilterByRatingScoreP'>Score:</p> &nbsp;
        <p className='OutputFilterByRatingScoreP'>(17-10-21)</p>
      </div>
      <div className='OutputFilterByRatingComment'>
        <p className='OutputFilterByRatingScoreP'>
          This course is a good way to start programming with JavaScript
          framework that easy for newbies
        </p>
      </div>
    </div>
  );
}

export default OutputFilterByRating;
