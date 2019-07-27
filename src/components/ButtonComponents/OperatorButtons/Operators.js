import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = () => {
  const [operateState, setOperatorState] = useState(operators);

  return (
    <div className="buttons__right">
      {operators.map((operator, index) => {
        return <OperatorButton operator={operator.char} key={index} />;
      })}
    </div>
  );
};

export default Operators;
