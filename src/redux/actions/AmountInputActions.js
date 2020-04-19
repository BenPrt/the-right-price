import ActionTypes from 'redux/ActionTypes';
import { updateCalculatedValues } from './ResultActions';

// Action and thunk handling input amount value update
// Action setting the input amount value
export const setAmountValue = (value) => {
  return {
    type: ActionTypes.setAmountValue,
    value,
  };
};
// Thunk dispatching the setting amount value and updating calculations
export const updateAmountValue = (value) => {
  return (dispatch) => {
    dispatch(setAmountValue(value));
    dispatch(updateCalculatedValues());
  };
};

// Action and thunks handling the input currency update
// Action setting the input currency
export const setAmountCurrency = (currency) => {
  return {
    type: ActionTypes.setAmountCurrency,
    currency,
  };
};
// Thunk fetching from local storage an eventual previously set-up input currency
export const fetchAmountCurrency = () => {
  return (dispatch) => {
    const storedCurrency = JSON.parse(localStorage.getItem('inputCurrency'));
    if (storedCurrency) {
      dispatch(setAmountCurrency(storedCurrency));
    }
  };
};
// Thunk setting a new input currency in local storage and dispatching the set action
export const updateAmountCurrency = (currency) => {
  return (dispatch) => {
    if (currency) {
      localStorage.setItem('inputCurrency', JSON.stringify(currency));
    } else {
      localStorage.removeItem('inputCurrency');
    }
    dispatch(setAmountCurrency(currency));
    dispatch(updateCalculatedValues());
  };
};
