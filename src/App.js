import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2022, 2, 20),
    amount: 100,
  },
  {
    id: "e2",
    title: "Groceries and dining",
    date: new Date(2022, 3, 15),
    amount: 10,
  },
  {
    id: "e3",
    title: "Internet and phone",
    date: new Date(2020, 3, 10),
    amount: 50,
  },
  {
    id: "e4",
    title: "Fuel and service",
    date: new Date(2019, 3, 20),
    amount: 100,
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousState) => {
      return [expense, ...previousState];
    });
    // expenses.push(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>;
    </div>
  );
}

export default App;
