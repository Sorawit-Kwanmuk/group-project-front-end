import './styleMyProfileDetail.css';
function MyProfileDetail({ data }) {
  const { createdAt, fullName, birthDate, username, email, mobileNo } = data;
  const mobileNoChangeForm = mobileNo.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '$1-$2-$3'
  );
  return (
    <>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Registration Date: </h3>
        <p> {createdAt?.slice(0, 10)} </p>
      </div>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Full Name: </h3>
        <p>{fullName}</p>
      </div>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Birth Date: </h3>
        <p>{birthDate?.slice(0, 10)}</p>
      </div>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Username: </h3>
        <p>{username}</p>
      </div>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Email: </h3>
        <p>{email}</p>
      </div>
      <div className='divMyProfileH3P'>
        <h3 className='divMyProfileH3'>Phone Number: </h3>
        <p>{mobileNoChangeForm}</p>
      </div>
    </>
  );
}

export default MyProfileDetail;
