import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import './TipSection.scss';

import { toggleTipSection } from 'redux/actions/TipActions';

function TipSection() {
  const isTipSectionEnabled = useSelector(
    (state) => state.tipData.isEnabled,
  );

  const dispatch = useDispatch();

  const handleTipSectionEnabling = (event) => {
    dispatch(toggleTipSection(!isTipSectionEnabled));
  };

  return (
    <div className="TipSection">
      <div id="tip-section-title-wrapper">
        <h2 id="tip-section-title">Tip</h2>
        <Switch
          checked={isTipSectionEnabled}
          onChange={handleTipSectionEnabling}
          name="tipSectionSwitch"
          color="primary"
        />
      </div>
      <div className={`tip-section-content ${isTipSectionEnabled ? 'displayed' : ''}`}>
        Tip Section Content
      </div>
    </div>
  );
}

export default TipSection;
