import ActionTypes from 'redux/ActionTypes';

export const readError = () => {
  return {
    type: ActionTypes.readError,
    displayValue: false,
  };
};
