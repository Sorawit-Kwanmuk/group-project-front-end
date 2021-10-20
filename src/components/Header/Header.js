import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import "./styleHeader.css";
import {
  buttonLogin,
  buttonRegister,
  buttonOurCourse,
  buttonOurTeam,
  buttonOurUs
} from "./muiConfig";

function Header() {
  return (
    <div className="MenuItem">
      <div className="leftItem">
        <div className="logo">
          {/* <img src={iconCode} alt='' /> */}
          <p>CloneCamp</p>
        </div>
        <Button variant="text" sx={buttonOurCourse}>
          Our Course
        </Button>
        <Button variant="text" sx={buttonOurTeam}>
          Our Team
        </Button>
        <Button variant="text" sx={buttonOurUs}>
          Contact Us
        </Button>
      </div>
      <div className="rightItem">
        <Button variant="contained" sx={buttonLogin}>
          Login
        </Button>
        <Button variant="contained" sx={buttonRegister}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Header;
