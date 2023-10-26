import React from "react";
import { CiSettings } from 'react-icons/ci';
import './Settings.css';

const SettingsButton = (props) => {
  return (
    <button {...props} className="settingsBtn">
      <CiSettings />
      Settings
    </button>
  );
};

export default SettingsButton;
