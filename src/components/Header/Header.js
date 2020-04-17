import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';

import './Header.scss';
import { toggleSettings } from 'redux/actions/SettingsActions';

function Header() {
  const dispatch = useDispatch();

  const handleReset = () => {
    alert('reset');
  };

  const handleToggleSettings = () => {
    dispatch(toggleSettings(true));
  };

  return (
    <div className="Header">
      <div id="actions-container">
        <IconButton aria-label="settings" onClick={handleReset.bind(this)}>
          <RefreshIcon />
        </IconButton>
        <IconButton
          aria-label="settings"
          onClick={handleToggleSettings.bind(this)}
        >
          <SettingsIcon />
        </IconButton>
      </div>

      <h2 id="calculator-title">
        <span>Fill</span> Calculator
      </h2>
    </div>
  );
}

export default Header;
