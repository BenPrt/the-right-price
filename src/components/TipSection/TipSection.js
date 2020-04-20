import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';

import './TipSection.scss';

import { fetchTipsList, toggleTipSection } from 'redux/actions/TipActions';
import PercentageChip from 'components/PercentageChip/PercentageChip';

const tipSectionsMessage = {
  noTipSelected: 'Please select or add a tip percentage',
  noInput: 'Please enter an amount first to calculate the tip amount',
};

function TipSection() {
  const isTipSectionEnabled = useSelector((state) => state.tipData.isEnabled);
  const tipsList = useSelector((state) => state.tipData.tipsOptions);
  const isTipOptionAddable = useSelector(
    (state) => state.tipData.tipsOptions.length < 5,
  );
  const selectedTipValue = useSelector(
    (state) => state.tipData.selectedTipValue,
  );
  const enteredAmount = useSelector((state) => state.amountData.value);
  const calculatedTipAmount = useSelector(
    (state) => state.tipData.calculatedTipAmount,
  );
  const selectedCurrency = useSelector((state) => state.amountData.currency);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTipsList());
  }, [dispatch]);

  const handleTipSectionEnabling = () => {
    dispatch(toggleTipSection(!isTipSectionEnabled));
  };

  return (
    <div className="TipSection">
      <div
        id="tip-section-title-wrapper"
        role="button"
        tabIndex={0}
        onClick={handleTipSectionEnabling}
      >
        <h2 id="tip-section-title">Tip</h2>
        <Switch
          checked={isTipSectionEnabled}
          name="tipSectionSwitch"
          color="primary"
        />
      </div>
      <div
        className={`tip-section-content ${
          isTipSectionEnabled ? 'displayed' : ''
        }`}
      >
        <div id="tip-chips-wrapper">
          {isTipOptionAddable ? (
            <PercentageChip mode="create" type="tip" />
          ) : (
            ''
          )}
          {tipsList.map((tip, index) => (
            <PercentageChip
              key={`tip-${index}`}
              mode="display"
              type="tip"
              value={tip}
            />
          ))}
        </div>
        {enteredAmount > 0 ? (
          selectedTipValue ? (
            <div id="calculated-tip-wrapper">
              <p id="calculated-tip-label">Calculated tip amount</p>
              <p id="calculated-tip-result">
                <span id="result">{calculatedTipAmount}</span>
                {selectedCurrency.name}
              </p>
            </div>
          ) : (
            <p className="tip-info-message">
              {tipSectionsMessage.noTipSelected}
            </p>
          )
        ) : (
          <p className="tip-info-message">{tipSectionsMessage.noInput}</p>
        )}
      </div>
    </div>
  );
}

export default TipSection;
