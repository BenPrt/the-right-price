import ActionTypes from 'redux/ActionTypes';
import { setCalculatedTaxAmount } from './TaxActions';
import { setCalculatedTipAmount } from './TipActions';

// - Actions and thunk making calculations and setting calculated values
// -- Action setting the calculated total amount
export const setCalculatedTotalAmount = (amount) => {
  return {
    type: ActionTypes.setCalculatedTotalAmount,
    amount,
  };
};
// -- Action setting the converted total amount
export const setConvertedTotalAmount = (amount) => {
  return {
    type: ActionTypes.setConvertedTotalAmount,
    amount,
  };
};
// -- Thunk making all the calculations and dispatching the value updates
export const updateCalculatedValues = () => {
  return (dispatch, getState) => {
    // Initiating needed initial data
    const favoriteCurrencyRate = getState().currenciesData.favoriteCurrency
      .rate;
    const inputValue = parseFloat(getState().amountData.value);
    const inputCurrencyRate = getState().amountData.currency.rate;
    const isTaxEnabled = getState().taxData.isEnabled;
    const taxPercentage = getState().taxData.selectedTaxValue;
    const isTipEnabled = getState().tipData.isEnabled;
    const tipPercentage = getState().tipData.selectedTipValue;

    if (inputValue > 0) {
      // Tax amount calculation
      const calculatedTaxValue = parseFloat(
        (inputValue * (taxPercentage / 100)).toFixed(2),
      );
      dispatch(setCalculatedTaxAmount(calculatedTaxValue));

      // Tip amount calculation
      const calculatedTipValue = parseFloat(
        (
          (inputValue + (isTaxEnabled ? calculatedTaxValue : 0)) *
          (tipPercentage / 100)
        ).toFixed(2),
      );
      dispatch(setCalculatedTipAmount(calculatedTipValue));

      // Total amount calculation
      const calculatedTotalValue = parseFloat(
        (
          inputValue +
          (isTaxEnabled ? calculatedTaxValue : 0) +
          (isTipEnabled ? calculatedTipValue : 0)
        ).toFixed(2),
      );

      dispatch(setCalculatedTotalAmount(calculatedTotalValue));

      // Total amount conversion
      const convertedtoUSDTotalValue = calculatedTotalValue / inputCurrencyRate;

      const convertedtoTargetTotalValue = parseFloat(
        (convertedtoUSDTotalValue * favoriteCurrencyRate).toFixed(2),
      );
      dispatch(setConvertedTotalAmount(convertedtoTargetTotalValue));
    }
  };
};
