import React from "react";
import { AiOutlinePauseCircle } from "react-icons/ai";

const PauseButton = (props) => {
  return (
    <button {...props}>
      <AiOutlinePauseCircle />
    </button>
  );
};

export default PauseButton;
