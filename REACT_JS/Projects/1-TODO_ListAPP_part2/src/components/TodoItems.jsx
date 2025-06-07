import React from "react";
import TodoListItem from "./TodoListItem";

function TodoItems(props) {
  const items = props.todoItems;

  return (
    <div>
      {items.map((el) => (
        <React.Fragment key={el}>
          <TodoListItem todoTitle={el.title} TodoListDate={el.date} />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default TodoItems;
