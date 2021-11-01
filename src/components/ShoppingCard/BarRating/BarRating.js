import '../styleShoppingCard.css';
function BarRating({ item, sumRating }) {
  // console.log('item: ', item);
  // console.log('sumRating: ', sumRating);
  return (
    <div className='divBarRatingControl'>
      <div className='BarRatingCombine'>
        <div
          style={{ width: `${(item.length / sumRating) * 100}%` }}
          className='BarRatingLeft'></div>
        <div
          style={{ width: `${100 - (item.length / sumRating) * 100}%` }}
          className='BarRatingRight'></div>
      </div>
      <div className='BarRatingScore'>
        <p className='BarRatingScoreP'>&nbsp;&nbsp;{item[0]}</p> &nbsp;&nbsp;
        <p className='BarRatingScoreP'>:</p>&nbsp;&nbsp;
        <p className='BarRatingScoreP'>
          {((item.length / sumRating) * 100).toFixed(0)}
        </p>
        &nbsp;&nbsp;
        <p className='BarRatingScoreP'>%</p>&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default BarRating;
