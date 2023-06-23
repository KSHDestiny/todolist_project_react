import React from "react";
import Cart from "./Cart";

const List = ({ tasks }) => {
  return (
    <div className="">
      <ol className="list-group">
        <Cart tasks={tasks} />
      </ol>
    </div>
  );
};

export default List;
