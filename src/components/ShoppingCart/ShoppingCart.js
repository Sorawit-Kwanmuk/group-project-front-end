import './styleShoppingCart.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import {
  imageConfig,
  FormControlConfig,
  FormShortControlConfig,
} from './muiConfig';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function ShoppingCart() {
  const [image, setImage] = useState({ profileImage: '' });
  const [payment, setPayment] = useState('Visa');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [ccv, setCcv] = useState('');

  const handleSubmitPayment = event => {
    event.preventDefault();
    console.log('payment: ', payment);
    console.log('month: ', month);
    console.log('year: ', year);
    console.log('cardHolderName: ', cardHolderName);
    console.log('cardNumber: ', cardNumber);
    console.log('ccv: ', ccv);
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
            <div className='MockUpCourseCard'></div>
            <div className='MockUpCourseCard'></div>
            <div className='MockUpCourseCard'></div>
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
              <form className='formPayment' onChange={handleSubmitPayment}>
                <div className='divPaymentRadio'>
                  <RadioGroup
                    name='controlled-radio-buttons-group'
                    value={payment}
                    onChange={e => setPayment(e.target.value)}>
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
                    size='small'
                    sx={FormControlConfig}
                    value={cardHolderName}
                    onChange={e => setCardHolderName(e.target.value)}
                  />
                  <TextField
                    id='outlined-basic'
                    label='Card Number'
                    variant='outlined'
                    size='small'
                    sx={FormControlConfig}
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                  />
                </div>
                <div className='divExpiredDateController'>
                  <h4 className='ExpiredDateH4'>Expired Date</h4>
                  <div className='ExpiredDateController'>
                    <FormControl
                      size='small'
                      sx={{
                        marginLeft: '0px',
                        marginBottom: '5px',
                        minWidth: 95,
                      }}>
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
                    </FormControl>
                    <FormControl
                      size='small'
                      sx={{ marginBottom: '5px', minWidth: 95 }}>
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
                        <MenuItem value={'2021'}>2021</MenuItem>
                        <MenuItem value={'2022'}>2022</MenuItem>
                        <MenuItem value={'2023'}>2023</MenuItem>
                        <MenuItem value={'2024'}>2024</MenuItem>
                        <MenuItem value={'2025'}>2025</MenuItem>
                        <MenuItem value={'2026'}>2026</MenuItem>
                        <MenuItem value={'2027'}>2027</MenuItem>
                        <MenuItem value={'2028'}>2028</MenuItem>
                        <MenuItem value={'2029'}>2029</MenuItem>
                        <MenuItem value={'2030'}>2030</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='TextFieldCCV'>
                  <TextField
                    id='outlined-basic'
                    label='CCV'
                    variant='outlined'
                    size='small'
                    sx={FormShortControlConfig}
                    value={ccv}
                    onChange={e => setCcv(e.target.value)}
                  />
                </div>
                <div className='paymentButton'>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{
                      marginTop: '10px',
                    }}>
                    Chech Out
                  </Button>
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
