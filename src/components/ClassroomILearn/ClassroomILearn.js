import "./styleClassroomILearn.css";
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { useState } from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { ToggleButtonConfig, ListItemTextConfig } from './muiConfig';
import NevBarLeftList from "./NevBarLeftList/NevBarLeftList";
import ContentRightClass from "./ContentRightClass/ContentRightClass";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useParams } from "react-router";

function ClassroomILearn() {
  const param = useParams();
  const [topicArr, setTopicArr] = useState([]);
  const [rightIframeOn, setRightIframeOn] = useState(false);
  const [vdoLink, setVdoLink] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getLeftLists = async () => {
      try {
        const resTopic = await axios.get(`/topic`);
        // console.log("@@@resTopic:", resTopic.data.result);
        setTopicArr(resTopic.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getLeftLists();
  }, [param.id]);

  return (
    <div className="mainDivClassroomILearn">
      <div className="divLessonList">
        <h3 className="ClassroomILearnH3">Lesson List</h3>
        {topicArr.map((item) => (
          <NevBarLeftList
            key={item.id}
            topicId={item.id}
            topicName={item.topicName}
            setRightIframeOn={setRightIframeOn}
            setVdoLink={setVdoLink}
            setQuestions={setQuestions}
          />
        ))}
      </div>
      <div className="divRightClassroomILearn">
        {rightIframeOn && (
          <ContentRightClass vdoLink={vdoLink} questions={questions} />
        )}
      </div>
    </div>
  );
}

export default ClassroomILearn;
