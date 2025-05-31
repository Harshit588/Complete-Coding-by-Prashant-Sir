import React from "react";
import ProjectHeading from "./components/ProjectHeading";
import Description from "./components/Description";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <center>
        <ProjectHeading />

        <Description />
        
        <Timer />

        <br />
      </center>
    </div>
  );
}

export default App;
