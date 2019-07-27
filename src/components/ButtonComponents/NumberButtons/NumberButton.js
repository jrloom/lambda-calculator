import React from "react";

const NumberButton = props => {
  return (
    <>
      <button className="btn btn__number">{props.number}</button>
    </>
  );
};

export default NumberButton;
