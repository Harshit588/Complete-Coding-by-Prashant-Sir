import React from "react";

function TodoInput() {
  return (
    <div>
      <div>
        <div class="row">
          <div class="col-4 ">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Task Title"
            />
          </div>
          <div class="col-4 ">
            <input type="date" name="date" id="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
