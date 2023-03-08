import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText((prevState) => !prevState);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>I will be here till you toggle it</p>}
      <button onClick={changeTextHandler}>Toggle Text</button>
    </div>
  );
};

export default Greeting;
