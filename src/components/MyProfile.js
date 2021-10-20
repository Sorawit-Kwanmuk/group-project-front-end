import './styleMyProfile.css';
import Avatar from '@mui/material/Avatar';
import John from '../public/images/john.jpg';
import { imageConfig, ToggleButtonConfig } from './muiConfig';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dashboard from './ChangeDetail/DashBoard/DashBoard';
import MyProfileDetail from './ChangeDetail/MyProfileDetail/MyProfileDetail';
import PurchaseHistory from './ChangeDetail/PurchaseHistory/PurchaseHistory';
function MyProfile() {
  const [image, setImage] = useState({ profileImage: '' });

  console.log(image);
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <div className='mainDivController'>
        <div className='MyProfileConTroller'>
          <div className='MyProfileTop'>
            <Avatar
              className='MyProfileAvatar'
              alt='Remy Sharp'
              src={John}
              sx={imageConfig}
              onClick={() => {
                setImage({ profileImage: John });
              }}
            />
            <h1 className='MyProfileH1'>Username</h1>
          </div>
          <div className='grayLine'></div>
        </div>
        <div className='divMyProfileBottom'>
          <div className='divButtonList'>
            <ToggleButtonGroup
              orientation='vertical'
              color='primary'
              value={alignment}
              exclusive
              onChange={handleChange}>
              <ToggleButton value='1' sx={ToggleButtonConfig}>
                My Profile
              </ToggleButton>
              <ToggleButton value='2' sx={ToggleButtonConfig}>
                Dashbord
              </ToggleButton>
              <ToggleButton value='3' sx={ToggleButtonConfig}>
                Purchase History
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='divMyProfileDetailController'>
            <div className='divMyProfileH2'>
              <h2>My Profile</h2>
            </div>
            <div className='divChangeDetail'>
              {/* <MyProfileDetail /> */}
              <Dashboard />
              <PurchaseHistory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
