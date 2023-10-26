import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./settings/SettingsButton";
import SettingsContext from "./settings/SettingsContext";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          // Colors
          pathColor: "#f54e4e",
          textColor: "#fff",
          trailColor: "rgba(255,255,255,0.2)"
        })}
      />
      <div className="playPauseContainer">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="settingsContainer">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
};

export default Timer;
