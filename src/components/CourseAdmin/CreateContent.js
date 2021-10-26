import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CreateContent({
  setDisableAddNewSubject,
  setDisableBtnGroup,
  setDisplayContCreate
}) {
  const [content, setContent] = useState({
    subject: "",
    lesson: "",
    vdoLink: "",
    slideLink: ""
  });
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div>
      <form
        className="w3-container w3-card-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="w3-text-blue w3-center">
          <b>Content</b>{" "}
        </p>
        <p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subject list</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
              label="Subject list"
              onChange={handleChange}
            >
              <MenuItem value={"html"}>HTML</MenuItem>
              <MenuItem value={"css"}>CSS</MenuItem>
              <MenuItem value={"javascript"}>JAVASCRIPT</MenuItem>
            </Select>
          </FormControl>
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Lesson name</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                lesson: e.target.value
              })
            }
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Content-VDO link</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                vdoLink: e.target.value
              })
            }
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Lesson slide link</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                slideLink: e.target.value
              })
            }
          />
        </p>

        <div className="w3-bar-item w3-center w3-margin-bottom">
          <button
            className="w3-green w3-button w3-ripple w3-mobile w3-margin-right"
            onClick={() => {}}
          >
            Save
          </button>
          <button
            className="w3-red w3-button w3-ripple w3-mobile"
            onClick={() => {
              setDisableAddNewSubject(false);
              setDisableBtnGroup([true, true, true]);
              setDisplayContCreate(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateContent;
