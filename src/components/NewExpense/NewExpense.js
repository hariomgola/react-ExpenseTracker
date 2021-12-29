import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  // using state for button
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (extendedExpenseData) => {
    const expenseData = {
      ...extendedExpenseData,
      id: Math.random().toString(),
    };
    console.log("Getting Data from child to parent - ", expenseData);
    props.onNewExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
