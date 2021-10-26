import React, { useState } from "react";

function CreateTopic({
  setDisableAddNewSubject,
  setDisableBtnGroup,
  setDisplayTopicCreate
}) {
  const [input, setInput] = useState({
    subject: "",
    instructor: ""
  });

  return (
    <div>
      <form
        className="w3-container w3-card-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="w3-text-blue w3-center">
          <b>Topic</b>{" "}
        </p>
        <p>
          <label className="w3-text-blue">
            <b>Subject</b>
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            onChange={(e) =>
              setInput({
                ...input,
                subject: e.target.value
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
              setInput({
                ...input,
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
              setDisableBtnGroup([true, true, true]);
              setDisplayTopicCreate(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTopic;
