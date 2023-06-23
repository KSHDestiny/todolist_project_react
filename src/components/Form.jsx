import React, { useState } from "react";

const Form = ({ submitTask }) => {
  const [userTask, setUserTask] = useState("");

  const fromSubmitHandling = () => {
    submitTask(userTask);
    setUserTask("");
  };

  // const submitTask = () => {
  //   setUserTask("");
  // };

  return (
    <div>
      <h3 className="mb-4 text-center text-white">React Todo List Project</h3>
      <div className="row">
        <div className="col-10">
          <input
            value={userTask}
            onChange={(e) => setUserTask(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter Tasks..."
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => fromSubmitHandling(userTask)}
          >
            <i className="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
