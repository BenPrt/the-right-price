import ActionTypes from 'redux/ActionTypes';

const initialState = {
  value: 0,
  currency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.updateAmountValue:
      return { ...state, value: action.value };
    case ActionTypes.updateAmountCurrency:
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};
