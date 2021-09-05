import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [isEditting, setIsEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // console.log(enteredExpenseData)
    const expenseData = {
      ...enteredExpenseData,

      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEdittingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditting={stopEdittingHandler}
        />
      )}
    </div>
  );
}
