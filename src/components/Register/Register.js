import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './styleRegister.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextFieldConfig, ButtonRegisterConfig } from './muiConfig';

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [value, setValue] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [value, setValue] = useState(null);
  // console.log('username: ', username);
  // console.log('fullName: ', fullName);
  // console.log('birthDate: ', value);
  // console.log('email: ', email);
  // console.log('password: ', password);
  // console.log('confirmPassword: ', confirmPassword);
  // console.log(value);
  const handleSubmitRegister = e => {};
  return (
    <>
      <div className='RegisterForm'>
        <span className='spanLogin'>Register</span>
        <form className='formRegister' onSubmit={handleSubmitRegister}>
          <div className='divRegister usernameRegister'>
            <TextField
              id='outlined-basic'
              type='text'
              label='Username'
              size='small'
              style={TextFieldConfig}
              variant='outlined'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='divRegister'>
            <TextField
              id='outlined-basic'
              type='text'
              size='small'
              label='Full Name'
              sx={TextFieldConfig}
              variant='outlined'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className='divRegister'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Birth Date'
                value={value}
                onChange={newValue => {
                  setValue(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} size='small' sx={TextFieldConfig} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className='divRegister'>
            <TextField
              id='outlined-basic'
              type='text'
              label='Email'
              size='small'
              sx={TextFieldConfig}
              variant='outlined'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='divRegister'>
            <TextField
              id='outlined-basic'
              type='password'
              label='Password'
              size='small'
              sx={TextFieldConfig}
              variant='outlined'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='divRegister'>
            <TextField
              id='outlined-basic'
              type='password'
              label='ConfirmPassword'
              size='small'
              sx={TextFieldConfig}
              variant='outlined'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* <div className='divRegister'>
          <FormControl sx={{ m: 1, width: '26.25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              sx={TextFieldPasswordConfig}
              size='small'
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
              sx={TextFieldPasswordConfig}
              size='small'
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
        </div> */}
          <div className='divRegister buttonLogin'>
            <Button variant='contained' sx={ButtonRegisterConfig}>
              Login
            </Button>
          </div>
        </form>
        <div className='divRegister'>
          <Button variant='contained' sx={ButtonRegisterConfig}>
            Register
          </Button>
        </div>
      </div>
      <div className='divCloseAll'></div>
    </>
  );
}

export default Register;
