import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import './Amount.scss';
import {
  updateAmountValue,
  updateAmountCurrency,
  fetchAmountCurrency,
} from 'redux/actions/AmountInputActions';

function Amount() {
  const currenciesList = useSelector(
    (state) => state.currenciesData.currenciesList,
  );
  const amountCurrency = useSelector(
    (state) => state.amountData.currency,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAmountCurrency());
  }, [dispatch]);

  const handleAmountUpdate = (event) => {
    if (event.target.value < 0) {
      event.target.value = Math.abs(event.target.value);
    }
    dispatch(updateAmountValue(event.target.value));
  };
  const handleCurrencyUpdate = (event) => {
    dispatch(updateAmountCurrency(currenciesList[event.target.value]));
  };

  return (
    <div className="Amount">
      <form noValidate autoComplete="off">
        <TextField
          className="amount-input"
          label="Standard"
          onChange={handleAmountUpdate}
          type="number"
          validator=""
          inputProps={{ min: '0' }}
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
                cur &&
                amountCurrency &&
                cur.name === amountCurrency.name,
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

export default Amount;
