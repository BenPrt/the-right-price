import ActionTypes from 'redux/ActionTypes';

export const updateAmountValue = (value) => {
  return {
    type: ActionTypes.updateAmountValue,
    value,
  };
};
export const setAmountCurrency = (currency) => {
  return {
    type: ActionTypes.updateAmountCurrency,
    currency,
  };
};
export const fetchAmountCurrency = () => {
  return (dispatch) => {
    const storedCurrency = JSON.parse(localStorage.getItem('inputCurrency'));
    if (storedCurrency) {
      dispatch(setAmountCurrency(storedCurrency));
    }
  };
};
export const updateAmountCurrency = (currency) => {
  return (dispatch) => {
    if (currency) {
      localStorage.setItem('inputCurrency', JSON.stringify(currency));
    } else {
      localStorage.removeItem('inputCurrency');
    }
    dispatch(setAmountCurrency(currency));
  };
};
