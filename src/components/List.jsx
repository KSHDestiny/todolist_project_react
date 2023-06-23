import React from "react";
import Cart from "./Cart";

const List = ({ tasks, deleteTask }) => {
  return (
    <div className="">
      <ol className="list-group">
        <Cart tasks={tasks} deleteTask={deleteTask} />
      </ol>
    </div>
  );
};

export default List;
