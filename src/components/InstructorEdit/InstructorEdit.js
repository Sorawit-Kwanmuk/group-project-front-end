import { AppBar, Avatar, Divider, Toolbar, Typography } from "@mui/material";
import { Button, CssBaseline, Grid, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import CategorySelect from "./CategoryDropDown";
import John from "../../public/images/john.jpg";
import CourseCard from "../CourseCard/CourseCard";

function InstructorEdit() {
  return (
    <div>
      <CssBaseline />

      <AppBar position="static" sx={{ color: "#03045E", bgcolor: "#ADE8F4" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            align="center"
            sx={{ width: "100%" }}
          >
            Instructor Edit
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Upper part */}
      <Container maxWidth="xlg" sx={{ bgcolor: "#eee", paddingY: 3 }}>
        <form>
          <Grid container spacing={5}>
            <Grid xs={12} sm={6} item>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Instructor name"
                    placeholder="Enter Instructor name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Job title"
                    placeholder="Enter Job title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <CategorySelect />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Bio"
                    placeholder="Enter Bio"
                    multiline
                    rows={5}
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} sm={6} item>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <Avatar
                    alt="Instructor Image"
                    src={John}
                    sx={{ width: 180, height: 180, m: "0 auto" }}
                  />
                </Grid>
                <Grid xs={6} sx={{ marginX: "auto" }} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    {"Save Edit"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Below part */}
      <Container maxWidth="xlg" sx={{ bgcolor: "", marginY: 5 }}>
        <form>
          <Grid container spacing={5}>
            {/* Left-side column */}
            <Grid xs={12} sm={6} item>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="About me"
                    placeholder="Enter About me"
                    multiline
                    rows={5}
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                  <Divider sx={{ bgcolor: "", marginTop: 4 }} />
                </Grid>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ width: "100%", margin: 2 }}
                >
                  Refer to My course
                </Typography>
                <Grid xs={12} item>
                  <CourseCard />
                </Grid>
                <Grid xs={12} item>
                  <CourseCard />
                </Grid>
                <Grid xs={12} item>
                  <CourseCard />
                </Grid>
              </Grid>
            </Grid>

            {/* Right-side column */}
            <Grid xs={12} sm={6} item>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Area of Expertise"
                    placeholder="Enter Area of Expertise"
                    multiline
                    rows={5}
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                  <Divider sx={{ bgcolor: "", marginY: 4 }} />
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Website"
                    placeholder="Enter Website"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Email"
                    placeholder="Enter Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Facebook"
                    placeholder="Enter Facebook"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Youtube"
                    placeholder="Enter Youtube"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="LinkedIn"
                    placeholder="Enter LinkedIn"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Twitter"
                    placeholder="Enter Twitter"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default InstructorEdit;
