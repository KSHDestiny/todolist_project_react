import React from "react";

const Cart = ({ tasks, deleteTask }) => {
  const handleDeleteTask = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="list-group-item mt-3 shadow-sm">
          <div className="row">
            <div className="col-10">{task.task}</div>
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
