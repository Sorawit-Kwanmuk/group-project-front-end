import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import './styleRegister.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Register() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    fullName: '',
    email: '',
  });
  const [value, setValue] = useState(null);
  console.log(values);
  console.log(value);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <>
      <div className='RegisterForm'>
        <span className='spanLogin'>Register</span>
        <div className='divRegister'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              id='outlined-basic'
              type='text'
              label='Username'
              variant='outlined'
              value={values.username}
              onChange={handleChange('username')}
            />
          </Box>
        </div>
        <div className='divRegister'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              id='outlined-basic'
              type='text'
              label='FullName'
              variant='outlined'
              value={values.fullName}
              onChange={handleChange('fullName')}
            />
          </Box>
        </div>
        <div className='divRegister_date'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Birth Date'
              value={value}
              sx={{ width: '80%' }}
              onChange={newValue => {
                setValue(newValue);
              }}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='divRegister'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              id='outlined-basic'
              type='text'
              label='Email'
              variant='outlined'
              value={values.email}
              onChange={handleChange('email')}
            />
          </Box>
        </div>
        <div className='divRegister'>
          <FormControl sx={{ m: 1, width: '26.25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
        </div>
        <div className='divRegister'>
          <FormControl sx={{ m: 1, width: '26.25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              confirmPassword
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'>
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='confirmPassword'
            />
          </FormControl>
        </div>
        <div className='divRegister buttonLogin'>
          <Button variant='contained'>Login</Button>
        </div>
        <div className='divRegister'>
          <Button variant='contained'>Register</Button>
        </div>
      </div>
      <div className='divCloseAll'></div>
    </>
  );
}

export default Register;
