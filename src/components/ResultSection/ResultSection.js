import React from 'react';

import './ResultSection.scss';
import { useSelector } from 'react-redux';

function ResultSection() {
  const selectedCurrency = useSelector(
    (state) => state.amountData.currency.name,
  );
  const favoriteCurrency = useSelector(
    (state) => state.currenciesData.favoriteCurrency.name,
  );
  const isTaxEnabled = useSelector(
    (state) => state.taxData.isEnabled && state.taxData.calculatedTaxAmount > 0,
  );
  const isTipEnabled = useSelector(
    (state) => state.tipData.isEnabled && state.tipData.calculatedTipAmount > 0,
  );
  const calculatedTotalAmount = useSelector(
    (state) => state.resultData.calculatedTotalAmount,
  );
  const convertedTotalAmount = useSelector(
    (state) => state.resultData.convertedTotalAmount,
  );

  const resultIsDisplayed =
    calculatedTotalAmount > 0 && (isTaxEnabled || isTipEnabled);

  return (
    <div className={`ResultSection ${resultIsDisplayed ? 'displayed' : ''}`}>
      <p id="result-section-label">Total calculated amount</p>
      <p id="result-section-result">
        <span id="result-section-result-value">{calculatedTotalAmount}</span>
        {selectedCurrency}
      </p>
      <p
        id="result-section-converted"
        className={convertedTotalAmount > 0 ? '' : 'hidden'}
      >
        <span id="result-section-converted-value">{convertedTotalAmount}</span>
        {favoriteCurrency}
      </p>
    </div>
  );
}

export default ResultSection;
