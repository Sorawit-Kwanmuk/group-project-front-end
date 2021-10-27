import { createContext } from 'react';

const InstructorContext = createContext();
function InstructorContextProvider({ children }) {
  return (
    <InstructorContext.Provider value={{}}>
      {children}
    </InstructorContext.Provider>
  );
}

export { InstructorContextProvider, InstructorContext };
