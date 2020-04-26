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
  const [inputStyle, setInputStyle] = useState({
    width: '10px',
    paddingLeft: '10px',
  });

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

  const handleUpdateChipAddingValue = (event) => {
    const decimalRegexp = RegExp('^\\d{0,2}(?:[\\.\\,]\\d{0,2})?$');

    if (decimalRegexp.test(event.target.value)) {
      setTaxInputValue(event.target.value);
      switch (event.target.value.length) {
        case 0:
          setInputStyle({
            width: '10px',
            paddingLeft: '10px',
          });
          break;
        case 1:
          setInputStyle({
            width: '14px',
            paddingLeft: '5px',
          });
          break;
        case 2:
          setInputStyle({
            width: '20px',
            paddingLeft: '0px',
          });
          break;
        case 3:
          setInputStyle({
            width: '24px',
            paddingLeft: '0px',
          });
          break;
        case 4:
          setInputStyle({
            width: '32px',
            paddingLeft: '0px',
          });
          break;
        default:
          setInputStyle({
            width: '42px',
            paddingLeft: '0px',
          });
          break;
      }
    }
  };

  const handleChipAdding = (event) => {
    event.preventDefault();
    toggleEditionMode(false);

    if (taxInputValue.length > 0) {
      if (props.type === 'tax') {
        dispatch(insertNewTax(parseFloat(taxInputValue, 10)));
      } else {
        dispatch(insertNewTip(parseFloat(taxInputValue, 10)));
      }
    }
    setTaxInputValue('');
    setInputStyle({
      width: '10px',
      paddingLeft: '10px',
    });
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
          <form
            className="percentage-chip-adding-form"
            onSubmit={handleChipAdding.bind(this)}
          >
            <input
              className="percentage-chip-input"
              inputMode="decimal"
              value={taxInputValue}
              onChange={handleUpdateChipAddingValue.bind(this)}
              onBlur={handleChipAdding.bind(this)}
              style={inputStyle}
              autoFocus
            ></input>
            <p className="percentage-chip-percent-input-label">%</p>
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
