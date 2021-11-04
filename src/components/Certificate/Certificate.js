import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './styleCertificate.css';
function Certificate() {
  const location = useLocation();
  console.log(location.state.item);
  const [certificateOwner, setCertificateOwner] = useState({});
  useEffect(() => {
    const fetchDataUserForCertificate = async () => {
      const response = await axios.get(`/user/userId`);
      setCertificateOwner(response.data.result);
      console.log(response.data.result);
    };
    fetchDataUserForCertificate();
  }, []);
  return (
    <div className='divMainControllerCertificate'>
      <div
        className='certificateController'
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dzgbxbl0j/image/upload/v1636022326/CertificateEdit_tpg4rp.jpg)`,
        }}></div>
    </div>
  );
}

export default Certificate;
