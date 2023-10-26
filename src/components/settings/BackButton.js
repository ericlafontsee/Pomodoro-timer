import React, { useContext } from "react";
import SettingsContext from "./SettingsContext";
import "./Settings.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const BackButton = (props) => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <button
      className="backButton"
      onClick={() => settingsInfo.setShowSettings(false)}
    >
      <BsFillArrowLeftCircleFill />
      Back
    </button>
  );
};

export default BackButton;
