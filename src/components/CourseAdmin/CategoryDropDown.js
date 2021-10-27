import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "../../config/axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = ["UX-UI", "Front-End", "Back-End"];

function getStyles(name, categoryName, theme) {
  return {
    fontWeight:
      categoryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function CategorySelect({ setCourseInfo }) {
  const theme = useTheme();
  const [categoryName, setCategoryName] = React.useState([]);
  // const [names, setNames] = React.useState([]);

  // # !!!!! Underconstruction !!!!!
  // React.useEffect(() => {
  //   const getCategory = async () => {
  //     const category4map = await axios.get("http://localhost:8090/category");
  //     console.log("@#@category4map:", category4map);
  //     setNames(() => {});
  //   };
  //   getCategory();
  // }, []);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setCategoryName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setCourseInfo((courseInfo) => ({
      ...courseInfo,
      categoryId: value
    }));
    console.log("@@@CategoryArr:", value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: "100%" }}>
        <InputLabel id="demo-multiple-name-label">Category *</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput label="Category *" />}
          MenuProps={MenuProps}
          required
        >
          {names.map((name, idx) => (
            <MenuItem
              key={name}
              value={idx + 1}
              style={getStyles(name, categoryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
