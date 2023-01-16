import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState();

  console.log('APP RUNNING');

  const toggleParagraph = () => setShowParagraph((prevState) => !prevState);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagaph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
