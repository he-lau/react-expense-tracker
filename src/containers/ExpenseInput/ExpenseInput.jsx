import { addExpense } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export function ExpenseInput(props) {
  // trigger slice event
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const label = formData.get("label");
    const price = formData.get("price");
    console.log(label, price);

    const expense = { label: label, price: price };
    dispatch(addExpense(expense));
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="label"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
