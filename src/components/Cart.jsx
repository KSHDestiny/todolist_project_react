import React from "react";

const Cart = ({ tasks, deleteTask, updateTask }) => {
  // delete function with confirm
  const handleDeleteTask = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={
            task.complete
              ? "list-group-item shadow-sm bg-success text-decoration-line-through"
              : "list-group-item shadow-sm"
          }
        >
          <div className="row">
            <div className="col-10">
              <input
                type="checkbox"
                className="me-2"
                name=""
                id=""
                onClick={() => updateTask(task.id, !task.complete)}
                defaultChecked={task.complete}
              />
              {task.task}
            </div>
            <div className="col-2">
              <i
                className="fa-solid fa-xmark"
                onClick={() => handleDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
