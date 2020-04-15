import ActionTypes from 'redux/ActionTypes';

const initialState = {
  new: false,
  errorMessage: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getCurrenciesRequestError:
      return { ...state, new: true, errorMessage: action.errorMessage };
    case ActionTypes.readError:
      return { ...state, new: action.displayValue };
    default:
      return state;
  }
};
