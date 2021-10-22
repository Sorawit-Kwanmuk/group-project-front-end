import React, { useState } from "react";

function AdminQuiz({ subjectOptions }) {
  const [displayEdit, setDisplayEdit] = useState(true);

  return (
    <>
      {/* <!-- Subject Options Side-bar --> */}
      <section className="Admin__section">
        {/* <!-- Edit Questions --> */}
        {displayEdit && (
          <div
            style={{
              width: "100%",
              backgroundColor: "#CAF0F8"
            }}
          >
            <div className="w3-row">
              <p class="w3-text-blue w3-center ">
                <b>Quiz</b>{" "}
              </p>
              <div className="w3-right">
                <button className="w3-green w3-button w3-ripple w3-mobile w3-margin-right">
                  Save edit
                </button>
                <button
                  className="w3-red w3-button w3-ripple w3-mobile w3-margin-right"
                  onClick={() => {}}
                >
                  Cancel
                </button>
              </div>
            </div>

            {subjectOptions[subjectOptions.length - 1]?.questions.map(
              (subjectObj, idx) => (
                <article key={idx} className="w3-display-container">
                  <span
                    onClick={() => {}}
                    className="w3-button w3-red w3-display-topright w3-small w3-ripple w3-margin-right"
                  >
                    &times;
                  </span>

                  {/* # Question Number */}
                  <p className="w3-margin-left">
                    ?{idx + 1} of{" "}
                    {
                      subjectOptions[subjectOptions.length - 1]?.questions
                        .length
                    }
                  </p>

                  {/* # Question Text */}
                  <p className="w3-margin-left w3-margin-right">
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      onChange={() => {}}
                      placeholder="Enter Question text..."
                    />
                  </p>
                  <div className="" style={{ paddingRight: 30 }}>
                    {/* # Answer Text */}
                    {subjectObj.answerOptions.map((ans, idx) => (
                      <div
                        key={idx}
                        className="w3-padding-small w3-margin w3-mobile w3-small w3-ripple Quiz__choice"
                        style={{ minHeight: "2rem", width: "100%" }}
                      >
                        <input
                          type="checkbox"
                          className="w3-margin-right"
                          onChange={() => {}}
                          checked={ans.isCorrect}
                        />
                        <input
                          type="text"
                          style={{
                            width: "93%"
                          }}
                          onChange={(e) => e.target.value}
                          value={subjectObj.answerOptions[idx].answerText}
                          placeholder="Enter Answer text..."
                        />
                        {subjectObj.answerOptions.length > 2 && (
                          <span
                            onClick={() => {}}
                            className="w3-button w3-red w3-ripple w3-right"
                          >
                            &times;
                          </span>
                        )}
                      </div>
                    ))}

                    {subjectObj.answerOptions.length < 4 && (
                      <div className="Quiz">
                        <p
                          className="w3-padding-small w3-margin w3-mobile w3-small w3-button w3-ripple Quiz__choice w3-green"
                          onClick={() => {
                            subjectObj.answerOptions.push();
                          }}
                        >
                          +Add Answer Option
                        </p>
                      </div>
                    )}
                  </div>
                  <hr />
                </article>
              )
            )}

            <div className="Quiz">
              <p className="w3-padding w3-margin w3-mobile w3-medium w3-button w3-ripple Quiz__choice w3-blue">
                +Add New Question
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default AdminQuiz;
