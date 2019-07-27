import React from "react";

const NumberButton = props => {
  if (props.number === "0") {
    return (
      <>
        <button className="btn btn__number btn__number--zero">{props.number}</button>
      </>
    );
  } else {
    return (
      <>
        <button className="btn btn__number">{props.number}</button>
      </>
    );
  }
};

export default NumberButton;
