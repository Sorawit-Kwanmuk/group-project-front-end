import './styleMyProfile.css';
import Avatar from '@mui/material/Avatar';
import John from '../../public/images/john.jpg';
import { imageConfig, ToggleButtonConfig } from './muiConfig';
import { useEffect, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dashboard from './ChangeDetail/DashBoard/DashBoard';
import MyProfileDetail from './ChangeDetail/MyProfileDetail/MyProfileDetail';
import PurchaseHistory from './ChangeDetail/PurchaseHistory/PurchaseHistory';
import axios from '../../config/axios';
import { useLocation } from 'react-router-dom';
function MyProfile() {
  const [image, setImage] = useState(
    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'
  );
  const location = useLocation();
  // console.log('location: ', location);
  // console.log(image);
  const [alignment, setAlignment] = useState(
    location.state.alignmentHistory
      ? location.state.alignmentHistory
      : 'myProfile'
  );
  const [data, setData] = useState({
    fullName: '',
    birthDate: '',
    profileImage: '',
    email: '',
    mobileNo: '',
    username: '',
  });
  const [toggleProfile, setToggleProfile] = useState(false);
  console.log('data: ', data);
  // console.log(alignment);
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
  console.log('image: ', image);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/user/userId');
        // console.log(`data`, data.data.result);
        setData(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [location.state, toggleProfile]);

  // console.log(`data`, data);
  const handleClickUpdateProfileImg = async () => {
    try {
      const formData = new FormData();
      formData.append('thisisinput', image);
      const res = await axios.put('/user/updateImage', formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='mainDivController'>
        <div className='MyProfileConTroller'>
          <div className='MyProfileTop'>
            <label for='files' class='inputImageProfileLabel'></label>
            <Avatar
              className='MyProfileAvatar'
              alt='Remy Sharp'
              src={data.profileImage ? data.profileImage : image}
              sx={imageConfig}
              onClick={handleClickUpdateProfileImg}
            />
            <input
              id='files'
              className='inputImageProfile'
              type='file'
              onChange={e => {
                setImage(e.target.files[0]);
                handleClickUpdateProfileImg();
              }}
            />

            <h1 className='MyProfileH1'>{data.username}</h1>
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
              <ToggleButton value='myProfile' sx={ToggleButtonConfig}>
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
                {((alignment === 'myProfile' || alignment === null) &&
                  'My Profile') ||
                  (alignment === 'dashboard' && 'Dashboard') ||
                  (alignment === 'purchaseHistory' && 'Purchase History')}
              </h2>
            </div>
            <div className='divChangeDetail'>
              {(alignment === 'myProfile' || alignment === null) && (
                <MyProfileDetail
                  data={data}
                  setToggleProfile={setToggleProfile}
                />
              )}
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
