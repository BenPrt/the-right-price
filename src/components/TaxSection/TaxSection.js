import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import './TaxSection.scss';

import { toggleTaxSection } from 'redux/actions/TaxesActions';
import PercentageChip from 'components/PercentageChip/PercentageChip';

const taxSectionsMessage = {
  noTaxSelected: 'Please select or add a tax percentage',
  noInput: 'Please enter an amount first to calculate the tax amount',
};

function TaxSection() {
  const isTaxSectionEnabled = useSelector((state) => state.taxData.isEnabled);
  const taxesList = useSelector((state) => state.taxData.taxesOptions);
  const selectedTaxValue = useSelector(
    (state) => state.taxData.selectedTaxValue,
  );
  const enteredAmount = useSelector((state) => state.amountData.value);
  const calculatedTaxAmount = useSelector((state) => state.taxData.calculatedTaxAmount);
  const selectedCurrency = useSelector((state) => state.amountData.currency);

  const dispatch = useDispatch();

  const handleTaxSectionEnabling = () => {
    dispatch(toggleTaxSection(!isTaxSectionEnabled));
  };

  return (
    <div className="TaxSection">
      <div
        id="tax-section-title-wrapper"
        role="button"
        tabIndex={0}
        onClick={handleTaxSectionEnabling}
      >
        <h2 id="tax-section-title">Tax</h2>
        <Switch
          checked={isTaxSectionEnabled}
          name="taxSectionSwitch"
          color="primary"
        />
      </div>
      <div
        className={`tax-section-content ${
          isTaxSectionEnabled ? 'displayed' : ''
        }`}
      >
        <div id="tax-chips-wrapper">
          <PercentageChip mode="create" type="tax" />
          {taxesList.map((tax, index) => (
            <PercentageChip key={`tax-${index}`} mode="display" type="tax" value={tax} />
          ))}
        </div>
        {enteredAmount > 0 ? (
          selectedTaxValue ? (
            <div id="calculated-tax-wrapper">
              <p id="calculated-tax-label">Calculated tax amount</p>
              <p id="calculated-tax-result">
                <span id="result">{calculatedTaxAmount}</span>{selectedCurrency.name}
              </p>
            </div>
          ) : (
            <p className="tax-info-message">{taxSectionsMessage.noTaxSelected}</p>
          )
        ) : (
          <p className="tax-info-message">{taxSectionsMessage.noInput}</p>
        )}
        <p></p>
      </div>
    </div>
  );
}

export default TaxSection;
