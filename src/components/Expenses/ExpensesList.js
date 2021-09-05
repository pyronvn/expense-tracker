import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  let expensesContent = <p>No expenses</p>;

  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
      ;
    </ul>
  );
}
