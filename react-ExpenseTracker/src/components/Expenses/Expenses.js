// importing the css clases
import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // below code is for filtered data
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;

/**
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />

      // another change
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )

      // another change
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )

      // another change if else statement
      {filteredExpenses.length === 0 ? (
        <p> No Expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}

      // another change if if statement
      {filteredExpenses.length === 0 && <p> No Expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

     // another approach moving conditional logic to javascript code
      // let expenseContent = <p>No expenses found</p>;
      // if (filteredExpenses.length > 0) {
      //   expenseContent = filteredExpenses.map((expense) => (
      //     <ExpenseItem
      //       key={expense.id}
      //       title={expense.title}
      //       amount={expense.amount}
      //       date={expense.date}
      //     />
      //   ));
      // }
      //

 */
