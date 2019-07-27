import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="btn btn__operator">{props.operator}</button>
    </>
  );
};

export default OperatorButton;
