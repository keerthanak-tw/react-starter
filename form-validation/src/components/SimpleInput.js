import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  let isFromValid = false;
  
  if (enteredNameIsValid) { isFromValid = true; }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFromValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
