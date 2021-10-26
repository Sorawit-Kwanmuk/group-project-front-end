import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CreateQuiz from "./CreateQuiz";
import CreateTopic from "./CreateTopic";
import CreateContent from "./CreateContent";

const quizBank = [
  {
    subjectName: "HTML Easy Quiz",
    questions: [
      {
        questionText: "What is the capital of France?",
        answerOptions: [
          { answerText: "New York", isCorrect: false },
          { answerText: "London", isCorrect: false },
          { answerText: "Paris", isCorrect: true },
          { answerText: "Dublin", isCorrect: false }
        ]
      },
      {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false }
        ]
      }
    ]
  },
  {
    subjectName: "CSS Greate Quiz",
    questions: [
      {
        questionText: "Who is CEO of Space-X?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false }
        ]
      }
    ]
  }
];

// ##################################################################

function CourseClassroomAdmin() {
  const [subjectOptions, setSubjectOptions] = useState([...quizBank]);
  const [displayEdit, setDisplayEdit] = useState(true);

  const [disableAddNewSubject, setDisableAddNewSubject] = useState(false);
  const [disableBtnGroup, setDisableBtnGroup] = useState([true, true, true]);
  const [displayTopicCreate, setDisplayTopicCreate] = useState(false);
  const [displayContCreate, setDisplayContCreate] = useState(false);
  const [displayQuizCreate, setDisplayQuizCreate] = useState(false);

  return (
    <div style={{ minHeight: 580 }}>
      <AppBar position="static" sx={{ color: "#03045E", bgcolor: "#ADE8F4" }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            align="center"
            sx={{ width: "100%" }}
          >
            Classroom Admin
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="w3-animate-opacity">
        {/* <!-- Subject Options Side-bar --> */}
        <div className="">
          <section className="Admin__section">
            <aside
              className="w3-bar-block w3-light-gray"
              style={{ width: "25%" }}
            >
              {subjectOptions.map((subjectObj, idx) => (
                <div key={idx} className="">
                  <button href="#" className="w3-button w3-block w3-ripple">
                    {subjectObj.subjectName}
                  </button>
                </div>
              ))}

              <div className="w3-display-container">
                <button
                  href="#"
                  className="w3-button w3-block w3-ripple w3-blue"
                  onClick={() => {
                    setDisableAddNewSubject(true);
                    setDisableBtnGroup([false, false]);
                  }}
                  disabled={disableAddNewSubject}
                >
                  +Add New Subject
                </button>
              </div>
            </aside>

            {/* <!-- Edit Form --> */}
            {displayEdit && (
              <div
                style={{
                  width: "75%"
                }}
              >
                <div
                  className=" w3-margin-top"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="w3-right">
                    <button
                      className="w3-green w3-button w3-ripple w3-mobile w3-margin-left"
                      disabled={disableBtnGroup[0]}
                      onClick={() => {
                        setDisplayTopicCreate(true);
                        setDisplayContCreate(false);
                        setDisplayQuizCreate(false);
                      }}
                    >
                      Topic
                    </button>
                    <button
                      className="w3-blue w3-button w3-ripple w3-mobile"
                      disabled={disableBtnGroup[1]}
                      onClick={() => {
                        setDisplayTopicCreate(false);
                        setDisplayContCreate(true);
                        setDisplayQuizCreate(false);
                      }}
                    >
                      Content
                    </button>
                    <button
                      className="w3-purple w3-button w3-ripple w3-mobile"
                      disabled={disableBtnGroup[2]}
                      onClick={() => {
                        setDisplayTopicCreate(false);
                        setDisplayContCreate(false);
                        setDisplayQuizCreate(true);
                      }}
                    >
                      Quiz
                    </button>
                  </div>
                </div>

                {/* # Topic */}
                {displayTopicCreate && (
                  <CreateTopic
                    setDisableAddNewSubject={setDisableAddNewSubject}
                    setDisableBtnGroup={setDisableBtnGroup}
                    setDisplayTopicCreate={setDisplayTopicCreate}
                  />
                )}

                {/* # Content */}
                {displayContCreate && (
                  <CreateContent
                    setDisableAddNewSubject={setDisableAddNewSubject}
                    setDisableBtnGroup={setDisableBtnGroup}
                    setDisplayContCreate={setDisplayContCreate}
                  />
                )}

                {/* # Quiz */}
                <CreateQuiz
                  setDisableAddNewSubject={setDisableAddNewSubject}
                  setDisableBtnGroup={setDisableBtnGroup}
                  displayQuizCreate={displayQuizCreate}
                  setDisplayQuizCreate={setDisplayQuizCreate}
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default CourseClassroomAdmin;
