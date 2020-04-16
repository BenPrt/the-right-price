import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PercentageChip.scss';
import { selectTaxValue } from 'redux/actions/TaxesActions';

function PercentageChip(props) {
  const isChipSelected = useSelector((state) => {
    if (props.type === 'tax') {
      return state.taxData.selectedTaxValue === props.value;
    } else {
      return state.tipData.selectedTipValue === props.value;
    }
  });

  const dispatch = useDispatch();

  const handleChipClick = (value) => {
    dispatch(selectTaxValue(value));
  };

  return (
    <div
      className={`PercentageChip ${isChipSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleChipClick.bind(this, props.value)}
    >
      <p className="percentage-chip-value">{props.value}%</p>
    </div>
  );
}

export default PercentageChip;
