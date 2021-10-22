import React from "react";

function AdminContent() {
  return (
    <div>
      <form class="w3-container w3-card-4">
        <p class="w3-text-blue w3-center">
          <b>Content</b>{" "}
        </p>
        <p>
          <label class="w3-text-blue">
            <b>Subject</b>
          </label>
          <input class="w3-input w3-border" type="text" />
        </p>
        <p>
          <label class="w3-text-blue">
            <b>Sub-lesson name</b>
          </label>
          <input class="w3-input w3-border" type="text" />
        </p>
        <p>
          <label class="w3-text-blue">
            <b>Content-VDO link</b>
          </label>
          <input class="w3-input w3-border" type="text" />
        </p>
        <p>
          <label class="w3-text-blue">
            <b>Lesson slide</b>
          </label>
          <input class="w3-input w3-border" type="text" />
        </p>
        <p>
          <label class="w3-text-blue">
            <b>Instructor</b>
          </label>
          <input class="w3-input w3-border" type="text" />
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
            onClick={() => {}}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminContent;
