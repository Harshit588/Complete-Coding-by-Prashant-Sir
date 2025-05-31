import React from "react";
import "./App.css";
import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoListItem_1 from "./components/TodoListItem_1";

import TodoListItem_2 from "./components/TodoListItem_2";

function App() {
  return (
    <div>
      <center>
        <div class="container m-5">
          <AppName />

          <br />

          <TodoInput />

          <br />

          <TodoListItem_1 />

          <br />

          <TodoListItem_2 />
        </div>
      </center>
    </div>
  );
}

export default App;
