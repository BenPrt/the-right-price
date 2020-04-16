import ActionTypes from 'redux/ActionTypes';

export const toggleTaxSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleTaxSection,
    toggleValue,
  };
};
