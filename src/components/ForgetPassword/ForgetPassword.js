import './styleForgetPassword.css';
import TextField from '@mui/material/TextField';
import { TextFieldConfig } from './muiConfig';
import { Button } from '@mui/material';
import { useState } from 'react';
function ForgetPassword() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  console.log(usernameOrEmail);
  return (
    <>
      <div className='divMyAccount'>
        <div className='divMyAccountH1'>
          <h1>My Account</h1>
        </div>
        <div className='divMyAccountP'>
          <p>
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>
        </div>
        <div className='divMyAccountTextField'>
          <TextField
            id='outlined-basic'
            label='Username or Email'
            variant='outlined'
            value={usernameOrEmail}
            onChange={e => setUsernameOrEmail(e.target.value)}
            size='small'
            sx={TextFieldConfig}
          />
        </div>
        <div className='divMyAccountButton'>
          <Button variant='contained'>Reset password</Button>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
