import React, { useState } from "react";
import AdminContent from "./AdminContent";
import { AppBar, Toolbar, Typography } from "@mui/material";
import CreateQuiz from "./CreateQuiz";

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
  const [disableBtnContQuiz, setDisableBtnContQuiz] = useState([true, true]);
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
                    setDisableBtnContQuiz([false, false]);
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
                      className="w3-blue w3-button w3-ripple w3-mobile w3-margin-left"
                      disabled={disableBtnContQuiz[0]}
                      onClick={() => {
                        setDisplayContCreate(true);
                        setDisplayQuizCreate(false);
                      }}
                    >
                      Content
                    </button>
                    <button
                      className="w3-purple w3-button w3-ripple w3-mobile"
                      disabled={disableBtnContQuiz[1]}
                      onClick={() => {
                        setDisplayQuizCreate(true);
                        setDisplayContCreate(false);
                      }}
                    >
                      Quiz
                    </button>
                  </div>
                </div>

                {/* Content */}
                {displayContCreate && (
                  <AdminContent
                    setDisplayContCreate={setDisplayContCreate}
                    setDisableBtnContQuiz={setDisableBtnContQuiz}
                    setDisableAddNewSubject={setDisableAddNewSubject}
                  />
                )}

                {/* Quiz */}
                <CreateQuiz
                  setDisableAddNewSubject={setDisableAddNewSubject}
                  setDisableBtnContQuiz={setDisableBtnContQuiz}
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
