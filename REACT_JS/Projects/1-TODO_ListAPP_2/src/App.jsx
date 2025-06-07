import React from "react";
import "./App.css";
import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { title: "DRINK MILK", date: "2025-04-10" },
    { title: "Go to Office", date: "2025-07-10" },
    { title: "Meet to ranu", date: "2025-07-10" },
  ];
  return (
    <div>
      <center>
        <div className="container m-5">
          <AppName />
          <br />

          <TodoInput />
          <br />

          <TodoItems todoItems={todoItems} />
        </div>
      </center>
    </div>
  );
}

export default App;
