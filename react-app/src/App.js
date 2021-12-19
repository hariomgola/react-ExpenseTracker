// importing custom component
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
