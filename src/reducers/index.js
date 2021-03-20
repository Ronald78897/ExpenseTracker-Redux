import { combineReducers } from "redux";

const Income = (Income = [], action) => {
  if (action.type === "INPUT_INCOME") {
    return [...Income, action.payload];
  } else if (action.type === "DELETE_INCOME") {
    return Income.filter((value, id) => id !== action.payload);
  }
  return Income;
};

const Expense = (Expense = [], action) => {
  if (action.type === "INPUT_EXPENSE") {
    return [...Expense, action.payload];
  } else if (action.type === "DELETE_EXPENSE") {
    return Expense.filter((value, id) => id !== action.payload);
  }
  return Expense;
};

const IncomeList = (income = "", action) => {
  if (action.type === "INCOME_LIST") {
    return action.payload;
  }
  return income;
};

const ExpenseList = (expense = "", action) => {
  if (action.type === "Expense_LIST") {
    return action.payload;
  }
  return expense;
};

const AddIncome = (value = "", action) => {
  if (action.type === "TOTAL_INCOME") {
    return action.payload;
  }
  return value;
};

const AddExpense = (value = "", action) => {
  if (action.type === "TOTAL_EXPENSE") {
    return action.payload;
  }
  return value;
};

export default combineReducers({
  Income: Income,
  Expense: Expense,
  IncomeList: IncomeList,
  ExpenseList: ExpenseList,
  AddIncome: AddIncome,
  AddExpense: AddExpense,
});
