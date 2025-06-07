import React from "react";

function TodoListItem(props) {
  let todoTitle = props.todoTitle;
  let todoDate = props.TodoListDate;
  return (
    <div>
      <div className="row">
        <div className="col-4 ">
          <h6>{todoTitle}</h6>
        </div>
        <div className="col-4">
          <h6>{todoDate}</h6>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
