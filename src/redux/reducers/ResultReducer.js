import ActionTypes from 'redux/ActionTypes';

const initialState = {
  calculatedTotalAmount: 0,
  convertedTotalAmount: 0,
};

// Reducer handling the calculated values data
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the calculated total
    case ActionTypes.setCalculatedTotalAmount:
      return { ...state, calculatedTotalAmount: action.amount };
    // Setting the converted calculated total
    case ActionTypes.setConvertedTotalAmount:
      return { ...state, convertedTotalAmount: action.amount };
    default:
      return state;
  }
};
