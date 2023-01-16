import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggle, setAllowToggle] = useState();

  console.log("APP RUNNING");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => setAllowToggle(true);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagaph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
