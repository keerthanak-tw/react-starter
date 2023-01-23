import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    isValid: nameIsValid,
    hasError: nameInputError,
    reset: nameReset,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailIsInvalid = enteredEmailTouched && !enteredEmailIsValid;
  let isFromValid = false;
  
  if (nameIsValid && enteredEmailIsValid) { isFromValid = true; }
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredEmailTouched(true);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameInputError || !enteredEmailIsValid) {
      return;
    }

    nameReset();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputError && (
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
