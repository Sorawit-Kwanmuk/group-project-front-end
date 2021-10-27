import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useContext, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import './styleLogin.css';
import axios from '../../config/axios';
import { setToken, getToken } from '../../services/localStorage';
import { AuthContext } from '../../contexts/authContext';
import { useHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
import { LoginRegisStatusContext } from '../../contexts/loginRegisStatus';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    showPassword: false,
  });
  const { loginStatus, setLoginStatus, registerStatus, setRegisterStatus } =
    useContext(LoginRegisStatusContext);
  const handleClickCloseLogin = () => {
    setLoginStatus(false);
  };

  // console.log(values);
  const { user, setUser } = useContext(AuthContext);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const history = useHistory();
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmitLogin = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/login', {
        username,
        password,
      });

      // console.log('LogRes: ', res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push('/');
      setLoginStatus(false);
      // window.location.reload();
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <>
      <form className='formLoginMain' action='' onSubmit={handleSubmitLogin}>
        <div className='LoginForm'>
          <span className='spanLogin'>Login</span>
          <div className='divLogin'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                error
                id='outlined-basic'
                type='text'
                label='Username'
                variant='outlined'
                value={username}
                onChange={e => setUsername(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
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
            <Button variant='contained' type='submit'>
              Login
            </Button>
          </div>
          <div className='divLogin'>
            <Button
              variant='contained'
              onClick={() => history.push('/register')}>
              Register
            </Button>
          </div>
        </div>
      </form>
      <div className='divCloseAll' onClick={handleClickCloseLogin}></div>
    </>
  );
}

export default Login;
