import React, { useState } from "react";
// importing the css dependencies of particular components
import "./ExpenseItem.css";
// importing the expenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// important point need to use className instead of class for using the css
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // first is previous value and other is seting new value

  const clickHandler = () => {
    setTitle("Updated"); // To set New value
    console.log("Button Clicked!!!  ");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
