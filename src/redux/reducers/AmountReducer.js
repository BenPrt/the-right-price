import ActionTypes from 'redux/ActionTypes';

const initialState = {
  value: '',
  currency: {},
};

// Reducer handling the input amounts
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the input amount value
    case ActionTypes.setAmountValue:
      const amountToSet = action.value ? action.value : '';
      return { ...state, value: amountToSet };
    // Setting the input amount currency
    case ActionTypes.setAmountCurrency:
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};
