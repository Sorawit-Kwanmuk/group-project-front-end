import React from "react";
import { Button, CssBaseline, Grid, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CategorySelect from "./CategoryDropDown";
import { AppBar, Toolbar } from "@mui/material";

function MainCourseAdmin() {
  return (
    <>
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
            Main Course Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xlg">
        <Card sx={{ minWidth: 275, bgcolor: "", marginY: 5 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Course Information Form
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        label="Course name"
                        placeholder="Enter Course name"
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
                        label="Level"
                        placeholder="Enter Level"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Course duration"
                        placeholder="Enter Course duration"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Price"
                        placeholder="Enter Price"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Discount"
                        placeholder="Enter Discount"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Discout until"
                        placeholder="Enter Discout until"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Course image link"
                        placeholder="Enter Course image link"
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
                      <TextField
                        label="Short description"
                        placeholder="Enter Short description"
                        multiline
                        rows={5}
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <TextField
                        label="About this course"
                        placeholder="Enter About this course"
                        multiline
                        rows={8}
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        {"View & Edit"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Grid xs={3} item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Create
              </Button>
            </Grid>
            <Grid xs={3} item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit
              </Button>
            </Grid>
            <Grid xs={3} item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Delete
              </Button>
            </Grid>
          </CardActions>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            minHeight: 350,
            bgcolor: "",
            marginY: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button>
            <AddIcon fontSize="large" />
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default MainCourseAdmin;
