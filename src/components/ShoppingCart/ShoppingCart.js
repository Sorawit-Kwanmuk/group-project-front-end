import './styleShoppingCart.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import { imageConfig } from './muiConfig';
import { useState } from 'react';

function ShoppingCart() {
  const [image, setImage] = useState({ profileImage: '' });

  return (
    <>
      <div className='mainDivShoppingCartController'>
        <div className='ShoppingCartConTroller'>
          <div className='ShoppingCartTop'>
            <Avatar
              className='ShoppingCartAvatar'
              alt='Remy Sharp'
              src={John}
              sx={imageConfig}
              onClick={() => {
                setImage({ profileImage: John });
              }}
            />
            <h1 className='ShoppingCartH1'>Username</h1>
          </div>
          <div className='grayLine'></div>
        </div>
        <div className='shoppingCartBottom'>
          <div className='CoursesInCart'>
            <div className='CoursesInCartHeader'>
              <h2>Shopping Cart</h2>
            </div>
            <div className='grayLine'></div>
            <div className='MockUpCourseCard'></div>
          </div>
          <div className='inputPayment'></div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
