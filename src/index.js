import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './contexts/authContext';
import { CourseContextProvider } from './contexts/courseContext';
import { PaymentContextProvider } from './contexts/paymentContext';
import { LoginRegisStatusContextProvider } from './contexts/loginRegisStatus';
import { ToggleContextProvider } from './contexts/toggleContext';
import { UserContextProvider } from './contexts/userContext';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <PaymentContextProvider>
            <CourseContextProvider>
              <LoginRegisStatusContextProvider>
                <App />
              </LoginRegisStatusContextProvider>
            </CourseContextProvider>
          </PaymentContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
