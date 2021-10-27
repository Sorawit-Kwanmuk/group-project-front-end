import { createContext, useState } from 'react';

const ToggleContext = createContext();
function ToggleContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContextProvider, ToggleContext };
