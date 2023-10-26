import React, { useContext, useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./settings/SettingsButton";
import SettingsContext from "./settings/SettingsContext";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("focus");
  const [secondsLeft, setSecondsLeft] = useState(0);

  function switchMode() {
    const nextMode = "focus" ? "break" : "focus";
    const nextSeconds =
      (nextMode === "focus"
        ? settingsInfo.focusMinutesfocus
        : settingsInfo.breakMinutes) * 60;
    setMode(nextMode);
    setSecondsLeft(nextSeconds);
  }

  function tick() {
    setSecondsLeft(secondsLeft - 1);
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.focusMinutes * 60);
  }

  useEffect(() => {
    initTimer();
    setInterval(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft) {
        switchMode();
      }

      tick();
    }, 1000);
  }, [settingsInfo]);

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
        {isPaused ? <PlayButton /> : <PauseButton />}
      </div>
      <div className="settingsContainer">
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
};

export default Timer;
