import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";

function ContactUsUser() {
  return (
    <>
      <div style={{ margin: 0 }}>
        <div style={{ backgroundColor: "#ADE8F4", padding: "1rem 0" }}>
          <Typography variant="h4" align="center">
            Contact Us{" "}
          </Typography>
        </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.240787727475!2d100.5147665248554!3d13.745056245627854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2994d0b8d7e6b%3A0x75f3888fdec83b87!2sMint%20Tower!5e0!3m2!1sen!2sth!4v1634896022779!5m2!1sen!2sth"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="OurAddress"
            ></iframe>
            <Typography gutterBottom variant="subtitle1" align="">
              Address: 719 ถนน บรรทัดทอง Wang Mai, Pathum Wan District, Bangkok
              10330
            </Typography>
            <Typography gutterBottom variant="subtitle1" align="">
              E-mail support@clonecamp.com{" "}
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
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        label="Name"
                        placeholder="Enter Name"
                        variant="outlined"
                        fullWidth
                        required
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
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Topic"
                        placeholder="Enter Topic"
                        variant="outlined"
                        fullWidth
                        required
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
