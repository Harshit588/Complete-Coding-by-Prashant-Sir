import React from "react";

function Timer() {
  let time = new Date().toLocaleString();

  return (
    <div>
      <h3>This is the current Time of Bharat :: {time}</h3>
    </div>
  );
}

export default Timer;
