import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";

// REDUX
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
  },
});

export { store };
