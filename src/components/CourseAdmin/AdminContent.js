import React, { useState } from "react";

function AdminContent({
  setDisableAddNewSubject,
  setDisableBtnContQuiz,
  setDisplayContCreate
}) {
  const [content, setContent] = useState({
    subject: "",
    subLesson: "",
    vdoLink: "",
    slideLink: "",
    instructor: ""
  });

  console.log("content:", content);

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
          <label className="w3-text-blue">
            <b>Subject</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                subject: e.target.value
              })
            }
          />
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Sub-lesson name</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                subject: e.target.value
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
        <p>
          <label className="w3-text-blue">
            <b>Instructor</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setContent({
                ...content,
                instructor: e.target.value
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
              setDisableBtnContQuiz([true, true]);
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

export default AdminContent;
