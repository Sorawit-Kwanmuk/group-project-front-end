import axios from "axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    fullName: "",
    birthDate: "",
    profileImage: "",
    email: "",
    mobileNo: "",
    username: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await axios.get("/user/userId");
        console.log(`data`, data.data.result);
        setUser(data.data.result);
      } catch (error) {}
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
