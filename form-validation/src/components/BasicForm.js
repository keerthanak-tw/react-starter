import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    isValid: firstNameIsValid,
    hasError: firstNameError,
    reset: firstNameReset,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    isValid: lastNameIsValid,
    hasError: lastNameError,
    reset: lastNameReset,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    isValid: emailIsValid,
    hasError: emailError,
    reset: emailReset,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const isFormValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (firstNameError || lastNameError || emailError) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && (
            <p className="error-text">First name must not be empty!</p>
          )}
        </div>
        <div className={`form-control ${lastNameError && "invalid"}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && (
            <p className="error-text">Last name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailError && "invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Email is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
