import React from "react";
import { connect } from "react-redux";

const CurrentBalance = ({ value1, value2 }) => {
  return (
    <div>
      <h1>Current Balance</h1>
      {value1 - value2}
    </div>
  );
};

export default CurrentBalance;
