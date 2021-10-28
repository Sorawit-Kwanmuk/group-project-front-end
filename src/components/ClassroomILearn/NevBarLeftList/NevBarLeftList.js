import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  ToggleButtonConfig,
  ListItemTextConfig,
  styleButton
} from "../muiConfig";
import "../styleClassroomILearn.css";
import { useEffect, useState } from "react";
import axios from "../../../config/axios";
import { useParams } from "react-router";

function NevBarLeftList() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("list");

  const param = useParams();

  useEffect(() => {
    const getLeftLists = async () => {
      try {
        console.log("tttyt");
        const res = await axios.get(`/topic/${param.id}`);
        console.log("@@@res:", res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getLeftLists();
  }, [param.id]);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick} sx={styleButton}>
        <ListItemText sx={ListItemTextConfig} primary="HTML" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: "0px" }}
      >
        <List component="div" disablePadding>
          <ListItemButton>
            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              sx={ToggleButtonConfig}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton sx={ToggleButtonConfig} value="htmlWww">
                HTML - WWW
              </ToggleButton>
              <ToggleButton sx={ToggleButtonConfig} value="htmlStructure">
                HTML - structure
              </ToggleButton>
              <ToggleButton sx={ToggleButtonConfig} value="htmlElementTag">
                HTML - element/tag
              </ToggleButton>
              <ToggleButton sx={ToggleButtonConfig} value="htmlW3S">
                HTML - w3s
              </ToggleButton>
              <ToggleButton sx={ToggleButtonConfig} value="htmlLessonQuiz">
                HTML - lesson quiz
              </ToggleButton>
            </ToggleButtonGroup>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default NevBarLeftList;
