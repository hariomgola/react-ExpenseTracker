import React, { useState } from "react";
// importing custom component
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_expenses = [
  {
    id: "e1",
    title: "Mobile phone",
    amount: 500.2,
    date: new Date(2021, 2, 15),
  },
  {
    id: "e2",
    title: "Macbook",
    amount: 100.2,
    date: new Date(2021, 3, 15),
  },
  {
    id: "e3",
    title: "House",
    amount: 5000.8,
    date: new Date(2021, 6, 15),
  },
  {
    id: "e4",
    title: "Farm",
    amount: 5000.8,
    date: new Date(2021, 9, 15),
  },
];

const App = () => {
  // using React state
  const [expenses, setExpenses] = useState(DUMMY_expenses);

  const addExpenseHandler = (expense) => {
    console.log(` - Inside App.js -  `);
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
