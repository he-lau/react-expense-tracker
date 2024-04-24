import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import s from "./style.module.css";
import { ListItem } from "components/ListItem/ListItem";
import { List } from "components/List/List";
import { useSelector } from "react-redux";
import { IncomeInput } from "components/IncomeInput/IncomeInput";
import { ExpenseTotal } from "containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";

export function App() {
  // read datas from redux store
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  return (
    <div className={s.main_container}>
      <Logo
        // image={"https://dummyimage.com/50x50/000/fff"}
        title={"Title"}
        subtitle="subtitle"
      />
      <div className={`row ${s.header}`}>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList} />
          <ExpenseTotal />
        </div>
      </div>
    </div>
  );
}
