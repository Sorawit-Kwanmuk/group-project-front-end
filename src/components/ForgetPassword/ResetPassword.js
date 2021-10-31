import './styleForgetPassword.css';
import TextField from '@mui/material/TextField';
import { TextFieldConfig } from './muiConfig';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from '../../config/axios';
import { useHistory, useParams } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const { token } = useParams();
  // console.log(`token`, token);

  // console.log(usernameOrEmail);

  const updatePassword = async e => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert('Confirm Password is not correct.');
      } else {
        const res = await axios.post('/auth/newpassword', {
          newPassword: password,
          token: token,
        });
        // console.log(`res`, res);
        history.push('/');
      }
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <>
      <div className='divMyAccount'>
        <div className='divMyAccountH1'>
          <h1 style={{ marginBottom: '-30px' }}>Reset Password</h1>
        </div>
        <div className='divMyAccountP'>
          <p>
            Enter your new password to meet our quality course and our team.
          </p>
        </div>
        <div className='divMyAccountTextField'>
          <TextField
            id='outlined-basic'
            label='Enter Your New Password'
            variant='outlined'
            value={password}
            onChange={e => setPassword(e.target.value)}
            size='small'
            sx={TextFieldConfig}
            style={{ marginLeft: '90px' }}
          />
        </div>
        <div className='divMyAccountTextField'>
          <TextField
            id='outlined-basic'
            label='Confirm Your New Password'
            variant='outlined'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            size='small'
            sx={TextFieldConfig}
            style={{ marginLeft: '90px' }}
          />
        </div>
        <div className='divMyAccountButton'>
          <Button
            style={{ marginLeft: '145px', marginBottom: '30px' }}
            variant='contained'
            onClick={updatePassword}>
            Reset password
          </Button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
