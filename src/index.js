import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './contexts/authContext';
import { CourseContextProvider } from './contexts/courseContext';
import { InstructorContextProvider } from './contexts/instructorContext';
import { LoginRegisStatusContextProvider } from './contexts/loginRegisStatus';
import { ToggleContextProvider } from './contexts/toggleContext';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <AuthContextProvider>
        <InstructorContextProvider>
          <CourseContextProvider>
            <LoginRegisStatusContextProvider>
              <App />
            </LoginRegisStatusContextProvider>
          </CourseContextProvider>
        </InstructorContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
