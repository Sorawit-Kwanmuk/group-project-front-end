import { createContext, useState } from 'react';
import { user as initialUser } from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [toggle, setToggle] = useState(false);
  // console.log('user', user);
  return (
    <AuthContext.Provider value={{ user, setUser, toggle, setToggle }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
