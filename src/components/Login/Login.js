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
import './styleLogin.css';
function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });
  console.log(values);
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
      <div className='LoginForm'>
        <span className='spanLogin'>Login</span>
        <div className='divLogin'>
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
        <div className='divLogin'>
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
        <div className='divLogin buttonLogin'>
          <Button variant='contained'>Login</Button>
        </div>
        <div className='divLogin'>
          <Button variant='contained'>Register</Button>
        </div>
      </div>
      <div className='divCloseAll'></div>
    </>
  );
}

export default Login;
