import React from "react";

function TodoInput() {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-4 ">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Task Title"
            />
          </div>
          <div className="col-4 ">
            <input type="date" name="date" id="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
