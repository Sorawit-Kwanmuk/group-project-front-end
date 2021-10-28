import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './contexts/authContext';
import { CourseContextProvider } from './contexts/courseContext';
import { PaymentContextProvider } from './contexts/paymentContext';
import { LoginRegisStatusContextProvider } from './contexts/loginRegisStatus';
import { ToggleContextProvider } from './contexts/toggleContext';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <AuthContextProvider>
        <PaymentContextProvider>
          <CourseContextProvider>
            <LoginRegisStatusContextProvider>
              <App />
            </LoginRegisStatusContextProvider>
          </CourseContextProvider>
        </PaymentContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
