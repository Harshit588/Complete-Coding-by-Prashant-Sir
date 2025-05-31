import React from "react";

function TodoListItem_1() {
  let todoTitle = "Buy Milk";
  let todoDate = "2023-10-01";
  return (
    <div>
      <div class="row">
        <div class="col-4 ">
          <h6>{todoTitle}</h6>
        </div>
        <div class="col-4">
          <h6>{todoDate}</h6>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem_1;
