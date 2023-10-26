import "./App.css";
import Settings from "./components/settings/Settings";
import SettingsContext from "./components/settings/SettingsContext";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [focusMinutes, setFocusMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          focusMinutes,
          breakMinutes,
          setFocusMinutes,
          setBreakMinutes
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
