// importing the css dependencies of particular components
import "./ExpenseItem.css";
// importing the expenseDate component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// important point need to use className instead of class for using the css
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
