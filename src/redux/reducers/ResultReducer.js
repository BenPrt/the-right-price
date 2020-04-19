import ActionTypes from 'redux/ActionTypes';

const initialState = {
  calculatedTotalAmount: 0,
  convertedTotalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setCalculatedTotalAmount:
      return { ...state, calculatedTotalAmount: action.amount };
    case ActionTypes.setConvertedTotalAmount:
      return { ...state, convertedTotalAmount: action.amount };
    default:
      return state;
  }
};
