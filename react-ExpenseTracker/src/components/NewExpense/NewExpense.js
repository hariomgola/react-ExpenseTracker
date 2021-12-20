import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (extendedExpenseData) => {
    const expenseData = {
      ...extendedExpenseData,
      id: Math.random().toString(),
    };
    console.log("Getting Data from child to parent - ", expenseData);
    props.onNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
