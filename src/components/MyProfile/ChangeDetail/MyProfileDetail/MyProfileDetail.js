import { Button, TextField } from '@mui/material';
import axios from '../../../../config/axios';
import { useEffect, useState } from 'react';
import './styleMyProfileDetail.css';
function MyProfileDetail({ data, setToggleProfile }) {
  // console.log(data);
  const { createdAt, fullName, birthDate, username, email, mobileNo } = data;
  const mobileNoChangeForm = mobileNo.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '$1-$2-$3'
  );
  const [editProfile, setEditProfile] = useState(true);
  const [fullNameChange, setFullNameChange] = useState('');
  const [birthDateChange, setBirthDateChange] = useState('');
  const [emailChange, setEmailChange] = useState('');
  const [mobileNoChange, setMobileNoChange] = useState('');
  // console.log('fullNameChange: ', fullNameChange);
  // console.log('birthDateChange: ', birthDateChange);
  // console.log('emailChange: ', emailChange);
  // console.log('mobileNoChange: ', mobileNoChange);
  // console.log('editProfile:', editProfile);
  useEffect(() => {
    setFullNameChange(fullName);
    setBirthDateChange(birthDate);
    setEmailChange(email);
    setMobileNoChange(mobileNoChangeForm);
  }, []);

  const handleSubmitUpdateProfile = async e => {
    e.preventDefault();
    const response = await axios.put('/user/updateDetail', {
      fullName: fullNameChange,
      birthDate: birthDateChange,
      email: emailChange,
      //change mobileNoChange to number
      mobileNo: mobileNoChange.replace(/\D/g, ''),
    });
    console.log('response.status:', response.status);
    if (response.status === 200) {
      console.log('1111111111111');
      setEditProfile(true);
    }
    setToggleProfile(setToggleProfile => !setToggleProfile);
  };
  return (
    <>
      <form
        action=''
        className='formEditProfile'
        onSubmit={handleSubmitUpdateProfile}>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Registration Date: </h3>
          <TextField
            size='small'
            disabled
            id='outlined-required'
            value={createdAt?.slice(0, 10)}
            defaultValue={createdAt?.slice(0, 10)}
          />
        </div>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Full Name: </h3>
          <TextField
            size='small'
            required
            disabled={editProfile}
            id='outlined-required'
            label='Required'
            value={fullNameChange}
            onChange={e => {
              setFullNameChange(e.target.value);
            }}
          />
        </div>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Birth Date: </h3>
          <TextField
            size='small'
            required
            disabled={editProfile}
            id='outlined-required'
            label='Required'
            value={birthDateChange?.slice(0, 10)}
            onChange={e => {
              setBirthDateChange(e.target.value);
            }}
          />
        </div>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Username: </h3>
          <TextField
            size='small'
            disabled
            id='outlined-required'
            value={username}
          />
        </div>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Email: </h3>
          <TextField
            size='small'
            required
            disabled={editProfile}
            id='outlined-required'
            label='Required'
            value={emailChange}
            onChange={e => {
              setEmailChange(e.target.value);
            }}
          />
        </div>
        <div className='divMyProfileH3P'>
          <h3 className='divMyProfileH3'>Phone Number: </h3>
          <TextField
            size='small'
            required
            disabled={editProfile}
            id='outlined-required'
            label='Required'
            value={mobileNoChange}
            onChange={e => {
              setMobileNoChange(e.target.value);
            }}
          />
        </div>
        {!editProfile && (
          <Button type='submit' variant='contained'>
            Save Profile
          </Button>
        )}
        {editProfile && (
          <Button
            type='button'
            variant='contained'
            onClick={() => setEditProfile(false)}>
            Edit Profile
          </Button>
        )}
      </form>
    </>
  );
}

export default MyProfileDetail;
