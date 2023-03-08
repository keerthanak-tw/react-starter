import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText((prevState) => !prevState);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>I will be here till you toggle it</Output>}
      <button onClick={changeTextHandler}>Toggle Text</button>
    </div>
  );
};

export default Greeting;
