import ActionTypes from 'redux/ActionTypes';
import { setCalculatedTaxAmount } from './TaxActions';

export const toggleTaxSection = () => {
  return {
    type: ActionTypes.toggleTaxSection,
  };
};

export const updateCalculatedValues = () => {
  return (dispatch, getState) => {
    // Initiating needed initial data
    const favoriteCurrencyRate = getState().currenciesData.favoriteCurrency
      .rate;
    const inputValue = getState().amountData.value;
    const inputCurrencyRate = getState().amountData.currency.rate;
    const isTaxEnabled = getState().taxData.isEnabled;
    const taxPercentage = getState().taxData.selectedTaxValue;
    const isTipEnabled = getState().tipData.isEnabled;
    const tipPercentage = getState().taxData.selectedTipValue;

    // Tax amount calculation
    const calculatedTaxValue = (inputValue * (taxPercentage / 100)).toFixed(2);
    dispatch(setCalculatedTaxAmount(calculatedTaxValue));

    // Tip amount calculation
    const calculatedTipValue = (inputValue * (tipPercentage / 100)).toFixed(2);

    // Total amount calculation
    const calculatedTotalValue =
      inputValue +
      (isTaxEnabled ? calculatedTaxValue : 0) +
      (isTipEnabled ? calculatedTipValue : 0);
  
  };
};
