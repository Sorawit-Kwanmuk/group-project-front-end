import axios from "axios";
import { useState, useEffect } from "react";

import "./styleMyProfileDetail.css";
function MyProfileDetail({ data }) {
  const userSplit = data.createdAt.split("T");

  console.log(`userSplit`, userSplit);
  const userDate = userSplit[0];

  console.log(`userData`, userDate);

  const [date, setDate] = useState(userDate);

  const [fullName, setFullName] = useState(data.fullName);
  const [birth, setBirth] = useState(data.birthDate);
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.mobileNo);

  return (
    <>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Registration Date: </h3>
        <p> {date} </p>
      </div>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Full Name: </h3>
        <p>{fullName}</p>
      </div>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Birth Date: </h3>
        <p>{birth}</p>
      </div>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Username: </h3>
        <p>{username}</p>
      </div>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Email: </h3>
        <p>{email}</p>
      </div>
      <div className="divMyProfileH3P">
        <h3 className="divMyProfileH3">Phone Number: </h3>
        <p>{phone}</p>
      </div>
    </>
  );
}

export default MyProfileDetail;
