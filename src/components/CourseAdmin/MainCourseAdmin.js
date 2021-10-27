import React, { useState } from "react";
import { Button, CssBaseline, Grid, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CategorySelect from "./CategoryDropDown";
import { AppBar, Toolbar } from "@mui/material";
import axios from "../../config/axios";
import { API_URL } from "../../config/env";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MainCourseAdmin() {
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    categoryId: "",
    level: "",
    duration: "",
    price: "",
    discountRate: "",
    discountUntil: "",
    thisisinput: "",
    clip: "",
    shortDescription: "",
    about: ""
  });
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
    setCourseInfo({
      ...courseInfo,
      level: event.target.value
    });
  };

  const createMainCourse = async () => {
    const data = new FormData();
    data.append("courseName", courseInfo.courseName);
    data.append("categoryId", courseInfo.categoryId);
    data.append("level", courseInfo.level);
    data.append("duration", courseInfo.duration);
    data.append("price", courseInfo.price);
    data.append("discountRate", courseInfo.discountRate);
    data.append("discountUntil", courseInfo.discountUntil);
    data.append("thisisinput", courseInfo.thisisinput);
    data.append("clip", courseInfo.clip);
    data.append("shortDescription", courseInfo.shortDescription);
    data.append("about", courseInfo.about);

    console.log("@@@courseInfo:", courseInfo);
    console.log("@@@data:", data);
    try {
      const res = await axios.post(`${API_URL}/course`, data);
      console.log("@@@res:", res);
    } catch (error) {
      console.dir("@@@error:", error);
    }
  };

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
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            courseName: e.target.value
                          })
                        }
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <CategorySelect setCourseInfo={setCourseInfo} />
                    </Grid>
                    <Grid xs={12} item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Level list
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={subject}
                          label="Subject list"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Beginner"}>Beginner</MenuItem>
                          <MenuItem value={"Intermediate"}>
                            Intermediate
                          </MenuItem>
                          <MenuItem value={"Expert"}>Expert</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Course duration"
                        placeholder="Enter Course duration"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            duration: +e.target.value
                          })
                        }
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
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            price: +e.target.value
                          })
                        }
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
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            discountRate: +e.target.value
                          })
                        }
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type="date"
                        // label="Discount until"
                        placeholder="Enter Discout until"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            discountUntil: e.target.value
                          })
                        }
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type="file"
                        // label="Course image link"
                        placeholder="Enter Course image link"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            thisisinput: e.target.files[0]
                          })
                        }
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        size="large"
                        fullWidth
                      >
                        Status
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        label="Preview Course vdo-link"
                        placeholder="Enter Preview Course vdo-link"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            clip: e.target.value
                          })
                        }
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Short description"
                        placeholder="Enter Short description"
                        multiline
                        rows={4}
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            shortDescription: e.target.value
                          })
                        }
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
                        onChange={(e) =>
                          setCourseInfo({
                            ...courseInfo,
                            about: e.target.value
                          })
                        }
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
                onClick={createMainCourse}
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
