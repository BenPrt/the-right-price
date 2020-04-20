import ActionTypes from 'redux/ActionTypes';

// - Action dispatched when the user closes the error snackbar, 
// confirming that he's now aware of the error
export const readError = () => {
  return {
    type: ActionTypes.readError,
    displayValue: false,
  };
};
