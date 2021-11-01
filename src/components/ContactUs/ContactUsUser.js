import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const initData = {
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.240787727475!2d100.5147665248554!3d13.745056245627854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994d0b8d7e6b%3A0x75f3888fdec83b87!2sMint%20Tower!5e0!3m2!1sen!2sth!4v1634896022779!5m2!1sen!2sth",
  address: "719 ถนน บรรทัดทอง Wang Mai, Pathum Wan District, Bangkok 10330",
  email: "clonecamp@gmail.com",
  phone: "+6689-876-5432",
  facebookLink: "mockup-fackbook",
  youtubeLink: "mockup-youtube",
  twitterLink: "mockup-twitter",
  lineLink: "mockup-line"
};

function ContactUsUser() {
  const contactInfo = initData;
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    topic: "",
    message: ""
  });

  console.log("@userInput:", userInput);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // const resSubmit = await axios.post("/", userInput)
      // console.log("@resSubmit:", resSubmit);
    } catch (error) {
      console.log("@contactSubmitError:", error);
    }
  };

  return (
    <>
      <div style={{ margin: 0 }}>
        <AppBar position="static" sx={{ color: "#03045E", bgcolor: "#ADE8F4" }}>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              align="center"
              sx={{ width: "100%" }}
            >
              Contact Us
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Map & Address */}
        <Grid container spacing={0}>
          <Grid
            xs={12}
            sm={5}
            item
            sx={{
              minWidth: 650,
              margin: "30px auto",
              marginLeft: "40px"
            }}
          >
            <iframe
              src={contactInfo.map}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="OurAddress"
            ></iframe>
            <p></p>
            <Typography gutterBottom variant="subtitle1" align="">
              {`Address: ${contactInfo.address}`}
            </Typography>
            <Typography gutterBottom variant="subtitle1" align="">
              {`E-mail: ${contactInfo.email}`}
            </Typography>
            <Typography gutterBottom variant="subtitle1" align="">
              {`Phone: ${contactInfo.phone}`}
            </Typography>
          </Grid>

          {/* Contact Form */}
          <Grid
            xs={12}
            sm={6}
            sx={{
              minWidth: 650,
              margin: "30px auto",
              marginRight: "40px"
            }}
            item
          >
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6" align="center">
                  Contact Form
                </Typography>
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        label="Name"
                        placeholder="Enter Name"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => {
                          setUserInput((curr) => ({
                            ...curr,
                            name: e.target.value
                          }));
                        }}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type="email"
                        label="Email"
                        placeholder="Enter Email"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => {
                          setUserInput((curr) => ({
                            ...curr,
                            email: e.target.value
                          }));
                        }}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Topic"
                        placeholder="Enter Topic"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => {
                          setUserInput((curr) => ({
                            ...curr,
                            topic: e.target.value
                          }));
                        }}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Message"
                        placeholder="Enter Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        onChange={(e) => {
                          setUserInput((curr) => ({
                            ...curr,
                            message: e.target.value
                          }));
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={3} item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ContactUsUser;
