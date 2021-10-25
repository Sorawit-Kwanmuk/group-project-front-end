import './styleMyProfile.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import { imageConfig, ToggleButtonConfig } from './muiConfig';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dashboard from './ChangeDetail/DashBoard/DashBoard';
import MyProfileDetail from './ChangeDetail/MyProfileDetail/MyProfileDetail';
import PurchaseHistory from './ChangeDetail/PurchaseHistory/PurchaseHistory';
function MyProfile() {
  const [image, setImage] = useState({ profileImage: '' });

  // console.log(image);
  const [alignment, setAlignment] = useState('');
  console.log(alignment);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  // const name =if (alignment === '' || alignment === null) {
  //   return 'My Profile';
  // } else if (alignment === 'Dashboard') {
  //   return 'Dashboard';
  // } else if (alignment === 'purchaseHistory') {
  //   return 'Purchase History';
  // }
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
              <ToggleButton value='' sx={ToggleButtonConfig}>
                My Profile
              </ToggleButton>
              <ToggleButton value='dashboard' sx={ToggleButtonConfig}>
                Dashboard
              </ToggleButton>
              <ToggleButton value='purchaseHistory' sx={ToggleButtonConfig}>
                Purchase History
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='divMyProfileDetailController'>
            <div className='divMyProfileH2'>
              <h2>
                {((alignment === '' || alignment === null) && 'My Profile') ||
                  (alignment === 'dashboard' && 'Dashboard') ||
                  (alignment === 'purchaseHistory' && 'Purchase History')}
              </h2>
            </div>
            <div className='divChangeDetail'>
              {(alignment === '' || alignment === null) && <MyProfileDetail />}
              {alignment === 'dashboard' && <Dashboard />}
              {alignment === 'purchaseHistory' && <PurchaseHistory />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
