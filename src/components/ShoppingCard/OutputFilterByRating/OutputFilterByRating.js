import '../styleShoppingCard.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function OutputFilterByRating({ item }) {
  const { commentName, rating, commentBody, createdAt } = item;
  // console.log('item: ', item);
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
        <h4 className='OutputFilterByRatingScoreH4'>{commentName}</h4>
      </div>
      <div className='OutputFilterByRatingScore'>
        <p className='OutputFilterByRatingScoreP'>{rating}</p> &nbsp;&nbsp;
        <p className='OutputFilterByRatingScoreP'>Score:</p> &nbsp;
        <p className='OutputFilterByRatingScoreP'>({createdAt.slice(0, 10)})</p>
      </div>
      <div className='OutputFilterByRatingComment'>
        <p className='OutputFilterByRatingScoreP'>{commentBody}</p>
      </div>
    </div>
  );
}

export default OutputFilterByRating;
