import '../styleShoppingCard.css';
function BarRating() {
  return (
    <div className='divBarRatingControl'>
      <div className='BarRatingCombine'>
        <div className='BarRatingLeft'></div>
        <div className='BarRatingRight'></div>
      </div>
      <div className='BarRatingScore'>
        <p className='BarRatingScoreP'>&nbsp;&nbsp;5</p> &nbsp;&nbsp;
        <p className='BarRatingScoreP'>:</p>&nbsp;&nbsp;
        <p className='BarRatingScoreP'>21</p>&nbsp;&nbsp;
        <p className='BarRatingScoreP'>%</p>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default BarRating;
