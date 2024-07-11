import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  // lecture dans le store
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  // somme des dépenses
  const totalExpenses = expenseList.reduce((accumulator, current) => {
    return accumulator + current.price;
  }, 0);

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{income - totalExpenses} $</div>
      </div>
    </div>
  );
}
