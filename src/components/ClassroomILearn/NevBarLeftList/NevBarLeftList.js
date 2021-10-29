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

function NevBarLeftList({
  topicId,
  topicName,
  setRightIframeOn,
  setVdoLink,
  setQuestions
}) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("list");
  const [topicIdArr, setTopicIdArr] = useState([]);

  const param = useParams();

  useEffect(() => {
    const getLeftLists = async () => {
      try {
        // console.log("- B4resSubtop -");
        const resSubTopic = await axios.get(`/subtopic`);
        // console.log("@@@resSubTopic:", resSubTopic.data.result);
        const resQuiz = await axios.get(`/quiz`);
        // console.log("@@@resQuiz:", resQuiz.data.result);
        setTopicIdArr(resSubTopic.data.result.concat(resQuiz.data.result));
      } catch (error) {
        console.log("useEffectSubTopicErr:", error);
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

  const handleToggleButtonClick = async (link, topicId) => {
    try {
      const resQuestion = await axios.get(`/quiz/${topicId}`);
      // console.log("@#@resQuestion:", resQuestion.data.result.Questions);
      setQuestions(resQuestion.data.result.Questions);
    } catch (error) {
      console.log(error);
    }
    setRightIframeOn(true);
    setVdoLink(link);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={styleButton}>
        <ListItemText sx={ListItemTextConfig} primary={topicName} />
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
              {topicIdArr
                .filter((chosenTopic) => chosenTopic.topicId === topicId)
                .map((item, idx) => (
                  <ToggleButton
                    key={idx}
                    sx={ToggleButtonConfig}
                    value={item.subTopName ? item.subTopName : item.quizName}
                    onClick={() =>
                      handleToggleButtonClick(item.video, item.topicId)
                    }
                  >
                    {item.subTopName ? item.subTopName : item.quizName}
                  </ToggleButton>
                ))}
            </ToggleButtonGroup>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default NevBarLeftList;
