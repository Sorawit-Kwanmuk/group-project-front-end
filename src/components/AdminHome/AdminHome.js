import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AdminHome() {
  return (
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
  );
}
