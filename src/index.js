import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AuthContextProvider } from "./contexts/authContext";
import { CourseContextProvider } from "./contexts/courseContext";
import { InstructorContextProvider } from "./contexts/instructorContext";
import { LoginRegisStatusContextProvider } from "./contexts/loginRegisStatus";
import { ToggleContextProvider } from "./contexts/toggleContext";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <AuthContextProvider>
        <InstructorContextProvider>
          <CourseContextProvider>
            <UserContextProvider>
              <LoginRegisStatusContextProvider>
                <App />
              </LoginRegisStatusContextProvider>
            </UserContextProvider>
          </CourseContextProvider>
        </InstructorContextProvider>
      </AuthContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
