import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PercentageChip.scss';
import {
  selectTaxValue,
  addNewTaxPercentage,
} from 'redux/actions/TaxesActions';

function PercentageChip(props) {
  const isChipSelected = useSelector((state) => {
    if (props.type === 'tax') {
      return state.taxData.selectedTaxValue === props.value;
    } else if (props.type === 'tip') {
      return state.tipData.selectedTipValue === props.value;
    }
  });

  const [isInEditionMode, toggleEditionMode] = useState(false);

  const dispatch = useDispatch();

  const handleChipClick = (value) => {
    if (props.mode === 'create') {
      toggleEditionMode(true);
    } else {
      if (props.type === 'tax') {
        dispatch(selectTaxValue(value));
      } else {
        // dispatch(selectTipValue(value));
      }
    }
  };

  const handleChipAddingValue = (event) => {
    if (event.target.value > 2) {
      event.target.value = parseInt(
        String(event.target.value).substring(0, 2),
        10,
      );
    }
    if (event.target.value < 0) {
      event.target.value = Math.abs(event.target.value);
    }
  };

  const handleChipAdding = (event) => {
    toggleEditionMode(false);

    if (event.target.value.length > 0) {
      if (props.type === 'tax') {
        dispatch(addNewTaxPercentage(parseInt(event.target.value, 10)));
      } else {
        // dispatch(addNewTipPercentage(event.target.value));
      }
    }
  };

  return (
    <div
      className={`PercentageChip 
      ${isChipSelected ? 'selected' : ''} 
      ${isInEditionMode ? 'edition' : ''}
      ${props.mode === 'create' && !isInEditionMode ? 'create' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleChipClick.bind(this, props.value)}
    >
      {props.mode === 'create' ? (
        isInEditionMode ? (
          <input
            className="percentage-chip-input"
            type="number"
            onChange={handleChipAddingValue.bind(this)}
            onBlur={handleChipAdding.bind(this)}
            autoFocus
          ></input>
        ) : (
          <p className="percentage-chip-value">+</p>
        )
      ) : (
        <p className="percentage-chip-value">{props.value}%</p>
      )}
    </div>
  );
}

export default PercentageChip;
