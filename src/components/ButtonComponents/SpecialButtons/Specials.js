import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {specials.map((special, index) => {
        return <SpecialButton special={special} key={index} />;
      })}
    </div>
  );
};

export default Specials;
