import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import './TaxSection.scss';

import { toggleTaxSection } from 'redux/actions/TaxesActions';

function TaxSection() {
  const isTaxSectionEnabled = useSelector(
    (state) => state.taxData.isEnabled,
  );

  const dispatch = useDispatch();

  const handleTaxSectionEnabling = (event) => {
    dispatch(toggleTaxSection(!isTaxSectionEnabled));
  };

  return (
    <div className="TaxSection">
      <div id="tax-section-title-wrapper">
        <h2 id="tax-section-title">Tax</h2>
        <Switch
          checked={isTaxSectionEnabled}
          onChange={handleTaxSectionEnabling}
          name="taxSectionSwitch"
          color="primary"
        />
      </div>
      <div className={`tax-section-content ${isTaxSectionEnabled ? 'displayed' : ''}`}>
        Tax Section Content
      </div>
    </div>
  );
}

export default TaxSection;
