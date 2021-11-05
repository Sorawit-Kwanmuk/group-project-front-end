import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userById, setUserById] = useState({});
  const [userCourseId, setUserCourseId] = useState([]);
  const [toggleUser, setToggleUser] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await axios.get('/user/userId');
        const response = await axios.get(`/mycourse/my`);
        const myCourse = response.data.result.map(item => item.courseId);
        setUserCourseId(myCourse);

        // console.log('userById', response.data.result);
        // console.log(`data`, data.data.result);
        setUserById(data.data.result);
        console.log('xxx');
      } catch (error) {}
    };
    fetchUser();
  }, [toggleUser]);
  // console.log('userCourseId', userCourseId);
  // console.log('userById', userById);
  return (
    <UserContext.Provider
      value={{
        userById,
        setUserById,
        userCourseId,
        setUserCourseId,
        toggleUser,
        setToggleUser,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
