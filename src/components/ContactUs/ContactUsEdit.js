import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import axios from "../../config/axios";

const initData = {
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.240787727475!2d100.5147665248554!3d13.745056245627854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994d0b8d7e6b%3A0x75f3888fdec83b87!2sMint%20Tower!5e0!3m2!1sen!2sth!4v1634896022779!5m2!1sen!2sth",
  address: "719 ถนน บรรทัดทอง Wang Mai, Pathum Wan District, Bangkok 10330",
  email: "support@clonecamp.com",
  phone: "+6689-876-5432",
  facebookLink: "mockup-fackbook",
  youtubeLink: "mockup-youtube",
  twitterLink: "mockup-twitter",
  lineLink: "mockup-line"
};

function ContactUsEdit() {
  const [contactForm, setContactForm] = useState(initData);

  console.log("@contactForm:", contactForm);

  const handleButtonSave = async () => {
    try {
      // const resSave = await axios.post("/", contactForm);
      // console.log("@resSave:", resSave);
    } catch (error) {
      console.log("@contactEditError:", error);
    }
  };

  const handleButtonCancel = async () => {
    setContactForm(initData);
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
              Contact Us Admin
            </Typography>
          </Toolbar>
        </AppBar>

        <Card
          style={{ maxWidth: 550, margin: "30px auto", padding: "20px 5px" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" align="center">
              Contact Edit Form
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Embed Map"
                    placeholder="Enter Google share's embed-a-map link"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        map: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Address"
                    placeholder="Enter address"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        address: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        email: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Phone"
                    placeholder="Enter phone number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        phone: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="text"
                    label="Facebook link"
                    placeholder="Enter link"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        facebookLink: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="text"
                    label="Youtube link"
                    placeholder="Enter link"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        youtubeLink: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="text"
                    label=" Twitter link"
                    placeholder="Enter link"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        twitterLink: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="text"
                    label="Line link"
                    placeholder="Enter link"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => {
                      setContactForm((curr) => ({
                        ...curr,
                        lineLink: e.target.value
                      }));
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleButtonSave}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={handleButtonCancel}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ContactUsEdit;
