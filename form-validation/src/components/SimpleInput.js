import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    isValid: nameIsValid,
    hasError: nameInputError,
    reset: nameReset,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== '');
  const {
    isValid: emailIsValid,
    hasError: emailInputError,
    reset: emailReset,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@'));

  let isFromValid = false;
  
  if (nameIsValid && emailIsValid) { isFromValid = true; }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameInputError || emailInputError) {
      return;
    }

    nameReset();
    emailReset();
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
      <div className={`form-control ${emailInputError && "invalid"}`}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputError && (
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
