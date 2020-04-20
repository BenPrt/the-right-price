import ActionTypes from 'redux/ActionTypes';

const initialState = {
  isEnabled: false,
  tipsOptions: [15, 17, 20],
  selectedTipValue: 0,
  calculatedTipAmount: 0,
};

// Reducer handling the tips section data
export default (state = initialState, action) => {
  switch (action.type) {
    // Setting the tip section toggle value
    case ActionTypes.toggleTipSection:
      return { ...state, isEnabled: action.toggleValue };
    // Setting the selected tip value
    case ActionTypes.selectTipValue:
      return {
        ...state,
        selectedTipValue: action.tipValue ? action.tipValue : 0,
      };
    // Setting the calculated tip amount value
    case ActionTypes.setCalculatedTipAmount:
      return { ...state, calculatedTipAmount: action.calculatedValue };
    // Setting the tips list options
    case ActionTypes.setTipsList:
      return { ...state, tipsOptions: action.tipsList };
    default:
      return state;
  }
};
