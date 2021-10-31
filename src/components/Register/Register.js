import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import './styleRegister.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextFieldConfig, ButtonRegisterConfig } from './muiConfig';
import axios from '../../config/axios';
import { useHistory } from 'react-router';
import { LoginRegisStatusContext } from '../../contexts/loginRegisStatus';
import { setToken } from '../../services/localStorage';
import { AuthContext } from '../../contexts/authContext';
import jwtDecode from 'jwt-decode';

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

  const [birthDate, setBirthDate] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const { loginStatus, setLoginStatus, registerStatus, setRegisterStatus } =
    useContext(LoginRegisStatusContext);
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  // setRegisterStatus(false);
  // const res = axios.post('/auth/login', {
  //   username,
  //   password,
  // });
  // setToken(res.data.token);
  // setUser(jwtDecode(res.data.token));
  // history.push('/');
  // setLoginStatus(false);

  const handleSubmitRegister = async e => {
    try {
      e.preventDefault();
      await axios.post('/auth/register', {
        fullName,
        birthDate,
        email,
        mobileNo,
        username,
        password,
        confirmPassword,
      });
      setRegisterStatus(false);
      const res = await axios.post('/auth/login', {
        username,
        password,
      });
      // console.log(res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
    } catch (error) {}
  };
  const handleCloseRegister = () => {
    setRegisterStatus(false);
  };
  const handleToggleLogin = () => {
    setLoginStatus(true);
    setRegisterStatus(false);
  };
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
            <TextField
              id='outlined-basic'
              type='text'
              size='small'
              label='Mobile Number'
              sx={TextFieldConfig}
              variant='outlined'
              value={mobileNo}
              onChange={e => setMobileNo(e.target.value)}
            />
          </div>
          <div className='divRegister'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                className='Config css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root'
                label='Birth Date'
                value={birthDate}
                sx={{ zIndex: 3000001, alignSelf: '' }}
                onChange={newValue => {
                  setBirthDate(newValue);
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
          <div className='divRegister buttonLogin'>
            <Button variant='contained' sx={ButtonRegisterConfig} type='submit'>
              Register
            </Button>
          </div>
        </form>
        <div className='divRegister'>
          <Button
            variant='contained'
            sx={ButtonRegisterConfig}
            onClick={handleToggleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className='divCloseAll' onClick={handleCloseRegister}></div>
    </>
  );
}

export default Register;
