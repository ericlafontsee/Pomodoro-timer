import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";

const Timer = () => {
  const percentage = 66;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
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
        <SettingsButton />
      </div>
    </div>
  );
};

export default Timer;
