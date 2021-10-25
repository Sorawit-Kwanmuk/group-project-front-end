import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AdminHome() {
  return (
    <>
      <AppBar position="static" sx={{ color: "#03045E", bgcolor: "#ADE8F4" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            align="center"
            sx={{ width: "100%" }}
          >
            Admin Home
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack
        spacing={5}
        direction="column"
        sx={{
          m: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button size="large" variant="contained" sx={{ width: 800 }}>
          Course System
        </Button>
        <Button size="large" variant="contained" sx={{ width: 800 }}>
          Instructor System
        </Button>
        <Button size="large" variant="contained" sx={{ width: 800 }}>
          Promotion System
        </Button>
        <Button size="large" variant="contained" sx={{ width: 800 }}>
          Edit Contact
        </Button>
        <Button size="large" variant="contained" sx={{ width: 800 }}>
          Feedback System
        </Button>
      </Stack>
    </>
  );
}
