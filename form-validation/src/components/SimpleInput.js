import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  const emailIsInvalid = enteredEmailTouched && !enteredEmailIsValid;
  let isFromValid = false;
  
  if (enteredNameIsValid && enteredEmailIsValid) { isFromValid = true; }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredEmailTouched(true);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
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
      <div className={`form-control ${emailIsInvalid && "invalid"}`}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Email is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFromValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
