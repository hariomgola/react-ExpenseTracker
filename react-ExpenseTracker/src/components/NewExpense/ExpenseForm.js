import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // using many states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // passing one state for many state
  // const [userInputs, setUserInputs] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    console.log(`Title Change Handler is called - ${event.target.value}`);
    setEnteredTitle(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   enteredTitle: event.target.value,
    // });
    // more reliable thing to use for state updated
    // setUserInputs((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    console.log(`Amount Change Handler is called - ${event.target.value}`);
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(`Date Change Handler is called - ${event.target.value}`);
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    // works on a click of submit button
    event.preventDefault(); // preventing page from reloading.
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(
      `Data on click of submit button ${JSON.stringify(expenseData)}`
    );

    // calling parent component
    props.onSaveExpenseData(expenseData);
    // using two way binding to clear the data
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
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
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
