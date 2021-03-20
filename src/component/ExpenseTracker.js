import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentBalance from "./CurrentBalance";
import {
  incomeList,
  inputIncome,
  expenseList,
  inputExpense,
  CurrentIncome,
  CurrentExpense,
  DeleteIncome,
  DeleteExpense,
} from "../action";

class ExpenseTracker extends Component {
  //   componentDidMount() {
  //     this.props.incomeList;
  //   }
  IncomeRecord = () => {
    return this.props.Income.map((elements, id) => {
      return (
        <div>
          {id + 1}. Income
          {elements}
          <button key={id} onClick={() => this.deleteIncome(id)}>
            Delete
          </button>
        </div>
      );
    });
  };

  ExpenseRecord = () => {
    return this.props.Expense.map((elements, id) => {
      return (
        <div>
          {id + 1}. Expense
          {elements}
          <button key={id} onClick={() => this.deleteExpense(id)}>
            Delete
          </button>
        </div>
      );
    });
  };
  TotalIncomevalue = () => {
    return this.props.Income.reduce((elements, value) => {
      return parseInt(elements) + parseInt(value);
    }, 0);
  };

  TotalExpensevalue = () => {
    return this.props.Expense.reduce((elements, value) => {
      return parseInt(elements) + parseInt(value);
    }, 0);
  };

  deleteIncome = (id) => {
    this.props.DeleteIncome(id);
  };

  deleteExpense = (id) => {
    this.props.DeleteExpense(id);
  };
  // componentDidMount() {
  //   this.props.incomeList("samad");
  // }

  render() {
    console.log(this.props);

    return (
      <div>
        <CurrentBalance
          value1={this.TotalIncomevalue()}
          value2={this.TotalExpensevalue()}
        />
        <h1>Total Income</h1>
        <div>{this.IncomeRecord()}</div>
        <br></br>
        <h3>Total Income</h3>
        <div>{this.TotalIncomevalue()}</div>
        <h1>Total Expense</h1>
        <div>{this.ExpenseRecord()}</div>
        <br></br>
        <h3>Total Income</h3>
        <div>{this.TotalExpensevalue()}</div>
        <br></br>
        <label>Enter income amount</label>
        <br></br>
        <input
          input="text"
          value={this.props.IncomeList}
          onChange={(e) => this.props.incomeList(e.target.value)}
        />
        <br></br>
        <button onClick={() => this.props.inputIncome(this.props.IncomeList)}>
          Add Income
        </button>
        <br></br>
        <label>Enter expense amount</label>
        <br></br>
        <input
          input="text"
          value={this.props.ExpenseList}
          onChange={(e) => this.props.expenseList(e.target.value)}
        />
        <br></br>
        <button onClick={() => this.props.inputExpense(this.props.ExpenseList)}>
          Add Expense
        </button>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  incomeList,
  inputIncome,
  expenseList,
  inputExpense,
  CurrentIncome,
  CurrentExpense,
  DeleteIncome,
  DeleteExpense,
})(ExpenseTracker);
