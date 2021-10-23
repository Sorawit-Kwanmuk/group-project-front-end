import { Button } from '@mui/material';
import '../styleShoppingCard.css';
function ShoppingCardFixed() {
  return (
    <div className='ShoppingCardFixed'>
      <div className='ShoppingCardIframeControl'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/zCQnedpbBM0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
      <div className='ShoppingCardPrice'>
        <div className='PriceControl'>
          <h2 className='ShoppingCardPriceH2'>1,500 THB</h2>
          <div className='PriceDetail'>
            <p className='PriceDetailP'>3,000 THB</p>
            <div className='grayLineMini'></div>
            <p className='PriceDetailP'>(50% off)</p>
          </div>
        </div>
        <div className='SellOffDurationDate'>
          <p className='SellOffDurationDateP'>This price until 27-11-2021</p>
        </div>
        <div className='ShoppingCardPriceButton'>
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
