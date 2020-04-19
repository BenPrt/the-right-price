import ActionTypes from 'redux/ActionTypes';

const initialState = {
  value: 0,
  currency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setAmountValue:
      return { ...state, value: action.value };
    case ActionTypes.setAmountCurrency:
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};
