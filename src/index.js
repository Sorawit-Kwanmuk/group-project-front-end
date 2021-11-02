import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './contexts/authContext';
import { CourseContextProvider } from './contexts/courseContext';
import { PaymentContextProvider } from './contexts/paymentContext';
import { LoginRegisStatusContextProvider } from './contexts/loginRegisStatus';
import { ToggleContextProvider } from './contexts/toggleContext';
import { UserContextProvider } from './contexts/userContext';
import { CarouselContextProvider } from './contexts/CarouselContext';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <PaymentContextProvider>
            <CarouselContextProvider>
              <CourseContextProvider>
                <LoginRegisStatusContextProvider>
                  <App />
                </LoginRegisStatusContextProvider>
              </CourseContextProvider>
            </CarouselContextProvider>
          </PaymentContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
