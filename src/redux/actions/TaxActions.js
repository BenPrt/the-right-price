import ActionTypes from 'redux/ActionTypes';
import { updateCalculatedValues } from './ResultActions';

// Action toggling the Tax Section display
export const setTaxSectionToggleValue = (toggleValue) => {
  return {
    type: ActionTypes.toggleTaxSection,
    toggleValue,
  };
};
export const toggleTaxSection = (toggleValue) => {
  return (dispatch) => {
    dispatch(setTaxSectionToggleValue(toggleValue));
    dispatch(updateCalculatedValues());
  };
};

// Action and thunk handling the tax percentage selection
export const setSelectedTaxValue = (taxValue) => {
  return {
    type: ActionTypes.selectTaxValue,
    taxValue,
  };
};
export const selectTaxValue = (taxValue) => {
  return (dispatch) => {
    dispatch(setSelectedTaxValue(taxValue));
    dispatch(updateCalculatedValues());
  };
};

// Action and thunks handling the taxes list update, storage and fetch
// Action setting updated taxes list
export const setTaxesList = (taxesList) => {
  return {
    type: ActionTypes.setTaxesList,
    taxesList,
  };
};
// Thunk fetching the taxes list from local storage, called when component init
export const fetchTaxesList = () => {
  return (dispatch) => {
    const storedList = JSON.parse(localStorage.getItem('taxesList'));
    if (storedList) {
      dispatch(setTaxesList(storedList));
    }
  };
};
// Thunk called when a new tax is added, updating the list then storing it
export const insertNewTax = (percentage) => {
  return (dispatch, getState) => {
    let storedList = JSON.parse(localStorage.getItem('taxesList'));
    if (!storedList) {
      storedList = Object.assign([], getState().taxData.taxesOptions);
    }
    if (storedList.indexOf(percentage) === -1) {
      storedList.push(percentage);
      storedList.sort((a, b) => a - b);
    }
    localStorage.setItem('taxesList', JSON.stringify(storedList));
    dispatch(setTaxesList(storedList));
    dispatch(selectTaxValue(percentage));
  };
};
// Thunk handling the tax deletion from the taxes list
export const removeTax = (percentage) => {
  return (dispatch, getState) => {
    if (getState().taxData.selectedTaxValue === percentage) {
      dispatch(selectTaxValue());
    }
    const actualTaxValues = getState().taxData.taxesOptions;
    const newTaxValues = actualTaxValues.filter((tax) => tax !== percentage);
    localStorage.setItem('taxesList', JSON.stringify(newTaxValues));
    dispatch(setTaxesList(newTaxValues));
  };
};

// Action setting the calculated tax amount (calculations are made in CalculationActions file)
export const setCalculatedTaxAmount = (calculatedValue) => {
  return {
    type: ActionTypes.setCalculatedTaxAmount,
    calculatedValue,
  };
};
