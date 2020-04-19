import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import './AmountSection.scss';
import {
  updateAmountValue,
  updateAmountCurrency,
  fetchAmountCurrency,
} from 'redux/actions/AmountInputActions';

function AmountSection() {
  const currenciesList = useSelector(
    (state) => state.currenciesData.currenciesList,
  );
  const amountCurrency = useSelector((state) => state.amountData.currency);
  const [amountInputValue, setAmountInputValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAmountCurrency());
  }, [dispatch]);

  const handleAmountUpdate = (event) => {
    const decimalRegexp = RegExp('^(?=.*[0-9])?\\d*(?:[\\.\\,]\\d{0,2})?$');

    if (decimalRegexp.test(event.target.value)) {
      setAmountInputValue(event.target.value);
      dispatch(updateAmountValue(parseFloat(event.target.value)));
    }
  };
  const handleCurrencyUpdate = (event) => {
    dispatch(updateAmountCurrency(currenciesList[event.target.value]));
  };

  return (
    <div className="AmountSection">
      <form noValidate autoComplete="off">
        <TextField
          className="amount-input"
          label="Amount"
          onChange={handleAmountUpdate}
          validator=""
          value={amountInputValue}
          inputProps={{
            min: '0',
          }}
        />
        <FormControl
          variant="outlined"
          className="input-currency-select-form"
          disabled={!(currenciesList.length > 1)}
        >
          <InputLabel htmlFor="input-currency-select-field">
            Currency
          </InputLabel>
          <Select
            native
            onChange={handleCurrencyUpdate}
            label="Currency"
            inputProps={{
              name: 'input-currency',
              id: 'input-currency-select-field',
            }}
            value={currenciesList.findIndex(
              (cur) =>
                cur && amountCurrency && cur.name === amountCurrency.name,
            )}
          >
            <option aria-label="None" value="" />
            {currenciesList.map((currency, index) => (
              <option key={index} value={index}>
                {currency.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </form>
    </div>
  );
}

export default AmountSection;
