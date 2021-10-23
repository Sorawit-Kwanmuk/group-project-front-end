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
import Banner from "./Banner/Banner";

function HomeBannerAdmin() {
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
            Home Banner Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xlg">
        <Card sx={{ minWidth: 275, bgcolor: "", marginY: 5 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" align="center">
              Banner Information Form
            </Typography>
            <form>
              <Grid container spacing={1}>
                {/* Left-side */}
                <Grid xs={12} sm={5} item>
                  <Grid container spacing={1}>
                    <Banner />
                  </Grid>
                </Grid>

                {/* Right-side */}
                <Grid xs={12} sm={7} item>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        label="Banner name"
                        placeholder="Enter Banner name"
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
                        label="Image link"
                        placeholder="Enter Image link"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Link"
                        placeholder="Enter Link"
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
                Save
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

export default HomeBannerAdmin;
