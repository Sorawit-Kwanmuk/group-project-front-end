import './styleShoppingCart.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import { imageConfig } from './muiConfig';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

function ShoppingCart() {
  const [image, setImage] = useState({ profileImage: '' });
  const [payment, setPayment] = useState('Visa');
  const [value, setValue] = useState(new Date());
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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

                <div className='ExpiredDateController'>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='demo-simple-select-helper-label'>
                      Month
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-helper-label'
                      id='demo-simple-select-helper'
                      value={month}
                      label='Month'
                      onChange={e => {
                        setMonth(e.target.value);
                      }}>
                      <MenuItem value=''>
                        <em>00</em>
                      </MenuItem>
                      <MenuItem value={'01'}>01</MenuItem>
                      <MenuItem value={'02'}>02</MenuItem>
                      <MenuItem value={'03'}>03</MenuItem>
                      <MenuItem value={'04'}>04</MenuItem>
                      <MenuItem value={'05'}>05</MenuItem>
                      <MenuItem value={'06'}>06</MenuItem>
                      <MenuItem value={'07'}>07</MenuItem>
                      <MenuItem value={'08'}>08</MenuItem>
                      <MenuItem value={'09'}>09</MenuItem>
                      <MenuItem value={'10'}>10</MenuItem>
                      <MenuItem value={'11'}>11</MenuItem>
                      <MenuItem value={'12'}>12</MenuItem>
                    </Select>
                  </FormControl>{' '}
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id='demo-simple-select-helper-label'>
                      Year
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-helper-label'
                      id='demo-simple-select-helper'
                      value={year}
                      label='Year'
                      onChange={e => {
                        setYear(e.target.value);
                      }}>
                      <MenuItem value=''>
                        <em>00</em>
                      </MenuItem>
                      <MenuItem value={'01'}>01</MenuItem>
                      <MenuItem value={'02'}>02</MenuItem>
                      <MenuItem value={'03'}>03</MenuItem>
                      <MenuItem value={'04'}>04</MenuItem>
                      <MenuItem value={'05'}>05</MenuItem>
                      <MenuItem value={'06'}>06</MenuItem>
                      <MenuItem value={'07'}>07</MenuItem>
                      <MenuItem value={'08'}>08</MenuItem>
                      <MenuItem value={'09'}>09</MenuItem>
                      <MenuItem value={'10'}>10</MenuItem>
                      <MenuItem value={'11'}>11</MenuItem>
                      <MenuItem value={'12'}>12</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TextField id='outlined-basic' label='CCV' variant='outlined' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
