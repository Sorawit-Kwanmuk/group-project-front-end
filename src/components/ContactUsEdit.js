import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";

function ContactUsEdit() {
  return (
    <>
      <div style={{ margin: 0 }}>
        <div style={{ backgroundColor: "#ADE8F4", padding: "1rem 0" }}>
          <Typography variant="h4" align="center">
            Contact Us Admin Page{" "}
          </Typography>
        </div>
        <Card
          style={{ maxWidth: 550, margin: "30px auto", padding: "20px 5px" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Contact Edit Form
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Map"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Address"
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                    required
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
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    fullWidth
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
