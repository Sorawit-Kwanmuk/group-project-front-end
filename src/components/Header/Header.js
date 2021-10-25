import { Avatar, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import './styleHeader.css';
import {
  buttonLogin,
  buttonRegister,
  buttonOurCourse,
  buttonOurTeam,
  buttonContactUs,
} from './muiConfig';
import { AuthContext } from '../../contexts/authContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import iconCode from '../../public/images/code.png';
import John from '../../public/images/john.jpg';
import DropBarMenu from './DropBarMenu/DropBarMenu';
function Header() {
  const { user, setUser } = useContext(AuthContext);
  const [role, setRole] = useState(user ? user.role : 'guest');
  console.log('roleHeader:', role);
  const history = useHistory();

  return (
    <div className='MenuItem'>
      <div className='leftItem'>
        <div className='logo' onClick={() => history.replace('/')}>
          <img src={iconCode} alt='' />
          <p>CloneCamp</p>
        </div>
        <Button
          variant='text'
          sx={buttonOurCourse}
          onClick={() => history.push('/our-course')}>
          Our Course
        </Button>
        <Button
          variant='text'
          sx={buttonOurTeam}
          onClick={() => history.push('/our-team')}>
          Our Team
        </Button>
        <Button
          variant='text'
          sx={buttonContactUs}
          onClick={() => history.push('/contact-us')}>
          Contact Us
        </Button>
        {role === 'admin' ? (
          <Button
            variant='text'
            sx={buttonContactUs}
            onClick={() => history.push('/admin-home')}>
            Admin
          </Button>
        ) : null}
      </div>
      <div className='rightItem'>
        {!user && (
          <Button
            variant='contained'
            sx={buttonLogin}
            onClick={() => history.push('/login')}>
            Login
          </Button>
        )}
        {!user && (
          <Button
            variant='contained'
            sx={buttonRegister}
            onClick={() => history.push('/register')}>
            Register
          </Button>
        )}
        {user && <DropBarMenu />}
      </div>
    </div>
  );
}

export default Header;
