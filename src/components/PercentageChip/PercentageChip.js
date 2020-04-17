import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PercentageChip.scss';
import { selectTaxValue, insertNewTax } from 'redux/actions/TaxActions';
import { selectTipValue, insertNewTip } from 'redux/actions/TipActions';

function PercentageChip(props) {
  const isChipSelected = useSelector((state) => {
    if (props.type === 'tax' && props.mode === 'display') {
      return state.taxData.selectedTaxValue === props.value;
    } else if (props.type === 'tip' && props.mode === 'display') {
      return state.tipData.selectedTipValue === props.value;
    }
    return false;
  });

  const [isInEditionMode, toggleEditionMode] = useState(false);
  const [taxInputValue, setTaxInputValue] = useState('');

  const dispatch = useDispatch();

  const handleChipClick = (value) => {
    if (props.mode === 'create') {
      toggleEditionMode(true);
    } else {
      if (props.type === 'tax') {
        dispatch(selectTaxValue(value));
      } else {
        dispatch(selectTipValue(value));
      }
    }
  };

  const handleChipAddingValue = (event) => {
    let newValue = event.target.value;
    if (newValue.length > 2) {
      newValue = newValue.substring(0, 2);
    }
    if (parseInt(newValue, 10) < 0) {
      newValue = Math.abs(parseInt(newValue, 10));
    }
    setTaxInputValue(newValue);
  };

  const handleChipAdding = () => {
    toggleEditionMode(false);

    if (taxInputValue.length > 0) {
      if (props.type === 'tax') {
        dispatch(insertNewTax(parseInt(taxInputValue, 10)));
      } else {
        dispatch(insertNewTip(parseInt(taxInputValue, 10)));
      }
    }
    setTaxInputValue('');
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
          <form onSubmit={handleChipAdding.bind(this)}>
            <input
              className="percentage-chip-input"
              type="number"
              value={taxInputValue}
              onChange={handleChipAddingValue.bind(this)}
              onBlur={handleChipAdding.bind(this)}
              autoFocus
            ></input>
          </form>
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
