import ActionTypes from 'redux/ActionTypes';

const initialState = {
  value: '',
  currency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setAmountValue:
      const amountToSet = action.value ? action.value : '';
      return { ...state, value: amountToSet };
    case ActionTypes.setAmountCurrency:
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};
