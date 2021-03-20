export const inputIncome = (income) => {
  return {
    type: "INPUT_INCOME",
    payload: income,
  };
};

export const inputExpense = (expense) => {
  return {
    type: "INPUT_EXPENSE",
    payload: expense,
  };
};

export const incomeList = (list) => {
  return {
    type: "INCOME_LIST",
    payload: list,
  };
};

export const expenseList = (list) => {
  return {
    type: "Expense_LIST",
    payload: list,
  };
};

export const CurrentIncome = (value) => {
  return {
    type: "TOTAL_INCOME",
    payload: value,
  };
};

export const CurrentExpense = (value) => {
  return {
    type: "TOTAL_EXPENSE",
    payload: value,
  };
};

export const DeleteIncome = (id) => {
  return {
    type: "DELETE_INCOME",
    payload: id,
  };
};

export const DeleteExpense = (id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: id,
  };
};
