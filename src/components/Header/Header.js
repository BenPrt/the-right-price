import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div id="actions-container">
        <i id="reset-button" className="fas fa-redo"></i>
        <SettingsIcon id="settings-button" />
      </div>

      <h2 id="calculator-title">
        <span>Fill</span> Calculator
      </h2>
    </div>
  );
}

export default Header;
