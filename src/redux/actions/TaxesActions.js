import ActionTypes from 'redux/ActionTypes';

export const toggleTaxSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleTaxSection,
    toggleValue,
  };
};
export const selectTaxValue = (taxValue) => {
  return {
    type: ActionTypes.selectTaxValue,
    taxValue,
  };
};
export const addNewTaxPercentage = (percentage) => {
  return {
    type: ActionTypes.addNewTaxPercentage,
    percentage,
  };
};
