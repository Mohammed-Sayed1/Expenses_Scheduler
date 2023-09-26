import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(true);
  };

  const [addNewExpense, setAddNewExpense] = useState(true);
  const addNewExpenseHandler = () => {
    setAddNewExpense(false);
  };

  const cancelHandler = (cancel) => {
    setAddNewExpense(cancel);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
        />
      )}
      {addNewExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
