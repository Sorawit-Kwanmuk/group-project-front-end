import { Button } from '@mui/material';
import '../styleShoppingCard.css';
function ShoppingCardFixed({ item }) {
  console.log('item: ', item);
  return (
    <div className='ShoppingCardFixed'>
      <div className='ShoppingCardIframeControl'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/zCQnedpbBM0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <div className='ShoppingCardPrice'>
        {item.discountRate ? (
          <>
            <div className='PriceControl'style={{alignItems.center}}>
              <h2 className='ShoppingCardPriceH2'>
                {item.price - (item.price * item.discountRate) / 100} THB
              </h2>
              <div className='PriceDetail'>
                <p className='PriceDetailP'>{item.price} THB</p>
                <div className='grayLineMini'></div>
                <p className='PriceDetailP'>({item.discountRate}% off)</p>
              </div>
            </div>
            <div className='SellOffDurationDate'>
              <p className='SellOffDurationDateP'>
                This price until {item.discountUntil}
              </p>
            </div>
          </>
        ) : (
          <div className='PriceControl'>
            <h2 className='ShoppingCardPriceH2' style={{ color: 'gray' }}>
              {item.price} THB
            </h2>
          </div>
        )}
        <div
          className='ShoppingCardPriceButton'
          style={{ alignItems: 'center' }}>
          <Button sx={{ margin: 'auto' }} variant='contained' color='success'>
            Buy Now
          </Button>
        </div>
      </div>
      <div className='ThisCourseIncludes'>
        <h4 className='ThisCourseIncludesH4'>This course includes :</h4>
        <p className='ThisCourseIncludesP'>15 chapters</p>
        <p className='ThisCourseIncludesP'>50 hours on-demand video</p>
        <p className='ThisCourseIncludesP'>24 downloadable resourse</p>
        <p className='ThisCourseIncludesP'>2 months access</p>
        <p className='ThisCourseIncludesP'>Certificate of completion</p>
      </div>
    </div>
  );
}

export default ShoppingCardFixed;
