import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthContextProvider } from './contexts/authContext';
import { LoginRegisStatusContextProvider } from './contexts/loginRegisStatus';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoginRegisStatusContextProvider>
        <App />
      </LoginRegisStatusContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
