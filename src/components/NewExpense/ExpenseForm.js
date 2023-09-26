import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /********** First way **********/
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /********** Second way **********/
  /* here every eventHandler function which update the state depends on the previous state,
      so there is a better way to do this whick is the second way */
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     /* First way */
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredTitle: event.target.value
  //     // })

  //     /* Second way : the better way */
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     /* First way */
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredAmount: event.target.value
  //     // })

  //     /* Second way : the better way */
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     /* First way */
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredDate: event.target.value
  //     // })

  //     /* Second way : the better way */
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: event.target.value };
  //     });
  //   };

  /********** Third way : Using a ginirec function for handling the event **********/
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") setEnteredTitle(value);
  //   else if (identifier === "amount") setEnteredAmount(value);
  //   else setEnteredDate(value);
  // };

  /********** Handling onSubmit event **********/
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    props.onCancel(true);
  };

  return (
    <form onSubmit={submitHandler} onReset={cancelHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            // onChange={(event) => inputChangeHandler("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            // onChange={(event) => inputChangeHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            // onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
