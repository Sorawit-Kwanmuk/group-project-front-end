import './styleShoppingCart.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import { imageConfig } from './muiConfig';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MuiPickersUtilsProvider from '@material-ui/pickers';

function ShoppingCart() {
  const [image, setImage] = useState({ profileImage: '' });
  const [payment, setPayment] = useState('Visa');
  const [value, setValue] = useState(new Date());

  const handleChange = event => {
    setPayment(event.target.value);
  };

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
          <div className='inputPayment'>
            <div className='inputPaymentCalculate'>
              <h2>Total:</h2>
              <div className='inputPaymentCalculateAmount'>
                <h1>3000</h1>
                <h1>THB</h1>
              </div>
              <div className='grayLine'></div>
            </div>
            <div className='divFormAddPayment'>
              <form>
                <div className='divPaymentRadio'>
                  <RadioGroup
                    name='controlled-radio-buttons-group'
                    value={payment}
                    onChange={handleChange}>
                    <FormControlLabel
                      value='visa'
                      control={<Radio />}
                      label='Visa'
                    />
                    <FormControlLabel
                      value='masterCard'
                      control={<Radio />}
                      label='MasterCard'
                    />
                  </RadioGroup>
                </div>
                <div className='textFieldColumPayment'>
                  <TextField
                    id='outlined-basic'
                    label='Cardholder Name'
                    variant='outlined'
                  />
                  <TextField
                    id='outlined-basic'
                    label='Card Number'
                    variant='outlined'
                  />
                </div>

                <div>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      views={['year']}
                      label='Year only'
                      value={value}
                      onChange={newValue => {
                        setValue(newValue);
                      }}
                      renderInput={params => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </MuiPickersUtilsProvider>
                  <TextField
                    id='outlined-basic'
                    label='CCV'
                    variant='outlined'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
