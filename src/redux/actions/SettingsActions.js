import ActionTypes from 'redux/ActionTypes';

export const toggleSettings = (toggleValue) => {
  return {
    type: ActionTypes.toggleSettings,
    toggleValue,
  };
};
