// importing custom component
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
