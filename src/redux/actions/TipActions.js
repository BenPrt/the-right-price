import ActionTypes from 'redux/ActionTypes';

export const toggleTipSection = (toggleValue) => {
  return {
    type: ActionTypes.toggleTipSection,
    toggleValue,
  };
};
