import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParagaph, setShowParagraph] = useState();

  const toggleParagraph = () => setShowParagraph((prevState) => !prevState);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagaph && <p>This is new!</p>}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
