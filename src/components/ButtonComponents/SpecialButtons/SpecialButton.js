import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="btn btn__special">{props.special}</button>
    </>
  );
};

export default SpecialButton;
