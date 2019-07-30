import React from "react";

const Display = props => {
  return (
    <div className="display">
      {props.current}
      {/* Display any props data here */}
    </div>
  );
};

export default Display;
