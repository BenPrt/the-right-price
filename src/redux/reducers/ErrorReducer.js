import ActionTypes from 'redux/ActionTypes';

const initialState = {
  new: false,
  errorMessage: [],
};

// Reducer handling the error data
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the error when the getCurrencies request fails
    case ActionTypes.getCurrenciesRequestError:
      return { ...state, new: true, errorMessage: action.errorMessage };
    // Hiding error snackbar when the user has read it
    case ActionTypes.readError:
      return { ...state, new: action.displayValue };
    default:
      return state;
  }
};
