import "./styleLogin1.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useContext, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "../../config/axios";
import { setToken, getToken } from "../../services/localStorage";
import { AuthContext } from "../../contexts/authContext";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { LoginRegisStatusContext } from "../../contexts/loginRegisStatus";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import { UserContext } from "../../contexts/userContext";
import { Box } from "@mui/system";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({
    showPassword: false
  });
  const { loginStatus, setLoginStatus, registerStatus, setRegisterStatus } =
    useContext(LoginRegisStatusContext);
  const handleClickCloseLogin = () => {
    setLoginStatus(false);
  };

  const { setToggleUser } = useContext(UserContext);
  // console.log(values);
  const { user, setUser } = useContext(AuthContext);
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const history = useHistory();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        username,
        password
      });
      console.log(res);

      // console.log('LogRes: ', res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push("/");
      setLoginStatus(false);
      setToggleUser((current) => !current);
      // window.location.reload();
    } catch (error) {
      setErrorLogin(error.response.data.message);
      console.dir(error.response.data.message);
    }
  };
  const handleClickToRegister = () => {
    setLoginStatus(false);
    setRegisterStatus(true);
  };
  const handleClickToForgotPassword = (e) => {
    e.preventDefault();
    history.push("/forget-password");
    setLoginStatus(false);
  };
  return (
    <>
      <form className="formLoginMain" action="" onSubmit={handleSubmitLogin}>
        <div className="LoginForm">
          <span className="spanLogin">Login</span>
          <div className="divLogin">
            <TextField
              className="divConfig MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root"
              error={errorLogin}
              sx={{ width: "230px", marginBottom: "10px" }}
              id="outlined-basic"
              type="text"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="divLogin">
            <FormControl
              variant="outlined"
              error={errorLogin}
              // helperText={errorLogin}

              className="divConfig css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className="divLogin buttonLogin">
            <Button variant="contained" type="submit" sx={{ width: "100px" }}>
              Login
            </Button>
          </div>
          <div className="divLogin buttonLogin">
            <Button
              variant="contained"
              endIcon={<GoogleIcon />}
              sx={{ width: "100px" }}
            >
              Send
            </Button>
          </div>
          <div className="divLogin">
            <Button
              variant="contained"
              onClick={handleClickToRegister}
              sx={{ width: "100px", paddingRight: "0px" }}
            >
              Register
            </Button>
          </div>
          <div className="textForget">
            <Link onClick={handleClickToForgotPassword}>
              Did you forget your password?
            </Link>
          </div>
        </div>
      </form>
      {errorLogin && (
        <Box sx={{ width: "100%", position: "fixed", zIndex: "2000" }}>
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {errorLogin}
            </Alert>
          </Collapse>
        </Box>
      )}
      <div className="divCloseAll" onClick={handleClickCloseLogin}></div>
    </>
  );
}

export default Login;
