import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Option 1
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);

  // Option 2
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (event) => setUserInput((prevState) => ({
  //       ...prevState,
  //       title: event.target.value,
  //     }));
  //   const amountChangeHandler = (event) => setUserInput((prevState) => ({
  //       ...prevState,
  //       amount: event.target.value,
  //     }));
  //   const dateChangeHandler = (event) => setUserInput((prevState) => ({
  //       ...prevState,
  //       date: event.target.value,
  //     }));

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    props.onToggleForm();
  };

  const cancelHandler = (event) => {
    setTitle("");
    setAmount("");
    setDate("");

    props.onToggleForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
