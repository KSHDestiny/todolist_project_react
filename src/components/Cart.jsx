import React from "react";

const Cart = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="list-group-item mt-3 shadow-sm">
          <div className="row">
            <div className="col-10">{task.task}</div>
            <div className="col-2">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
