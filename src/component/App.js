import React from "react";
import ExpenseTracker from "./ExpenseTracker";
import CurrentBalance from "./CurrentBalance";

const App = () => {
  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Expense Tracker App
      </h1>

      <ExpenseTracker />
    </div>
  );
};

export default App;
