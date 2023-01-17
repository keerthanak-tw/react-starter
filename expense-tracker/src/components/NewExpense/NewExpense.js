import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };

    props.onSaveExpense(expenseData);
  };

  const toggleExpenseForm = () => {
    setShowExpenseForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onToggleForm={toggleExpenseForm}
          showExpenseForm={props.showExpenseForm}
        />
      ) : (
        <button onClick={toggleExpenseForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
