import React, { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { api } from "./api/apiResource";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // read data
  const fetchData = async () => {
    const res = await api.get("/todolist");

    setTasks(res.data);
  };

  // create data
  const submitTask = async (userTask) => {
    const data = { id: uuid(), task: userTask, complete: false };

    await api.post("/todolist", data);
  };

  // delete data
  const deleteTask = async (task_id) => {
    await api.delete(`/todolist/${task_id}`);
  };

  // tasks value change -> render again
  useEffect(() => {
    fetchData();
  }, [tasks]);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75">
          <Form submitTask={submitTask} />
          <List tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
