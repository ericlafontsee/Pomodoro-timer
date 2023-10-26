import React, { useContext } from "react";
import ReactSlider from "react-slider";
import "./Settings.css";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="settings">
      <label>Focus: {settingsInfo.focusMinutes}:00</label>
      <ReactSlider 
      className={'slider'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={settingsInfo.focusMinutes}
      onChange={newValue => settingsInfo.setFocusMinutes(newValue)}
      min={1}
      max={120}
      />
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider 
      className={'slider green'}
      thumbClassName={'thumb'}
      trackClassName={'track'}
      value={settingsInfo.breakMinutes}
      onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
      min={1}
      max={120}
      />
      <BackButton />
    </div>
  );
};

export default Settings;
