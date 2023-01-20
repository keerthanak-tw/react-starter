import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    setEnteredName("");
  };
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
